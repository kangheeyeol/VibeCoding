# Chapter 04. 망하는 프롬프트 vs 흥하는 프롬프트 (목표, 제약조건, 페르소나, 출력형식)

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- AI에게 지시할 때 매번 결과물이 엉뚱하게 빗나가는 근본 원인을 완벽히 파악합니다.
- 초보자의 막연한 질문을 일류 PM의 명확한 업무 지시서로 바꾸는 **'프롬프트 4원칙(R-T-C-O)'**을 익히고 실전에 적용합니다.
- 신규 기능 추가, 버그 수정, 디자인 리뉴얼 시 복사해서 바로 쓰는 **3대 실전 프롬프트와 RTCO 만능 템플릿**을 손에 넣습니다.

---

## 2. 💡 [1분 개념] AI는 '말귀 어두운 천재 인턴'입니다
AI는 전 세계 모든 프로그래밍 언어와 백과사전을 통째로 외운 천재 엔지니어입니다.  
하지만 동시에 **'눈치와 상황 판단력이 전혀 없는 신입 인턴'**이기도 합니다.

회사에서 신입 인턴에게 *"점심 맛있는 것 좀 사 와"*라고 막연히 지시하면 어떻게 될까요?  
인턴은 자기가 제일 좋아하는 극도로 매운 마라탕을 사 올 수도 있습니다. 먹지도 못하고 돈만 날리게 됩니다.

반면, 훌륭한 팀장은 이렇게 지시합니다:
> *"오늘 손님이 오셨는데 매운 음식을 못 드셔(제약조건). 1인당 15,000원 예산 안에서 깔끔한 한식당 3곳을 찾아서(역할/과업), 식당 이름과 대표 메뉴, 도보 이동 시간을 표로 정리해 줘(출력 형식)."*

AI에게 코딩을 시킬 때도 완전히 똑같습니다. 막연하게 던지면 막연한 쓰레기(AI Slop)가 나오고, **명확한 제약조건과 함께 지시하면 감탄이 나오는 프로급 코드**가 탄생합니다.

---

## 3. ⚖️ [비교 분석] 망하는 프롬프트 vs 흥하는 프롬프트

### 📊 한눈에 보는 핵심 차이점

| 비교 항목 | ❌ 망하는 프롬프트 (초보자) | ⭕ 흥하는 프롬프트 (프로 디렉터) |
| :--- | :--- | :--- |
| **접근 방식** | "알아서 예쁘게 만들어줘" (결과를 AI 운에 맡김) | "이 조건과 규칙에 맞춰 납품해줘" (디렉터가 주도권 장악) |
| **페르소나 지정** | 없음 (일반 챗봇으로 동작) | 구체적 역할 부여 (시니어 풀스택, 보안 전문가 등) |
| **제약조건 통제** | 없음 (기존 코드 덮어쓰기 위험 높음) | 명확한 기술 스택, 화면 규격, 금지 사항 명시 |
| **출력형식 요구** | 모호함 (설명만 하거나 불완전한 코드 출력) | 파일 단위 완성 코드 및 3줄 요약 지정 |

---

## 4. 📋 [실전 사례 1] 신규 기능 추가: 로그인 모달 창 만들기

### 🎯 디렉터 가이드: 왜 초보자의 지시는 실패하는가?
초보자들은 기능이 필요할 때 AI 채팅창에 단순히 **"로그인 기능 하나 만들어줘"**라고 한 줄만 던집니다.

- **발생하는 참사**: AI는 '어디에, 어떻게' 만들어야 할지 모르기 때문에, 기존 메인 화면을 통째로 갈아엎거나 페이지 전체가 이동하는 무거운 전체 로그인 페이지를 만들어버립니다. 결과적으로 지금까지 잘 돌아가던 메인 페이지 코드가 누더기가 됩니다.
- **프로 디렉터의 지휘 전략**:
  1. **역할(Role)**: 보안에 엄격한 풀스택 엔지니어 페르소나를 부여합니다.
  2. **과업(Task)**: 화면 이동 없는 **'팝업 모달 창'**으로 기능의 범위를 명확히 한정합니다.
  3. **제약조건(Constraints)**: 비밀번호 6자리 이상 유효성 검사와 Tailwind CSS 사용, 기존 헤더 버튼과의 연동을 명시합니다.
  4. **출력형식(Output)**: `LoginModal.tsx` 독립 파일 코드와 3줄 요약 설명을 요구합니다.

### 📋 [복사 전용] 신규 기능 추가 실전 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">✨ [실전 프롬프트 1] 신규 기능 추가 (로그인 모달 창)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch04-feature').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch04-feature" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 보안에 엄격한 풀스택 엔지니어(Role)야.
루틴메이트에 이메일과 비밀번호로 로그인하는 모달 창(Task)을 만들어줘.

