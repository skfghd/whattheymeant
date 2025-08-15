import { Category, CategoryInfo, SamplePhrase, TranslationVariant, ToneType } from './types';

export const categories: CategoryInfo[] = [
  { id: 'boss', label: '상사 발언', emoji: '👔' },
  { id: 'casual', label: '일상 멘트', emoji: '💬' },
  { id: 'work', label: '일할 때 멘트', emoji: '📋' },
  { id: 'unclear', label: '애매한 멘트', emoji: '❓' },
];

const toneEmojis: Record<ToneType, string> = {
  realistic: '🎯',
  cynical: '🙃',
  empathetic: '🫂'
};

export const translationVariants: Record<Category, Record<string, TranslationVariant[]>> = {
  boss: {
    "고생 많으셨습니다": [
      { text: "형식적인 인사예요. 실제로는 당연한 일을 한 거라고 생각해요.", tone: 'realistic', emoji: '🎯' },
      { text: "수고했지만 이 정도는 당연한 거야. 더 열심히 해.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 고생했다고 인정해주는 거예요. 상사가 이런 말을 할 때는 진심일 가능성이 높아요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "아 그냥 간단하게만 해주세요": [
      { text: "복잡한 건 원하지 않으니 핵심만 정리해달라는 뜻이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "복잡하게 생각하지 말고 내 뜻대로만 해줘.", tone: 'cynical', emoji: '🙃' },
      { text: "상사도 바빠서 간단한 설명을 원하는 거예요. 이해할 만해요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "시간 될 때 한번 봐주세요": [
      { text: "급하지 않다는 뜻이지만, 가능하면 빨리 해달라는 의미예요.", tone: 'realistic', emoji: '🎯' },
      { text: "지금 당장 보고 내일까지 완료해줘.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 시간 여유가 있을 때 봐달라는 배려 있는 요청이에요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "잘 부탁해요": [
      { text: "업무를 맡기면서 잘 처리해달라는 정중한 부탁이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "이건 너가 알아서 책임지고 해달라는 뜻이야.", tone: 'cynical', emoji: '🙃' },
      { text: "함께 일하게 된 걸 반기면서 협력을 요청하는 따뜻한 말이에요.", tone: 'empathetic', emoji: '🫂' }
    ]
  },
  casual: {
    "다음에 밥 한번 먹어요": [
      { text: "사교적인 인사예요. 실제로 약속을 잡자는 건 아닐 가능성이 높아요.", tone: 'realistic', emoji: '🎯' },
      { text: "사실 약속 잡을 생각은 없어. 그냥 인사치례야.", tone: 'cynical', emoji: '🙃' },
      { text: "친해지고 싶어서 하는 말이에요. 진심으로 시간을 내고 싶어해요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "요즘 어떠세요?": [
      { text: "일상적인 안부 인사예요. 간단한 대답을 기대하는 거예요.", tone: 'realistic', emoji: '🎯' },
      { text: "별 관심은 없지만 예의상 물어보는 거야.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 안부가 궁금해서 물어보는 따뜻한 관심이에요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "바쁘시죠?": [
      { text: "바쁜 상황을 이해하면서도 뭔가 부탁하려는 전조예요.", tone: 'realistic', emoji: '🎯' },
      { text: "바쁜 건 알지만 부탁할 게 있어.", tone: 'cynical', emoji: '🙃' },
      { text: "부담 주기 싫어서 조심스럽게 접근하는 배려심이에요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "안녕하세요": [
      { text: "기본적인 업무 인사예요. 특별한 의미는 없어요.", tone: 'realistic', emoji: '🎯' },
      { text: "별로 반갑지 않지만 예의상 인사하는 거야.", tone: 'cynical', emoji: '🙃' },
      { text: "하루를 밝게 시작하려는 긍정적인 인사예요.", tone: 'empathetic', emoji: '🫂' }
    ]
  },
  work: {
    "급한 건 아니에요": [
      { text: "급하지 않다고 하지만 가능하면 빨리 처리해달라는 뜻이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "사실 엄청 급해. 최우선으로 처리해줘.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 급하지 않으니까 다른 일 먼저 하고 천천히 해도 돼요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "검토 부탁드려요": [
      { text: "내용을 점검해서 피드백을 주거나 승인해달라는 요청이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "사실상 승인해달라는 뜻이야. 문제 제기는 사양해.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 의견이 궁금해서 전문적인 검토를 부탁하는 거예요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "확인해주세요": [
      { text: "내용이 맞는지 체크해달라는 업무 요청이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "책임은 네가 져. 잘못되면 네 탓이야.", tone: 'cynical', emoji: '🙃' },
      { text: "함께 확인해서 더 나은 결과를 만들고 싶어하는 거예요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "공유드립니다": [
      { text: "정보를 전달하니까 참고해달라는 의미예요.", tone: 'realistic', emoji: '🎯' },
      { text: "알아서 숙지하고 실수하지 마.", tone: 'cynical', emoji: '🙃' },
      { text: "유용한 정보라고 생각해서 친절하게 공유하는 거예요.", tone: 'empathetic', emoji: '🫂' }
    ]
  },
  unclear: {
    "고민해볼게요": [
      { text: "긍정적이지도 부정적이지도 않은 애매한 답변이에요. 결정을 미루는 거예요.", tone: 'realistic', emoji: '🎯' },
      { text: "사실 이미 마음은 정했어. 거절하는 거야.", tone: 'cynical', emoji: '🙃' },
      { text: "진짜 고민하고 있어서 시간이 필요한 거예요. 기다려주면 좋겠어요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "나중에 이야기해요": [
      { text: "지금은 시간이 없거나 적절하지 않다고 생각하는 거예요.", tone: 'realistic', emoji: '🎯' },
      { text: "지금은 싫다는 뜻이야. 나중에도 별로 달라질 것 같지 않아.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 나중에 제대로 시간 내서 이야기하고 싶어하는 거예요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "상황을 봐야겠어요": [
      { text: "여러 변수를 고려해서 신중하게 판단하겠다는 의미예요.", tone: 'realistic', emoji: '🎯' },
      { text: "지금으로서는 불가능해. 포기해.", tone: 'cynical', emoji: '🙃' },
      { text: "상황이 좋아지면 도움을 주고 싶어하는 마음이 있어요.", tone: 'empathetic', emoji: '🫂' }
    ],
    "알겠습니다": [
      { text: "이해했다는 표현이에요. 특별한 감정은 없는 중립적인 반응이에요.", tone: 'realistic', emoji: '🎯' },
      { text: "이해했다는 게 아니라 그냥 대화 끝내고 싶어.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 이해했고 받아들였다는 긍정적인 의미예요.", tone: 'empathetic', emoji: '🫂' }
    ]
  }
};

export const samplePhrases: Record<Category, SamplePhrase[]> = {
  boss: [
    { text: "고생 많으셨습니다", category: 'boss' },
    { text: "아 그냥 간단하게만 해주세요", category: 'boss' },
    { text: "시간 될 때 한번 봐주세요", category: 'boss' },
    { text: "요즘 어떠세요?", category: 'boss' },
    { text: "회사 생활 재미있죠?", category: 'boss' },
    { text: "이거 급하지 않으니까", category: 'boss' }
  ],
  casual: [
    { text: "다음에 밥 한번 먹어요", category: 'casual' },
    { text: "요즘 어떠세요?", category: 'casual' },
    { text: "바쁘시죠?", category: 'casual' },
    { text: "커피 한잔 할까요?", category: 'casual' },
    { text: "주말 잘 보내세요", category: 'casual' },
    { text: "오늘 일찍 가세요", category: 'casual' }
  ],
  work: [
    { text: "급한 건 아니에요", category: 'work' },
    { text: "검토 부탁드려요", category: 'work' },
    { text: "참고용으로만 보세요", category: 'work' },
    { text: "간단하게 정리해주세요", category: 'work' },
    { text: "확인해주세요", category: 'work' },
    { text: "공유드립니다", category: 'work' }
  ],
  unclear: [
    { text: "고민해볼게요", category: 'unclear' },
    { text: "나중에 이야기해요", category: 'unclear' },
    { text: "잘 부탁드려요", category: 'unclear' },
    { text: "아직 정해진 게 없어서", category: 'unclear' },
    { text: "상황을 봐야겠어요", category: 'unclear' },
    { text: "조금 더 지켜봐야죠", category: 'unclear' }
  ]
};

export function getTranslation(text: string, category: Category): { translation: string; tone: ToneType; emoji: string } {
  const categoryVariants = translationVariants[category];
  
  if (categoryVariants[text]) {
    // Randomly select one of the variants
    const variants = categoryVariants[text];
    const randomIndex = Math.floor(Math.random() * variants.length);
    const selectedVariant = variants[randomIndex];
    return {
      translation: selectedVariant.text,
      tone: selectedVariant.tone,
      emoji: selectedVariant.emoji
    };
  }
  
  // Generic hidden meaning responses for unrecognized phrases with random tone
  const genericVariants: Record<Category, TranslationVariant[]> = {
    boss: [
      { text: "상사가 이런 말을 할 때는 보통 공식적인 의미와 실제 의도가 다를 수 있어요.", tone: 'realistic', emoji: '🎯' },
      { text: "상사 말에는 항상 숨은 의미가 있어. '내 뜻대로 해주되, 문제 생기면 네 책임'이야.", tone: 'cynical', emoji: '🙃' },
      { text: "상사도 사람이에요. 진심으로 배려하거나 격려하려는 마음일 수도 있어요.", tone: 'empathetic', emoji: '🫂' }
    ],
    casual: [
      { text: "동료와의 대화에서는 표면적인 의미보다 상황과 관계를 고려해야 해요.", tone: 'realistic', emoji: '🎯' },
      { text: "동료가 이렇게 말할 때는 대개 '별로 관심 없지만 예의상 하는 말'이거나 '뭔가 부탁할 일이 있어서'야.", tone: 'cynical', emoji: '🙃' },
      { text: "동료가 친근하게 다가오려는 진심어린 마음일 가능성이 높아요.", tone: 'empathetic', emoji: '🫂' }
    ],
    work: [
      { text: "업무 관련 대화는 보통 명확한 의미가 있지만 때로는 완곡한 표현일 수 있어요.", tone: 'realistic', emoji: '🎯' },
      { text: "업무에서 이런 표현을 쓸 때는 실제로는 '생각보다 급하니까 우선순위 높게 처리해줘'라는 뜻이야.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 협력하고 싶어서 정중하게 요청하는 진심일 수 있어요.", tone: 'empathetic', emoji: '🫂' }
    ],
    unclear: [
      { text: "애매한 표현은 여러 의미로 해석될 수 있어서 상황을 종합적으로 봐야 해요.", tone: 'realistic', emoji: '🎯' },
      { text: "이런 애매한 말은 대부분 '사실 마음은 이미 정했는데 직접 말하기 싫어서' 돌려 말하는 거야.", tone: 'cynical', emoji: '🙃' },
      { text: "정말 고민 중이거나 배려심에서 조심스럽게 접근하는 거일 수 있어요.", tone: 'empathetic', emoji: '🫂' }
    ]
  };
  
  const variants = genericVariants[category];
  const randomIndex = Math.floor(Math.random() * variants.length);
  const selectedVariant = variants[randomIndex];
  
  return {
    translation: selectedVariant.text,
    tone: selectedVariant.tone,
    emoji: selectedVariant.emoji
  };
}

export function getRandomPhrase(category: Category): string {
  const phrases = samplePhrases[category];
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex].text;
}
