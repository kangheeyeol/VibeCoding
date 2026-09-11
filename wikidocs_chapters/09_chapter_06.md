# Chapter 06. [실습] 루틴메이트 전용 한 장짜리 PRD(제품 요구사항 정의서) 작성하기

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 기획서를 혼자 끙끙대며 빈 화면에서 쓰지 않고, **AI와 핑퐁 대화를 주고받으며 10분 만에 완벽한 `SPEC.md` 문서**를 완성합니다.
- 우리가 만들 스마트 습관 트래커 「루틴메이트」의 실전 규격서를 확정합니다.

---

## 2. 💡 [1분 개념] PRD는 AI 개발팀의 '계약서'입니다
PRD(Product Requirements Document)란 디렉터(기획자)와 엔지니어(AI) 사이에 체결하는 **'업무 계약서'**입니다.  
"우리는 이번 주에 딱 여기까지 개발하기로 합의했다"는 기준이 명문화되어 있어야, AI가 쓸데없이 복잡한 코드를 추가해 버그를 일으키는 것을 막을 수 있습니다.

---

## 3. 📋 [AI 지시서] 루틴메이트 SPEC.md 생성 프롬프트

ChatGPT, Claude, 또는 Cursor 대화창을 열고 아래 프롬프트를 복사해 전달하여 `SPEC.md` 초안을 작성시킵니다.

### 🎯 [디렉터 가이드] 이 프롬프트의 핵심 의도
- **역할 고정 (Role)**: *"실리콘밸리 스타트업의 수석 프로덕트 매니저(Lead PM)"*로 페르소나를 부여해, 엔지니어링 표준에 부합하는 문서 구조를 도출합니다.
- **범위 엄격 통제 (Constraints)**: 핵심 MVP 기능 5가지와 제약조건(모바일 420px, 파일당 300줄 이하 모듈화)을 미리 지정해 AI가 임의로 복잡한 기능을 덧붙이지 못하도록 통제합니다.
- **출력 포맷 규격화 (Output)**: 개발 프로젝트 루트에 그대로 저장할 수 있는 순수 마크다운 양식으로 작성을 명령합니다.

### 📋 [복사 전용] SPEC.md 생성 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📝 SPEC.md 작성 지시문 (AI 대화창에 입력)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-spec-gen').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-spec-gen" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 실리콘밸리 스타트업의 수석 프로덕트 매니저(Lead PM)야.
우리가 함께 개발할 스마트 습관 트래커 '루틴메이트 (RoutineMate)'의 공식 명세서인 `SPEC.md` 문서를 작성해줘.

[프로젝트 핵심 요약]
1. 타깃: 작심삼일에 지친 현대인을 위한 미니멀 AI 습관 트래커 웹앱
2. 핵심 기능:
   - 오늘의 루틴 체크리스트 & 팡파레 축하 애니메이션
   - 연속 달성 스트릭(🔥 N일 연속) & 30일 잔디 히트맵
   - 습관 등록/삭제 모달
   - Supabase 기반 회원가입/로그인 및 클라우드 데이터 영속 저장
   - [AI 코너] 작심삼일 방지 맞춤 격려 한마디
3. 기술 스택: Next.js 14 (App Router), Tailwind CSS, Supabase, Vercel
4. 필수 규칙: 모바일 퍼스트(최대 420px), 파일당 300줄 이하 모듈화

위 내용을 바탕으로, 개발자가 바로 코딩에 착수할 수 있는 깔끔한 마크다운 양식의 `SPEC.md` 전문을 작성해줘.</pre>
</div>

> **👀 [프롬프트 입력 후 확인]:** AI가 답변으로 [개요 - 유저 플로우 - 5대 기능 스코프 - DB 스키마 - 제약조건]을 빠짐없이 구조화하여 마크다운 문서로 출력하는지 확인합니다.

---

## 4. 📄 [완성본] 루틴메이트 공식 `SPEC.md` 규격서

위 프롬프트를 통해 생성된, 우리 프로젝트의 공식 설계도 전문입니다.  
프로젝트 폴더 최상위(루트)에 `SPEC.md` 파일을 생성하고 아래 내용을 그대로 담아두면, AI가 개발 내내 이 기준을 나침반 삼아 코드를 작성합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📋 SPEC.md 파일 원문 (복사하여 프로젝트 루트에 저장)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('doc-spec-full').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 SPEC.md 복사하기', 2000);" style="background-color: #2563eb; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 SPEC.md 복사하기</button>
  </div>
  <pre id="doc-spec-full" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13px; line-height: 1.6; white-space: pre-wrap; word-break: break-word; margin: 0;"># 📋 [SPEC] 루틴메이트 (RoutineMate) 제품 요구사항 정의서