[제약조건 및 지침]
1. 화면이 깜빡이며 페이지가 이동하지 않도록 팝업 모달 형태로 띄워줘.
2. 비밀번호는 6자리 이상인지 검증하는 유효성 검사 로직을 포함해줘.
3. 디자인은 Tailwind CSS를 쓰고, 기존 헤더 컴포넌트의 우측 상단 로그인 버튼과 자연스럽게 연동해줘.

[출력형식]
- components/LoginModal.tsx 파일의 전체 완성 코드를 작성하고, 헤더 연결 방법을 3줄로 설명해줘.</pre>
</div>

> **👀 [검수 포인트]:** AI가 답변을 출력했을 때, 메인 페이지 전체를 고치지 않고 `components/LoginModal.tsx` 파일 하나만 깔끔하게 독립 분리하여 생성하는지 확인하세요.

---

## 5. 📋 [실전 사례 2] 버그 수정 요청: F12 콘솔 에러 패치

### 🎯 디렉터 가이드: 왜 에러가 났을 때 질문하면 더 꼬이는가?
화면이 멈추거나 에러가 떴을 때 **"에러 나요. 왜 안 되죠? 고쳐주세요"**라고 질문하는 것은 의사에게 "아파요, 낫게 해주세요"라고만 말하는 것과 같습니다.

- **발생하는 참사**: AI는 증상과 위치를 전혀 알 수 없기 때문에, 자기가 임의로 추측하여 멀쩡하게 잘 돌던 다른 정상 코드까지 삭제하거나 바꿔버려 에러가 2개, 3개로 증식합니다.
- **프로 디렉터의 지휘 전략**:
  1. **원인 맥락(Context)**: F12 개발자 도구 콘솔의 빨간 에러 메시지 원문을 정확히 전달합니다.
  2. **가설 제시**: "습관 목록 데이터가 비어 있을 때 속성을 참조해서 생기는 문제 같다"고 짚어줍니다.
  3. **제약조건(Constraints)**: 로딩 스켈레톤 UI를 보여주고, 옵셔널 체이닝(`?.`)을 적용하되 **"다른 정상 기능은 절대 건드리지 마라"**는 안전장치를 못 박습니다.

### 📋 [복사 전용] 버그 패치 실전 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [실전 프롬프트 2] 콘솔 에러 무결점 패치 처방전</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch04-bug').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch04-bug" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 React 및 Next.js 프론트엔드 디버깅 전문가야.
습관 카드의 체크박스를 클릭했을 때 브라우저 F12 콘솔에 다음과 같은 빨간 에러가 발생했어:
'TypeError: Cannot read properties of undefined (reading 'completed')'

[원인 추정 및 제약조건]
1. 습관 목록 데이터가 로딩 중이거나 비어 있을 때 속성을 참조하여 발생하는 문제 같아.
2. 데이터가 완전히 불러와지기 전까지는 로딩 스켈레톤을 보여줘.
3. 안전하게 옵셔널 체이닝(?.)과 삼항 연산자를 적용해서 런타임 충돌을 완벽히 방지해줘.
4. 다른 정상 기능(체크 게이지 애니메이션 등)은 절대 수정하거나 삭제하지 마.

[출력형식]
- 수정된 components/HabitCard.tsx의 해당 함수 부분만 정확히 짚어서 패치 코드를 제안해줘.</pre>
</div>

> **👀 [검수 포인트]:** AI가 전체 파일을 덤프하지 않고, 문제가 된 함수 10~20줄만 콕 집어서 안전한 교체 코드를 제시하는지 확인하세요.

---

## 6. 📋 [실전 사례 3] 디자인 스타일링: 모던 UI 리뉴얼

### 🎯 디렉터 가이드: '예쁘게'라는 단어를 쓰면 안 되는 이유
디자인 감각이 없다고 느껴질 때 가장 흔히 하는 실수가 **"요즘 유행하는 스타일로 예쁘게 바꿔줘"**라고 지시하는 것입니다.

- **발생하는 참사**: '예쁘다'는 개념은 사람마다, AI 모델마다 천차만별입니다. AI는 자기가 아는 화려한 CSS 효과를 죄다 쑤셔 넣어 형광 보라색 버튼, 거대한 그림자, 촌스러운 그라데이션을 만들어 사이트를 90년대로 되돌려 놓습니다.
- **프로 디렉터의 지휘 전략**:
  1. **디자인 테마 지정**: 2026 실리콘밸리 테크 스타트업 수준의 미니멀리즘 스타일로 방향을 잡습니다.
  2. **구체적 컬러 코드**: 전체 배경(`bg-slate-50`), 카드 배경(`bg-white`), 포인트 컬러(`emerald-600`)의 60-30-10 법칙을 명시합니다.
  3. **형태적 제약**: 얇은 테두리(`border-slate-200`)와 부드러운 둥근 모서리(`rounded-2xl`), 모바일 중앙 정렬(`max-w-md mx-auto`)을 지정합니다.

