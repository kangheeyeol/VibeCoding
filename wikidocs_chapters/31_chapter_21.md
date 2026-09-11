# Chapter 21. 백엔드 개발자 없이 DB 구축하기 (Supabase 5분 컷 세팅)
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 백엔드 개발자를 고용하거나 어려운 서버 언어(Java, Python 등)를 한 줄도 배우지 않고, 무료로 엔터프라이즈급 클라우드 데이터베이스를 생성합니다.
- 전 세계 개발자들에게 가장 사랑받는 BaaS(Backend as a Service)인 **Supabase(수파베이스)** 프로젝트를 5분 만에 만들고, 내 Cursor 프로젝트와 비밀 열쇠(API Key)로 안전하게 연결합니다.
---
## 2. 💡 [1분 개념] '단독주택 직접 짓기' vs '풀옵션 5성급 호텔'
- **전통적인 백엔드 구축 (단독주택 짓기)**:  
	땅을 사고(AWS 서버 대여), 기둥을 세우고(리눅스 OS 설치), 수도/전기를 깔고(DB 세팅), 보안 경비 시스템(회원가입/인증)을 직접 만들어야 했습니다. 비개발자에겐 불가능의 영역이었습니다.
- **Supabase BaaS (풀옵션 5성급 레지던스 호텔)**:  
	클릭 한 번으로 방을 예약하면, 침대(PostgreSQL 데이터베이스), 최고급 보안 도어락(소셜 로그인/인증), 초고속 룸서비스(실시간 API)가 모두 갖춰진 방을 무료로 제공해 줍니다. 우리는 그냥 열쇠를 받아 입주하기만 하면 됩니다!
```javascript
┌────────────────────────────────────────────────────────┐
│               [루틴메이트가 일하는 방식]                 │
│                                                        │
│  [사용자 화면 (Next.js)] ◀──(인터넷 통신)──▶ [Supabase 클라우드]│
│  • 오늘 물 마셨어요! (체크) ──(API 저장)──▶  • habits 테이블   │
│  • 내일 다시 접속해도?    ◀──(데이터 조회)──  • habit_logs 테이블│
└────────────────────────────────────────────────────────┘
```
---
## 3. 📋 [실전 가이드] 5분 만에 Supabase 세팅하기
### Step 1. 무료 회원가입 및 프로젝트 생성
1. 웹 브라우저에서 [Supabase 공식 홈페이지(supabase.com)](https://supabase.com)에 접속합니다.
2. **[Start your project]** 버튼을 누르고, Part 3에서 만든 본인의 **GitHub 계정으로 간편 로그인**합니다.
3. 대시보드에서 초록색 **[+ New Project]** 버튼을 클릭합니다.
### Step 2. 프로젝트 필수 설정 (3가지 꿀팁)
- **Name**: `routinemate` (프로젝트 이름)
- **Database Password**: 강력한 비밀번호를 입력하거나 [Generate a password]를 눌러 안전하게 보관합니다.
- **Region (가장 중요 🌟)**: 반드시 **`Seoul (ap-northeast-2)`**을 선택합니다!  
	*(서울 서버를 골라야 한국 사용자들이 습관을 체크할 때 0.1초 만에 번개처럼 반응합니다.)*
- 하단의 **[Create new project]** 버튼을 누르고 1~2분 정도 기다리면 호텔 방(DB)이 완성됩니다.
### Step 3. 내 프로젝트와 연결할 비밀 열쇠(API Keys) 복사
1. Supabase 왼쪽 메뉴 맨 아래의 [**Project Settings**](톱니바퀴 아이콘) ➡️ **[Data API]** (또는 `API`) 메뉴를 클릭합니다.
2. 화면에 보이는 두 가지 핵심 정보를 메모장에 잠시 복사해 둡니다:
	- **Project URL**: 예) `https://abcdefghijklmn.supabase.co`
	- **Project API Keys** 중 **`anon`**** (public)**: 영문과 숫자가 길게 이어진 공개 키
> ⚠️ **보안 주의 경고**:
> 키 중에 `service_role` (secret) 키는 절대 복사하거나 노출하면 안 됩니다!
> 반드시 **`anon`**** (public)** 키만 사용해야 합니다.
### Step 4. Cursor 프로젝트에 비밀 금고(`.env.local`) 만들기
1. Cursor 에디터로 돌아와서 최상위 폴더에 **`.env.local`**이라는 새 파일을 만듭니다.
2. 방금 복사한 두 가지 값을 아래 형식에 맞춰 붙여넣고 저장(`Ctrl + S`)합니다:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://여러분의프로젝트ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.여러분의anon키...
```
> 💡 **비개발자 팁**: `.env.local` 파일은 외부나 GitHub에 절대 업로드되지 않는 내 컴퓨터만의 1급 비밀 금고입니다.
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] Supabase 프로젝트 대시보드 상태가 초록색 'Active'로 표시되는가?
- [ ] Region이 `Seoul (ap-northeast-2)`로 올바르게 선택되었는가?
- [ ] 프로젝트 최상단에 `.env.local` 파일이 존재하고 URL과 anon 키가 공백 없이 채워져 있는가?
---
## 5. 🚨 [비상 대응] 빨간 글씨(에러)가 떴을 때 응급처치
**Q. 환경변수를 넣었는데도 'Invalid API key' 에러가 뜹니다!**  
- **원인**: Next.js는 보안상 환경변수 파일(`.env.local`)을 수정하면 개발 서버를 껐다 켜야만 새 키를 인식합니다.
- **해결책**:
	1. 하단 터미널을 클릭하고 `Ctrl + C`를 눌러 서버를 중지시킵니다.
	2. 다시 `npm run dev`를 입력하고 엔터를 쳐서 서버를 재부팅하세요.
---
## 6. 🛡️ [세이프티넷] 환경변수 공식 템플릿
- 🔗 [루틴메이트 공식 .env.example 템플릿 파일 보기](https://github.com/kangheeyeol/VibeCoding/blob/main/.env.example)
---
---
