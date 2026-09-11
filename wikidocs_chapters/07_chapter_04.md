# Chapter 04. 망하는 프롬프트 vs 흥하는 프롬프트 (목표, 제약조건, 페르소나, 출력형식)

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- AI에게 지시할 때 매번 결과물이 엉뚱하게 빗나가는 근본 원인을 완벽히 파악합니다.
- 초보자의 막연한 질문을 일류 PM의 명확한 업무 지시서로 바꾸는 **'프롬프트 4원칙(R-T-C-O)'**을 익히고 실전에 적용합니다.
- 신규 기능 추가, 에러 수정, 디자인 변경 시 복사해서 바로 쓰는 **3대 실전 프롬프트와 RTCO 만능 템플릿**을 손에 넣습니다.

---

## 2. 💡 [1분 개념] AI는 '말귀 어두운 천재 인턴'입니다
AI는 전 세계 모든 프로그래밍 언어와 백과사전을 통째로 외운 천재입니다.  
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

### 📋 3대 실전 상황별 프롬프트 비교 & 복사 카드

#### 사례 1. 신규 기능 추가: 로그인 모달 창 만들기
- ❌ **망하는 지시**: `"로그인 기능 하나 만들어줘."`  
  *(결과: AI가 기존 화면을 다 지우고 엉뚱한 전체 로그인 페이지를 새로 만들어 프로젝트가 꼬임)*
- ⭕ **흥하는 디렉터 지시**: 아래 복사 버튼을 눌러 명확한 지시서를 전송하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
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

```plain text
너는 보안에 엄격한 풀스택 엔지니어(Role)야.
루틴메이트에 이메일과 비밀번호로 로그인하는 모달 창(Task)을 만들어줘.

[제약조건 및 지침]
1. 화면이 깜빡이며 페이지가 이동하지 않도록 팝업 모달 형태로 띄워줘.
2. 비밀번호는 6자리 이상인지 검증하는 유효성 검사 로직을 포함해줘.
3. 디자인은 Tailwind CSS를 쓰고, 기존 헤더 컴포넌트의 우측 상단 로그인 버튼과 자연스럽게 연동해줘.

[출력형식]
- components/LoginModal.tsx 파일의 전체 완성 코드를 작성하고, 헤더 연결 방법을 3줄로 설명해줘.
```

---

#### 사례 2. 버그 수정 요청: F12 콘솔 에러 패치
- ❌ **망하는 지시**: `"에러 나요. 왜 안 되죠? 고쳐주세요."`  
  *(결과: 에러 종류와 위치를 몰라 AI가 잘 작동하던 엉뚱한 컴포넌트를 난도질함)*
- ⭕ **흥하는 디렉터 지시**: 아래 복사 버튼을 눌러 콘솔 에러와 함께 전송하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
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

```plain text
너는 React 및 Next.js 프론트엔드 디버깅 전문가야.
습관 카드의 체크박스를 클릭했을 때 브라우저 F12 콘솔에 다음과 같은 빨간 에러가 발생했어:
'TypeError: Cannot read properties of undefined (reading 'completed')'

[원인 추정 및 제약조건]
1. 습관 목록 데이터가 로딩 중이거나 비어 있을 때 속성을 참조하여 발생하는 문제 같아.
2. 데이터가 완전히 불러와지기 전까지는 로딩 스켈레톤을 보여줘.
3. 안전하게 옵셔널 체이닝(?.)과 삼항 연산자를 적용해서 런타임 충돌을 완벽히 방지해줘.
4. 다른 정상 기능(체크 게이지 애니메이션 등)은 절대 수정하거나 삭제하지 마.

[출력형식]
- 수정된 components/HabitCard.tsx의 해당 함수 부분만 정확히 짚어서 패치 코드를 제안해줘.
```

---