### 📋 [복사 전용] 디자인 리뉴얼 실전 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎨 [실전 프롬프트 3] 2026 테크 스타트업 모던 UI 리뉴얼</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch04-design').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch04-design" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 최고 수준의 UI/UX 디자이너 겸 Tailwind CSS 전문가야.
루틴메이트 메인 화면을 2026년 실리콘밸리 테크 스타트업 수준의 모던 미니멀리즘 스타일로 리디자인해줘.

[디자인 요구사항]
1. 컬러: 전체 배경은 눈이 편안한 bg-slate-50, 카드는 순백색 bg-white, 활성화 포인트는 emerald-600 적용
2. 테두리 & 그림자: 둔탁한 선 대신 border border-slate-200과 부드러운 shadow-sm 적용
3. 모서리: 모든 카드와 입력창 모서리는 rounded-2xl로 부드럽게 깎아줘.
4. 모바일 최적화: 가로 스크롤이 생기지 않도록 max-w-md mx-auto 안에 타이트하게 패딩(p-4)을 맞춰줘.

[출력형식]
- 어떤 클래스가 적용되었는지 비개발자 눈높이에서 3줄로 요약해줘.</pre>
</div>

> **👀 [검수 포인트]:** 브라우저 화면에서 버튼에 마우스를 올렸을 때 은은한 전환 애니메이션이 동작하고, 전체적인 색상이 차분하게 정돈되었는지 확인하세요.

---

## 7. 📋 [치트키] 비개발자 전용 프롬프트 4원칙: RTCO 공식

AI에게 지시를 내리기 전, 머릿속으로 다음 4글자만 기억하세요.

| 영문 약자 | 핵심 요소 | 디렉터의 질문 | 실전 작성 요령 |
| :---: | :--- | :--- | :--- |
| **R** | **Role (역할)** | "너는 누구인가?" | 단순 '개발자'가 아닌, **'보안 전문가', '시니어 React 엔지니어'**처럼 구체적 역할을 부여합니다. |
| **T** | **Task (과업)** | "무엇을 만들어야 하는가?" | "다 만들어줘" 대신, **"체크박스 클릭 시 폭죽 애니메이션을 띄워줘"**처럼 딱 1가지 과업만 줍니다. |
| **C** | **Constraints (제약)** | "어떤 룰을 지켜야 하는가?" | **300줄 제한, Tailwind CSS 사용, 모바일 너비 유지, 기존 코드 삭제 금지** 등 안전 울타리를 칩니다. |
| **O** | **Output (출력)** | "어떤 형태로 납품받을 것인가?" | **"완성된 파일 전체 코드 제공", "비개발자용 3줄 해설 포함"**처럼 내가 원하는 결과 형식을 못 박습니다. |

---

### ⚡ [만능 템플릿] 복사해서 빈칸만 채우는 RTCO 공식 프레임워크

새로운 기능을 요청하거나 코드를 수정할 때, 아래 템플릿을 복사하여 `[{...}]` 표시된 빈칸만 내 요구사항에 맞게 채워 전송하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [만능 템플릿] 비개발자 디렉터를 위한 RTCO 공식 프롬프트 양식</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch04-rtco-template').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 템플릿 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 템플릿 복사하기</button>
  </div>
  <pre id="prompt-ch04-rtco-template" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">[Role]
너는 10년 차 시니어 풀스택 개발자이자 비개발자 디렉터를 보좌하는 수석 엔지니어 팀장이야.

[Task]
우리 루틴메이트 프로젝트에 [{만들고자 하는 기능 또는 수정할 내용}] 작업을 진행하려 해.

[Constraints]
1. 기존에 잘 작동하고 있는 기능과 UI 디자인은 절대 임의로 수정하거나 삭제하지 마.
2. Next.js 14 App Router 및 Tailwind CSS 규격을 엄격히 준수해줘.
3. 파일 길이가 길어지지 않도록 단일 파일 300줄 제한을 지키고, 필요시 하위 컴포넌트로 분리해줘.
4. 보안 정보(API Key 등)는 코드에 직접 하드코딩하지 말고 환경변수를 참조하도록 해줘.

[Output]
- 추가되거나 수정된 파일의 전체 완성 코드를 보여줘.
- 비개발자도 직관적으로 이해할 수 있도록 어떤 원리로 작동하는지 한국어로 3줄 요약해줘.</pre>
</div>

---

## 8. 👀 [검수 기준] 프롬프트 전송 전 10초 자가진단 체크리스트
AI 채팅창에 메시지를 입력하고 엔터를 치기 전, 다음 3가지를 체크하세요:
- [ ] **과업 집중도**: 내가 요구하는 작업(Task)이 1개로 명확하게 좁혀져 있는가? *(1프롬프트 = 1기능 원칙)*
- [ ] **제약조건 방패**: AI가 지켜야 할 제약조건(화면 크기, 색상, 파일 분리 등)을 최소 2개 이상 명시했는가?
- [ ] **출력 형식 제어**: "기존 코드를 손대지 말라", "3줄 요약을 달라"는 지침이 들어갔는가?
