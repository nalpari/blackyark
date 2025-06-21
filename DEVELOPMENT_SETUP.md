# BlackYark 프로젝트 개발환경 구축 가이드 (Windows)

## 📋 프로젝트 개요

BlackYark는 **Next.js 15**와 **React 19**를 기반으로 한 현대적인 웹 애플리케이션입니다.

### 🛠 기술 스택

- **프레임워크**: Next.js 15.2.4
- **언어**: TypeScript 5
- **UI 라이브러리**: React 19, Radix UI, shadcn/ui
- **스타일링**: Tailwind CSS 3.4.17
- **폼 관리**: React Hook Form + Zod
- **패키지 매니저**: pnpm
- **배포**: PM2 (ecosystem.config.js)

### 📦 주요 기능

- 로그인 시스템
- 대시보드
- 영업 관리 시스템
- MDI (Multi Document Interface) 페이지
- 다크/라이트 테마 지원 (next-themes)
- 반응형 디자인

## 🚀 개발환경 구축

### 1. 필수 소프트웨어 설치

#### Node.js 설치

1. [Node.js 공식 웹사이트](https://nodejs.org/)에서 **LTS 버전** (18.x 이상) 다운로드
2. 설치 완료 후 확인:

```cmd
node --version
npm --version
```

#### pnpm 설치

```cmd
npm install -g pnpm
```

#### Git 설치 (선택사항)

1. [Git for Windows](https://git-scm.com/download/win) 다운로드 및 설치
2. 설치 완료 후 확인:

```cmd
git --version
```

### 2. 프로젝트 클론 및 설정

#### 프로젝트 클론

```cmd
git clone [repository-url]
cd blackyark
```

#### 의존성 설치

```cmd
pnpm install
```

### 3. 개발 서버 실행

#### 개발 모드 실행

```cmd
pnpm dev
```

브라우저에서 `http://localhost:3000` 접속하여 애플리케이션 확인

#### 다른 실행 스크립트

```cmd
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린팅 실행
pnpm lint
```

### 4. 개발 도구 설정

#### VS Code 추천 확장 프로그램

1. **ES7+ React/Redux/React-Native snippets**
2. **TypeScript Importer**
3. **Tailwind CSS IntelliSense**
4. **Prettier - Code formatter**
5. **Auto Rename Tag**
6. **Bracket Pair Colorizer**

#### VS Code 설정 (.vscode/settings.json)

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## 🏗 프로젝트 구조

```
blackyark/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── ui/               # shadcn/ui 컴포넌트
│   ├── header.tsx        # 헤더 컴포넌트
│   ├── sidebar.tsx       # 사이드바 컴포넌트
│   ├── login-page.tsx    # 로그인 페이지
│   ├── main-dashboard.tsx # 메인 대시보드
│   ├── sales-management.tsx # 영업 관리
│   └── mdi-page.tsx      # MDI 페이지
├── hooks/                # Custom React Hooks
├── lib/                  # 유틸리티 함수
├── public/               # 정적 파일
├── styles/              # 추가 스타일
├── package.json         # 프로젝트 설정
├── tailwind.config.ts   # Tailwind 설정
├── tsconfig.json        # TypeScript 설정
└── components.json      # shadcn/ui 설정
```

## 🔧 주요 설정 파일

### Tailwind CSS 설정

- 파일: `tailwind.config.ts`
- CSS 변수 사용
- 다크 모드 지원
- 커스텀 애니메이션

### TypeScript 설정

- 파일: `tsconfig.json`
- 경로 별칭: `@/*` → 프로젝트 루트
- strict 모드 활성화
- ES6 타겟

### shadcn/ui 설정

- 파일: `components.json`
- 기본 스타일 사용
- RSC (React Server Components) 지원
- Lucide 아이콘 라이브러리

## 🎨 UI 컴포넌트 추가

새로운 shadcn/ui 컴포넌트 추가:

```cmd
# 예: Button 컴포넌트 추가
npx shadcn-ui@latest add button

# 예: Input 컴포넌트 추가
npx shadcn-ui@latest add input
```

## 🚀 배포

### PM2를 사용한 배포

```cmd
# 프로덕션 빌드
pnpm build

# PM2로 시작
pm2 start ecosystem.config.js

# PM2 상태 확인
pm2 status

# PM2 로그 확인
pm2 logs
```

## 🐛 문제 해결

### 일반적인 문제들

#### 1. 포트 충돌 문제

다른 포트로 실행:

```cmd
pnpm dev -- -p 3001
```

#### 2. 패키지 설치 오류

캐시 삭제 후 재설치:

```cmd
pnpm store prune
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### 3. TypeScript 오류

타입 검사 무시 (개발 중):

```cmd
pnpm build -- --no-type-check
```

#### 4. Tailwind CSS 스타일 적용 안됨

Tailwind 캐시 삭제:

```cmd
npx tailwindcss -i ./app/globals.css -o ./dist/output.css --watch
```

## 📝 개발 가이드라인

### 코드 스타일

- **함수**: `const` 사용 (`const handleClick = () => {}`)
- **이벤트 핸들러**: `handle` 접두사 사용
- **조건부 스타일링**: Tailwind classes 사용
- **접근성**: `tabindex`, `aria-label` 등 필수 속성 추가

### 컴포넌트 작성 규칙

1. Early return 패턴 사용
2. 재사용 가능한 작은 컴포넌트 생성
3. TypeScript 타입 정의
4. Props 인터페이스 정의

### 폴더 구조 규칙

- `components/`: 재사용 가능한 컴포넌트
- `components/ui/`: shadcn/ui 컴포넌트
- `hooks/`: 커스텀 훅
- `lib/`: 유틸리티 함수

## 🔗 유용한 링크

- [Next.js 문서](https://nextjs.org/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com/)
- [React Hook Form 문서](https://react-hook-form.com/)

---

## 📞 지원

개발 중 문제가 발생하면 다음을 확인하세요:

1. 콘솔 오류 메시지
2. 브라우저 개발자 도구
3. 터미널 로그
4. pnpm 버전 호환성
