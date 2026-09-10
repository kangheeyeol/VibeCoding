# ✨ 루틴메이트 (RoutineMate) - 스마트 습관 트래커

> **"작은 습관이 모여 완벽한 하루를 만듭니다."**  
> 전자책 **《바이브 코딩으로 내 서비스 만들기: 코딩 몰라도 AI 개발팀 이끄는 법》**의 공식 실습 프로젝트 코드베이스입니다.

<p align="center">
  <img src="./public/book_cover.jpg" width="280" alt="Book Cover: 바이브 코딩으로 내 서비스 만들기" style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.15);" />
</p>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkangheeyeol%2FVibeCoding&project-name=routinemate)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-vibe--coding--delta--three.vercel.app-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://vibe-coding-delta-three.vercel.app/)

---

## 📖 도서 연계 안내
이 리포지토리는 비개발자 총괄 디렉터(PM, 기획자, 마케터, 1인 창업가)가 AI(Cursor)와 함께 실제 동작하는 웹/모바일 서비스를 직접 구축하고 배포할 수 있도록 설계된 공식 레퍼런스입니다.

- **기획 명세서**: [`SPEC.md`](./SPEC.md) (Part 2. 스펙 주도 개발 SDD 템플릿)
- **AI 행동 헌법**: [`.cursorrules`](./.cursorrules) (Part 4. Cursor 프롬프트 통제 규칙)
- **클라우드 DB 스키마**: [`supabase/schema.sql`](./supabase/schema.sql) (Part 7. Supabase SQL DDL)

---

## 🛠️ 기술 스택 (Tech Stack)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Lucide React
- **Celebration**: Canvas-Confetti (100% 달성 축하 폭죽 효과)
- **Backend & Database**: Supabase (PostgreSQL), LocalStorage Fallback 지원
- **Deployment & Mobile**: Vercel 원클릭 배포, PWA(Progressive Web App) 홈 화면 설치

---

## 🚀 빠른 시작 (Quick Start)

### 1. 저장소 클론 및 패키지 설치
```bash
git clone https://github.com/kangheeyeol/VibeCoding.git
cd VibeCoding
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:3000`으로 접속하면 즉시 동작하는 루틴메이트를 만나보실 수 있습니다!  
*(Supabase 설정 없이도 브라우저 로컬 스토리지 모드로 즉시 동작합니다.)*

### 3. (선택) Supabase 클라우드 DB 연동
1. [supabase.com](https://supabase.com)에서 무료 프로젝트를 생성합니다. (리전: `Seoul`)
2. `supabase/schema.sql` 내용을 Supabase **SQL Editor**에 복사하여 실행합니다.
3. `.env.example`을 복사하여 `.env.local` 파일을 생성하고 키를 입력합니다:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. 개발 서버를 재부팅(`Ctrl + C` ➡️ `npm run dev`)하면 자동으로 **Cloud DB 모드**로 전환됩니다.

---

## 🛡️ 구원투수 세이프티넷: 챕터별 완성본 브랜치 (Chapter Snapshots)

실습 도중 코드가 꼬이거나 에러가 났을 때, 터미널에서 다음 명령어 한 줄로 원하는 챕터의 공식 완성본으로 1초 만에 복구할 수 있습니다:

```bash
# Part 3 완료 시점 (스타터 템플릿 기본 레이아웃)
git fetch origin && git reset --hard origin/snapshot-part-03

# Part 5 완료 시점 (300줄의 법칙 적용 완료된 모듈형 컴포넌트)
git fetch origin && git reset --hard origin/snapshot-part-05

# Part 7 완료 시점 (Supabase 클라우드 DB 연동 완료)
git fetch origin && git reset --hard origin/snapshot-part-07

# Part 9 완료 시점 (PWA 및 배포 최적화 최종 완성본)
git fetch origin && git reset --hard origin/snapshot-part-09
```

### 📦 터미널이 겁날 때: 1초 만에 완성본 ZIP 다운로드
| 파트 | 포함된 완성 기능 | 원클릭 ZIP 다운로드 |
| :--- | :--- | :---: |
| **Part 3** | 작업실 세팅 & 스타터 템플릿 기본 레이아웃 | [📥 `part-03-starter.zip`](https://github.com/kangheeyeol/VibeCoding/archive/refs/tags/v1.0-part-03.zip) |
| **Part 5** | 300줄의 법칙 적용 완료된 클린 모듈형 컴포넌트 | [📥 `part-05-components.zip`](https://github.com/kangheeyeol/VibeCoding/archive/refs/tags/v1.0-part-05.zip) |
| **Part 7** | Supabase 클라우드 DB 연동 및 CRUD 완료 | [📥 `part-07-supabase.zip`](https://github.com/kangheeyeol/VibeCoding/archive/refs/tags/v1.0-part-07.zip) |
| **Part 9** | PWA 모바일 앱 & Vercel 배포 최종 완성본 | [📥 `part-09-final.zip`](https://github.com/kangheeyeol/VibeCoding/archive/refs/tags/v1.0-part-09.zip) |
| **v1.0.0** | 전체 리포지토리 최신 전체 소스코드 | [📥 `v1.0.0.zip`](https://github.com/kangheeyeol/VibeCoding/archive/refs/tags/v1.0.0.zip) |

---

## 📱 주요 화면 및 기능
1. **오늘의 루틴 대시보드 (`ProgressHeader`)**: 오늘 날짜, 진행률 게이지 바, 클라우드/로컬 연결 뱃지
2. **습관 카드 (`HabitCard`)**: 대표 이모지, 스트릭(연속 실천 일수), 원터치 체크박스 및 취소선 애니메이션
3. **새 습관 추가 모달 (`AddHabitModal`)**: 원클릭 추천 이모지 선택기 및 유효성 검사
4. **100% 달성 축하 폭죽 (`ConfettiModal`)**: 모든 루틴 완수 시 화면 전체에 컨페티 효과 및 트로피 모달 발사
5. **모바일 PWA (`PwaInstallPrompt`)**: 앱스토어 없이 스마트폰 바탕화면에 풀스크린 앱으로 설치 가능

---

## 📄 라이선스
MIT License. 자유롭게 포크하여 여러분만의 서비스를 만들어 배포해 보세요!