## 1. 제품 개요 (Overview)
- **서비스명**: 루틴메이트 (RoutineMate)
- **한 줄 정의**: 작심삼일을 끝내는 나만의 미니멀 AI 습관 트래커
- **플랫폼**: 모바일 웹 최적화 (반응형 지원, 기준 너비: max-w-md / 420px)

## 2. 사용자 핵심 시나리오 (User Flow)
1. 사용자가 웹사이트에 접속하여 이메일로 간편 가입/로그인한다.
2. 오늘 날짜의 습관 목록(💧 물 마시기, 📖 독서 등)을 확인한다.
3. 실천한 습관의 원형 체크박스를 누른다.
4. 상단 프로그레스 바가 상승하고, 모두 완료 시 팡파레 축하를 받는다.
5. 대시보드에서 최근 30일간의 잔디(스트릭)가 푸르게 채워지는 것을 보며 성취감을 느낀다.

## 3. 핵심 MVP 기능 체크리스트 (Scope)
- [ ] **F-01. 유저 인증**: 이메일/비밀번호 기반 Supabase 회원가입 및 로그인 모달
- [ ] **F-02. 오늘의 루틴**: 습관 완료 체크 토글, 진행률 게이지(%), 100% 완료 시 폭죽 효과
- [ ] **F-03. 습관 관리**: 새로운 습관 추가(이모지, 습관명) 및 삭제 기능
- [ ] **F-04. 잔디 히트맵**: 최근 30일간의 날짜별 습관 달성 현황 시각화
- [ ] **F-05. AI 격려 코치**: 주간 달성률 기반 AI 한마디 동기부여 코칭

## 4. 데이터베이스 구조 (Database Schema)
- `profiles`: id (UUID), email (TEXT), nickname (TEXT), created_at (TIMESTAMP)
- `habits`: id (UUID), user_id (UUID), title (TEXT), emoji (TEXT), created_at (TIMESTAMP)
- `habit_logs`: id (UUID), habit_id (UUID), user_id (UUID), completed_date (DATE)

## 5. 비기능적 제약조건 (Constraints)
- **300줄의 법칙**: 단일 파일의 코드 길이는 절대 300줄을 초과하지 않으며, 초과 시 컴포넌트로 분리한다.
- **보안 헌법**: API 키나 DB 비밀번호는 절대 코드에 하드코딩하지 않고 `.env` 파일로 격리한다.
- **디자인 통일성**: Tailwind Slate & Emerald 컬러 팔레트와 부드러운 둥근 모서리(rounded-2xl) 유지.</pre>
</div>

---

## 5. 👀 [검수 기준] 내 `SPEC.md` 자가 진단 체크리스트
- [ ] **MVP 기능이 5개 이하로 압축되었는가?** (처음부터 친구 초대, 소셜 공유, 복잡한 결제 등을 넣으면 100% 미완성으로 끝납니다.)
- [ ] **데이터 저장 항목(스키마)이 명시되어 있는가?** (무엇을 저장할지 모르면 DB 코드가 꼬입니다.)
- [ ] **디자인 및 코드 제약조건이 한눈에 보이는가?**

---

## 6. 🚨 [비상 대응] AI가 너무 복잡한 기능을 자꾸 추천하나요?
- **원인**: AI는 똑똑함을 뽐내기 위해 기획 단계에서 "푸시 알림, 머신러닝 예측, 소셜 피드" 같은 거창한 기능을 제안하곤 합니다.
- **MVP 다이어트 프롬프트**: 아래 프롬프트를 복사해 AI에게 즉시 다이어트를 지시하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #dc2626; font-size: 14px;">🚨 MVP 다이어트 긴급 처방 프롬프트</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-diet').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #dc2626; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-diet" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">기획이 너무 방대해. 우리는 1인 비개발자가 1주일 안에 배포할 MVP를 만들고 있어. 
부가 기능(푸시 알림, 친구 추가 등)은 'Out of Scope(추후 개발)'로 빼고, 
[오늘의 체크 + 잔디 심기 + 로그인]의 3가지 핵심 기능에만 집중해서 SPEC.md를 다시 다이어트해줘.</pre>
</div>

---

## 7. 🛡️ [세이프티넷] 공식 템플릿
- 🔗 [루틴메이트 공식 GitHub 저장소: SPEC.md 원본 파일 열기](https://github.com/kangheeyeol/VibeCoding/blob/main/SPEC.md)
