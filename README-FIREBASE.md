# Firebase 배포 가이드 - 속뜻 번역기

이 가이드는 속뜻 번역기를 Replit에서 Firebase로 완전 이전하는 과정을 설명합니다.

## 🚀 배포 준비사항

### 1. Firebase 프로젝트 설정
```bash
# Firebase CLI 설치 (전역)
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 새 Firebase 프로젝트 생성
firebase projects:create your-project-id

# 프로젝트 초기화
firebase init
```

### 2. 프로젝트 설정
```bash
# 프로젝트 ID 설정
firebase use your-project-id

# .firebaserc 파일에서 프로젝트 ID 업데이트
# functions/src/index.ts의 emulator URL 업데이트
```

## 📦 빌드 및 배포

### 자동 배포 (권장)
```bash
./deploy.sh
```

### 수동 배포
```bash
# 1. Functions 종속성 설치
cd functions
npm install
cd ..

# 2. 클라이언트 빌드
npm run build

# 3. Firebase 배포
firebase deploy
```

## 🔧 환경 설정

### Functions 환경변수 설정
```bash
# .env 파일 생성 (functions/.env.example 참고)
cd functions
cp .env.example .env

# Firebase Functions 환경변수 설정
firebase functions:config:set session.secret="your-session-secret"
```

### 필수 설정 파일들

1. **firebase.json** - Firebase 호스팅 및 Functions 설정
2. **.firebaserc** - 프로젝트 ID 설정
3. **functions/src/index.ts** - 메인 Functions 엔트리포인트
4. **firestore.rules** - Firestore 보안 규칙
5. **firestore.indexes.json** - Firestore 인덱스 설정

## 🌐 도메인 설정

### Firebase 도메인
- 기본: `https://your-project-id.web.app`
- 백업: `https://your-project-id.firebaseapp.com`

### 커스텀 도메인 연결
```bash
firebase hosting:channel:create production
firebase target:apply hosting production your-custom-domain.com
```

## 📊 Google AdSense 설정

### 1. AdSense 계정 생성
- Google AdSense 가입
- 사이트 추가: `your-project-id.web.app`

### 2. 광고 코드 추가
`client/index.html`에 AdSense 스크립트 추가:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossorigin="anonymous"></script>
```

### 3. 광고 배치
- 헤더 배너
- 사이드바 광고
- 인피드 광고 (번역 결과 사이)

## 🔒 보안 설정

### Firestore 규칙
- 번역 데이터: 읽기/쓰기 허용
- 세션 데이터: 제한적 접근
- 사용자 피드백: 생성만 허용

### CORS 설정
Functions에서 허용된 도메인만 접근 가능

### 레이트 리미팅
- IP당 15분에 100회 제한
- 과도한 사용 방지

## 📈 모니터링 및 분석

### Firebase Analytics
```javascript
// 번역 이벤트 추적
analytics.logEvent('translation_completed', {
  category: selectedCategory,
  text_length: text.length
});
```

### 사용량 모니터링
- Firebase Console에서 Functions 호출 수 확인
- Firestore 읽기/쓰기 횟수 모니터링
- 호스팅 트래픽 분석

## 🚨 트러블슈팅

### 일반적인 문제들

1. **Functions 시간 초과**
   - 타임아웃 시간 늘리기 (60초)
   - 메모리 할당량 증가 (512MB)

2. **CORS 오류**
   - functions/src/index.ts의 CORS 설정 확인
   - 허용된 도메인 목록 업데이트

3. **Firestore 권한 오류**
   - firestore.rules 확인
   - 인덱스 설정 검증

### 디버깅
```bash
# Functions 로그 확인
firebase functions:log

# 로컬 에뮬레이터 실행
firebase emulators:start

# 특정 Function 테스트
firebase functions:shell
```

## 💰 비용 최적화

### 무료 할당량
- Functions: 2백만 호출/월
- Firestore: 5만 읽기, 2만 쓰기/일
- 호스팅: 10GB 저장공간

### 비용 절감 팁
1. 캐싱 활용으로 Functions 호출 줄이기
2. Firestore 읽기 최소화
3. 정적 파일 CDN 캐싱 최대화

## 📱 Progressive Web App (PWA) 설정

### Manifest 파일
```json
{
  "name": "속뜻 번역기",
  "short_name": "속뜻번역",
  "description": "회사에서 들은 말의 진짜 의미를 알려드려요",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

### Service Worker
- 오프라인 지원
- 캐시 전략 구현
- 푸시 알림 준비

## 🔄 업데이트 및 배포 프로세스

### 개발 워크플로우
1. 로컬에서 개발 (`firebase emulators:start`)
2. 테스트 및 검증
3. `./deploy.sh`로 프로덕션 배포

### CI/CD 설정 (선택사항)
GitHub Actions을 통한 자동 배포 파이프라인 구성

## 📞 지원 및 문의

### Firebase 지원
- Firebase Console: 프로젝트 관리
- Firebase 문서: 기술 참조
- Stack Overflow: 커뮤니티 지원

### 프로젝트 관련
- 이슈 발생 시 로그 확인
- 사용량 급증 시 Firebase Console 모니터링

---

**중요**: 배포 전 모든 환경변수와 설정이 올바른지 확인하세요. 프로덕션 환경에서는 실제 사용자가 접근하므로 충분한 테스트가 필요합니다.