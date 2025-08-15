# Firebase 배포 패키지 생성 가이드

이 파일은 Firebase 배포용 완전한 ZIP 패키지를 생성하기 위한 가이드입니다.

## 포함될 파일 목록

### 1. Firebase 설정 파일들
- `.firebaserc` - Firebase 프로젝트 설정
- `firebase.json` - 호스팅 및 Functions 설정
- `firestore.rules` - Firestore 보안 규칙
- `firestore.indexes.json` - Firestore 인덱스 설정

### 2. Functions (서버 코드)
- `functions/package.json` - Functions 종속성
- `functions/src/index.ts` - 메인 Functions 코드
- `functions/.env.example` - 환경변수 예시
- `functions/tsconfig.json` - TypeScript 설정

### 3. 클라이언트 소스코드
- `client/` 전체 폴더
- `public/` 전체 폴더 (SEO 파일들 포함)
- `shared/` 전체 폴더
- `components.json` - shadcn/ui 설정
- `tailwind.config.ts` - Tailwind 설정
- `vite.config.ts` - Vite 설정
- `vite.firebase.config.ts` - Firebase용 Vite 설정
- `tsconfig.json` - TypeScript 설정
- `postcss.config.js` - PostCSS 설정

### 4. 배포 스크립트
- `deploy.sh` - 자동 배포 스크립트
- `package.json` - 루트 패키지 설정

### 5. 문서
- `README-FIREBASE.md` - 상세 배포 가이드
- `replit.md` - 프로젝트 아키텍처 문서

### 6. 필수 설정 파일
- `.gitignore` - Git 무시 파일
- 모든 TypeScript 및 빌드 설정 파일

## ZIP 파일 생성 후 사용법

1. ZIP 파일 압축 해제
2. Firebase CLI 설치: `npm install -g firebase-tools`
3. Firebase 로그인: `firebase login`
4. 프로젝트 설정: `.firebaserc` 파일에서 프로젝트 ID 수정
5. 배포 실행: `./deploy.sh`

## 중요 사항

- 모든 API 키와 민감한 정보는 제외됨
- 환경변수는 `.env.example` 형태로 제공
- Google AdSense 코드는 주석 처리 상태로 제공
- 원클릭 배포를 위한 모든 설정 완료