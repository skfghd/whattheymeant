import { onRequest } from "firebase-functions/v2/https";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import session from "express-session";
import { z } from "zod";

// Initialize Firebase Admin
initializeApp();
const db = getFirestore();

// Express app setup
const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'", "https://kindtool.ai"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
    },
  },
}));

app.use(cors({
  origin: process.env.NODE_ENV === "production" 
    ? ["https://your-domain.web.app", "https://your-domain.firebaseapp.com"]
    : ["http://localhost:5000", "http://127.0.0.1:5000"],
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Session configuration (using Firestore as session store)
const FirestoreStore = require("connect-firestore")(session);

app.use(session({
  store: new FirestoreStore({
    database: db
  }),
  secret: process.env.SESSION_SECRET || "workplace-translator-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Translation schemas (from original shared/schema.ts)
const categorySchema = z.enum(['boss', 'casual', 'work', 'ambiguous']);

const translationRequestSchema = z.object({
  text: z.string().min(1).max(500),
  category: categorySchema
});

// Translation data (Korean workplace phrases with hidden meanings)
const translations = {
  boss: {
    "고생 많으셨습니다": [
      { tone: "🎯 현실적", emoji: "😤", translation: "정말 고생했다는 뜻이지만, 앞으로도 계속 고생할 준비 하세요" },
      { tone: "🙃 냉소적", emoji: "🎭", translation: "형식적인 인사일 뿐, 실제로는 더 많은 일이 기다리고 있어요" },
      { tone: "🫂 공감형", emoji: "💝", translation: "진심으로 여러분의 노고를 인정하고 감사하다는 마음입니다" }
    ],
    "내일까지 부탁드립니다": [
      { tone: "🎯 현실적", emoji: "⏰", translation: "오늘 밤샘 각오하세요. 내일 아침 첫 번째로 확인할 예정입니다" },
      { tone: "🙃 냉소적", emoji: "🔥", translation: "계획성 없는 급한 불 끄기. 왜 미리 말 안 했나요?" },
      { tone: "🫂 공감형", emoji: "🤝", translation: "정말 급한 일이라 죄송하지만, 꼭 필요한 일이에요" }
    ],
    "한번 검토해보세요": [
      { tone: "🎯 현실적", emoji: "🔍", translation: "틀렸으니까 다시 하라는 뜻. 꼼꼼히 뜯어고치세요" },
      { tone: "🙃 냉소적", emoji: "🙄", translation: "완전히 엉망이지만 직접적으로 말하기 어려워서 돌려 말하는 중" },
      { tone: "🫂 공감형", emoji: "📝", translation: "더 나은 결과를 위해 함께 개선해보자는 의미입니다" }
    ]
  },
  casual: {
    "점심 뭐 드세요?": [
      { tone: "🎯 현실적", emoji: "🍽️", translation: "진짜 궁금한 것도 있지만, 대화의 물꼬를 트려는 신호" },
      { tone: "🙃 냉소적", emoji: "😅", translation: "할 말이 없어서 하는 무난한 사회적 멘트" },
      { tone: "🫂 공감형", emoji: "💕", translation: "같이 먹자거나 관심을 보이는 다정한 표현일 수 있어요" }
    ],
    "요즘 어떠세요?": [
      { tone: "🎯 현실적", emoji: "🤔", translation: "정말 안부가 궁금하거나, 뭔가 말하고 싶은 게 있을 때" },
      { tone: "🙃 냉소적", emoji: "😐", translation: "별 의미 없는 인사치레. 대답도 형식적으로 하면 됨" },
      { tone: "🫂 공감형", emoji: "🌟", translation: "진심으로 당신의 근황과 기분을 챙기고 있다는 뜻" }
    ]
  },
  work: {
    "이거 언제까지 가능할까요?": [
      { tone: "🎯 현실적", emoji: "📅", translation: "빨리 해달라는 뜻. 합리적인 일정을 제시하되 최대한 빠르게" },
      { tone: "🙃 냉소적", emoji: "⚡", translation: "어제였으면 좋겠다는 마음. 이미 늦었다고 생각하는 중" },
      { tone: "🫂 공감형", emoji: "🤲", translation: "당신의 상황을 고려해서 현실적인 일정을 함께 정하고 싶어해요" }
    ],
    "참고 부탁드립니다": [
      { tone: "🎯 현실적", emoji: "📋", translation: "꼭 숙지하고 놓치지 말라는 중요한 정보입니다" },
      { tone: "🙃 냉소적", emoji: "📢", translation: "나중에 모른다고 하지 말라는 예방주사" },
      { tone: "🫂 공감형", emoji: "💡", translation: "도움이 되는 정보를 나누고 싶어서 전달드려요" }
    ]
  },
  ambiguous: {
    "나중에 이야기해요": [
      { tone: "🎯 현실적", emoji: "⏳", translation: "지금은 시간이나 상황이 안 되니까 진짜 나중에 하자는 뜻" },
      { tone: "🙃 냉소적", emoji: "🌫️", translation: "애매하게 미루기. 나중은 언제인지 아무도 모름" },
      { tone: "🫂 공감형", emoji: "🤗", translation: "지금보다 더 좋은 타이밍에 제대로 이야기하고 싶어해요" }
    ],
    "좋은 것 같은데요": [
      { tone: "🎯 현실적", emoji: "👍", translation: "나쁘지 않다는 뜻이지만 최고는 아님. 개선의 여지 있음" },
      { tone: "🙃 냉소적", emoji: "😬", translation: "별로지만 직접 말하기 애매해서 완곡하게 표현하는 중" },
      { tone: "🫂 공감형", emoji: "✨", translation: "진심으로 괜찮다고 생각하고 격려해주는 마음" }
    ]
  }
};

// Helper function to get random translation
function getRandomTranslation(text: string, category: string) {
  const categoryTranslations = translations[category as keyof typeof translations];
  if (!categoryTranslations) {
    return {
      tone: "🎯 현실적",
      emoji: "🤷",
      translation: "흠... 이 표현은 상황에 따라 여러 의미로 해석될 수 있어요"
    };
  }

  const phraseTranslations = categoryTranslations[text as keyof typeof categoryTranslations];
  if (!phraseTranslations) {
    const fallbacks = [
      { tone: "🎯 현실적", emoji: "🤔", translation: "맥락을 보고 판단해야 할 것 같아요" },
      { tone: "🙃 냉소적", emoji: "😏", translation: "아마 생각보다 복잡한 의미가 숨어있을 거예요" },
      { tone: "🫂 공감형", emoji: "💭", translation: "상대방의 진심을 헤아려보면 좋을 것 같아요" }
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  return phraseTranslations[Math.floor(Math.random() * phraseTranslations.length)];
}

// API Routes
app.post("/translate", async (req, res) => {
  try {
    const { text, category } = translationRequestSchema.parse(req.body);
    
    const translation = getRandomTranslation(text, category);
    
    // Log translation request to Firestore
    await db.collection("translations").add({
      originalText: text,
      category,
      translation: translation.translation,
      tone: translation.tone,
      emoji: translation.emoji,
      timestamp: new Date(),
      ip: req.ip
    });

    res.json({
      original: text,
      translation: translation.translation,
      tone: translation.tone,
      emoji: translation.emoji,
      category
    });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(400).json({ error: "Invalid request" });
  }
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Analytics endpoint
app.get("/analytics", async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const snapshot = await db.collection("translations")
      .where("timestamp", ">=", today)
      .get();
    
    res.json({
      todayTranslations: snapshot.size,
      totalTranslations: (await db.collection("translations").count().get()).data().count
    });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ error: "Analytics unavailable" });
  }
});

// Export the Express app as Firebase Function
export const api = onRequest({
  region: "asia-northeast3",
  memory: "512MiB",
  timeoutSeconds: 60,
  cors: true
}, app);