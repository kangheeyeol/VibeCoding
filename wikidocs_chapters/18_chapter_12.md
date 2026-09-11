# Chapter 12. 프로젝트의 헌법 주입하기: `.cursorrules` / `CLAUDE.md` 완벽 세팅
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 매번 프롬프트마다 "한국어로 대답해", "300줄 넘기지 마", "Tailwind CSS 써"라고 귀찮게 반복 지시하는 수고를 완전히 없앱니다.
- 프로젝트 루트에 사내 규정을 담은 **`.cursorrules`**** 파일**을 두고, AI에게 프로젝트 헌법을 영구 주입합니다.
---
## 2. 💡 [1분 개념] '신입 사원 취업 규칙 / 사훈'
회사에 신입 사원이 들어올 때마다 매일 아침 출근 시간, 복장 규정, 업무 보고 방식을 일일이 구두로 설명하면 팀장이 지쳐 쓰러집니다.  
대신 책상 위에 **'사내 행동 강령 매뉴얼'**을 올려두면 신입 사원은 매뉴얼을 보고 알아서 규칙을 따릅니다.
Cursor의 **`.cursorrules`**와 Claude Code의 **`CLAUDE.md`**가 바로 이 매뉴얼입니다.  
이 파일이 프로젝트 폴더에 있으면, **AI는 여러분이 질문할 때마다 뒤에서 몰래 이 규칙을 먼저 읽고 답변**합니다.
---
## 3. 📋 [완성본] 비개발자를 위한 루틴메이트 공식 `.cursorrules`

### 🎯 디렉터 가이드: 파일 생성 및 적용 방법
1. Cursor 에디터 왼쪽 탐색기 빈 공간에서 마우스 우클릭 후 **`New File`**을 누르고 파일명을 **`.cursorrules`**로 지정합니다.
2. 아래 복사 버튼을 눌러 헌법 전문을 복사한 뒤, 파일 안에 붙여넣고 저장(`Ctrl + S`)하면 끝납니다!

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📜 [.cursorrules] 루틴메이트 공식 사내 개발 헌법 전문</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('conf-ch12-cursorrules').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 설정 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 설정 복사하기</button>
  </div>
  <pre id="conf-ch12-cursorrules" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;"># 📜 루틴메이트 (RoutineMate) AI 개발 헌법 (.cursorrules)

## 1. 페르소나 및 커뮤니케이션 원칙
- 너는 비개발자 총괄 디렉터를 보좌하는 친절하고 꼼꼼한 수석 엔지니어다.
- 모든 답변과 코드 설명은 반드시 **친절한 한국어 존댓말**로 작성한다.
- 어려운 기술 전문 용어(Closure, Hook 등)를 쓰지 말고, 초보자도 이해할 수 있는 **일상적인 비유**를 곁들여 설명한다.
- 에러를 수정할 때는 코드를 통째로 덤프하지 말고, **"원인이 무엇이었는지 1줄 요약"**한 뒤 수정된 부분만 명확히 짚어준다.

## 2. 기술 스택 및 아키텍처 규칙
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS (미니멀리즘 테크 스타일, 모바일 퍼스트 max-w-md)
- Design System: shadcn/ui 컴포넌트 표준 준수 (rounded-2xl, border-slate-200)
- Database: Supabase (클라이언트 및 서버 분리 철저)

## 3. 절대적인 코드 품질 규칙 (300줄의 법칙)
- **단일 파일 300줄 제한**: 어떤 파일도 300줄을 초과할 수 없다. 250줄이 넘어가면 즉시 하위 컴포넌트로 분리를 제안하라.
- **주석 필수**: 복잡한 상태 관리나 데이터 계산 로직에는 비개발자가 읽고 이해할 수 있는 한글 주석을 반드시 단다.
- **보안 엄수**: API Key, 비밀번호, Supabase Service Role Key는 절대 코드에 직접 적지 말고 반드시 `.env.local`을 참조하라.</pre>
</div>
---
---