#### 사례 3. 디자인 스타일링: 모던 UI 리뉴얼
- ❌ **망하는 지시**: `"요즘 유행하는 스타일로 예쁘게 바꿔줘."`  
  *(결과: '예쁘게'의 기준이 없어 형광 보라색 버튼과 거대한 폰트가 난무하는 참사가 발생함)*
- ⭕ **흥하는 디렉터 지시**: 아래 복사 버튼을 눌러 구체적인 디자인 규칙을 주입하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
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

```plain text
너는 최고 수준의 UI/UX 디자이너 겸 Tailwind CSS 전문가야.
루틴메이트 메인 화면을 2026년 실리콘밸리 테크 스타트업 수준의 모던 미니멀리즘 스타일로 리디자인해줘.

[디자인 요구사항]
1. 컬러: 전체 배경은 눈이 편안한 bg-slate-50, 카드는 순백색 bg-white, 활성화 포인트는 emerald-600 적용
2. 테두리 & 그림자: 둔탁한 선 대신 border border-slate-200과 부드러운 shadow-sm 적용
3. 모서리: 모든 카드와 입력창 모서리는 rounded-2xl로 부드럽게 깎아줘.
4. 모바일 최적화: 가로 스크롤이 생기지 않도록 max-w-md mx-auto 안에 타이트하게 패딩(p-4)을 맞춰줘.

[출력형식]
- 어떤 클래스가 적용되었는지 비개발자 눈높이에서 3줄로 요약해줘.
```

---

## 4. 📋 [치트키] 비개발자 전용 프롬프트 4원칙: RTCO 공식

AI에게 지시를 내리기 전, 머릿속으로 다음 4글자만 기억하세요.

| 영문 약자 | 핵심 요소 | 디렉터의 질문 | 실전 작성 요령 |
| :---: | :--- | :--- | :--- |
| **R** | **Role (역할)** | "너는 누구인가?" | 단순 '개발자'가 아닌, **'보안 전문가', '시니어 React 엔지니어'**처럼 구체적 역할을 부여합니다. |
| **T** | **Task (과업)** | "무엇을 만들어야 하는가?" | "다 만들어줘" 대신, **"체크박스 클릭 시 폭죽 애니메이션을 띄워줘"**처럼 딱 1가지 과업만 줍니다. |
| **C** | **Constraints (제약)** | "어떤 룰을 지켜야 하는가?" | **300줄 제한, Tailwind CSS 사용, 모바일 너비 유지, 기존 코드 삭제 금지** 등 안전 울타리를 칩니다. |
| **O** | **Output (출력)** | "어떤 형태로 납품받을 것인가?" | **"완성된 파일 전체 코드 제공", "비개발자용 3줄 해설 포함"**처럼 내가 원하는 결과 형식을 못 박습니다. |

---

### ⚡ [만능 템플릿] 복사해서 빈칸만 채우는 RTCO 프레임워크

새로운 기능을 요청하거나 코드를 수정할 때, 아래 템플릿을 복사하여 `[{...}]` 표시된 빈칸만 내 요구사항에 맞게 채워 전송하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
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

```plain text
[Role]
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
- 비개발자도 직관적으로 이해할 수 있도록 어떤 원리로 작동하는지 한국어로 3줄 요약해줘.
```

---

## 5. 👀 [검수 기준] 프롬프트 전송 전 10초 자가진단 체크리스트
AI 채팅창에 메시지를 입력하고 엔터를 치기 전, 다음 3가지를 체크하세요:
- [ ] **과업 집중도**: 내가 요구하는 작업(Task)이 1개로 명확하게 좁혀져 있는가? *(1프롬프트 = 1기능 원칙)*
- [ ] **제약조건 방패**: AI가 지켜야 할 제약조건(화면 크기, 색상, 파일 분리 등)을 최소 2개 이상 명시했는가?
- [ ] **출력 형식 제어**: "기존 코드를 손대지 말라", "3줄 요약을 달라"는 지침이 들어갔는가?
