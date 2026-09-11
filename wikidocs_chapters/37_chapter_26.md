# Chapter 26. "PC에선 예쁜데 모바일에선 왜 깨질까?": 모바일 퍼스트 반응형 검수

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 넓은 PC 모니터 화면에 속지 않고, 현대 웹 서비스 트래픽의 80% 이상을 차지하는 **스마트폰 모바일 화면을 기준으로 앱을 완벽하게 검수**합니다.
- 크롬 개발자 도구의 **기기 툴바(Device Toolbar)**를 켜서 내 컴퓨터 안에서 아이폰과 갤럭시 화면을 1초 만에 오가며 반응형 디자인을 테스트합니다.
- 모바일에서 가장 흔히 발생하는 **'화면 삐져나옴'과 '가로 스크롤 버그', '모달 잘림 현상'을 박멸하는 마법의 프롬프트**를 배웁니다.

---

## 2. 💡 [1분 개념] 프리사이즈 '고무줄 바지(Responsive Design)'
- **고정형 디자인 (신축성 없는 정장 바지)**:  
  허리 34인치에 딱 맞춰 재단된 바지입니다. 34인치 마네킹(PC 모니터)에는 완벽하게 맞지만, 26인치 스마트폰에 입히면 바지가 질질 끌리고 넘쳐서 볼품이 없어집니다.
- **반응형 디자인 (모바일 퍼스트 고무줄 바지)**:  
  기본적으로 좁은 스마트폰(모바일)에 딱 맞게 타이트하게 만들고, 화면이 넓어지면(태블릿, PC) 고무줄이 자연스럽게 늘어나며 여백과 정렬을 스스로 최적화하는 유연한 옷입니다.

---

## 3. 📋 [실전 가이드] 3단계 모바일 완벽 검수 프로토콜

---

### Step 1. 크롬에서 모바일 시뮬레이터 켜기
1. 브라우저에서 `F12`를 누릅니다.
2. 개발자 도구 창 왼쪽 맨 위에 있는 **스마트폰과 태블릿이 겹쳐진 작은 아이콘(Toggle Device Toolbar)**을 클릭합니다.  
   *(단축키: **`Ctrl + Shift + M`** / Mac: **`Cmd + Shift + M`**)*
3. 화면이 스마트폰 비율로 쏙 좁아집니다!
4. 상단 메뉴에서 `Dimensions: Responsive`를 클릭하여 **`iPhone 14`** 또는 **`Samsung Galaxy S20`**으로 변경해 봅니다.

---

### Step 2. 디렉터의 모바일 3대 악성 결함 점검
스마트폰 화면에서 마우스 휠을 아래로 굴리며 다음 3가지를 매의 눈으로 확인하세요:
1. **가로 스크롤 버그**: 화면이 양옆으로 기분 나쁘게 흔들리거나 바닥에 좌우 스크롤바가 생기는가?
2. **글자 삐져나옴**: 습관 이름이 길어졌을 때 카드 바깥으로 글자가 튀어나가는가?
3. **터치 영역 협소**: 체크박스나 버튼이 너무 작아서 손가락으로 누르기 힘들어 보이지 않는가?

---

### Step 3. AI에게 모바일 퍼스트 수리 지시하기

#### 🎯 디렉터 가이드: 종합 모바일 최적화 지시법
모바일 시뮬레이터에서 화면이 어색하거나 비율이 맞지 않을 때, Cursor AI 채팅창(`Ctrl + L`)을 열고 아래 프롬프트를 복사하여 붙여넣으세요.

#### 📋 [복사 전용] 모바일 퍼스트 반응형 종합 최적화 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📱 [실습 1] 모바일 퍼스트 반응형 UI 종합 최적화</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch26-responsive').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch26-responsive" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 모바일 퍼스트(Mobile-First) 반응형 웹 UI/UX 전문 디자이너 겸 프론트엔드 엔지니어야.
우리 루틴메이트 앱을 모바일 기기(화면 너비 360px~412px)에서 검수했더니 몇 가지 문제가 보여.
Tailwind CSS를 사용해서 완벽한 모바일 최적화를 적용해줘.

[수정 가이드라인]
1. [가로 스크롤 완전 차단]: 최상위 레이아웃 컨테이너에 overflow-x-hidden 및 w-full max-w-md mx-auto를 적용해서 스마트폰 폭 안에 쏙 들어오게 해줘.
2. [습관 카드 반응형 최적화]:
   - 긴 텍스트 입력 시 카드가 깨지지 않도록 습관 제목에 truncate 또는 break-keep 속성을 부여해줘.
   - 체크박스와 완료 버튼은 모바일 엄지손가락 터치가 편하도록 최소 44px x 44px 이상의 터치 타깃 영역(p-2 등)을 확보해줘.
3. [여백 다이어트]: 모바일에서는 좌우 패딩을 px-4 정도로 콤팩트하게 줄이고, PC 화면(md: 이상)에서만 넉넉한 패딩이 들어가도록 반응형 클래스를 구성해줘.</pre>
</div>

> **👀 [검수 포인트]:**  
> - 스마트폰 화면 너비(360px~412px)에서 화면 중앙에 카드가 안정적으로 모이고, 좌우 여백(`px-4`)이 단정하게 확보되는지 확인하세요.

---

#### 🎯 디렉터 가이드: 가로 스크롤 긴급 박멸 지시법
화면이 좌우로 흔들리거나 원치 않는 가로 스크롤바가 생겼을 때, 최상위 컨테이너를 강제로 단속하는 원포인트 처방전입니다.

#### 📋 [복사 전용] 가로 스크롤 박멸 및 중앙 정렬 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📐 [실습 2] 가로 스크롤 박멸 및 중앙 정렬 원포인트 패치</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch26-scroll-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch26-scroll-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">스마트폰 화면에서 앱을 좌우로 스크롤하면 화면이 덜컹거리며 옆으로 밀려.
가로 스크롤을 완전히 차단해줘:

1. app/layout.tsx 및 app/page.tsx의 최상위 부모 엘리먼트에 overflow-x-hidden 및 w-full을 적용해줘.
2. 메인 콘텐츠 래퍼에 max-w-md mx-auto를 주어 모바일 화면 중앙에 정렬시키고 좌우 패딩을 px-4로 통일해줘.
3. 폭을 초과하는 내부 요소가 있는지 전수 점검하여 가로 스크롤바가 영구적으로 사라지게 만들어줘.</pre>
</div>

> **👀 [검수 포인트]:**  
> - 마우스로 화면을 좌우로 드래그했을 때 화면이 덜컹거리며 옆으로 밀리는 현상이 100% 사라졌는지 확인하세요.

---

## 4. 👀 [검수 기준] 모바일 반응형 완성도 4대 체크리스트

AI가 수정한 코드를 브라우저에서 열고 다음 4가지 핵심 기준표를 점검하세요.

| 검수 항목 | 합격 기준 (PASS) | 불합격 징후 (FAIL) |
| :--- | :--- | :--- |
| **1. 가로 스크롤 (Horizontal Scroll)** | 좌우로 절대 흔들리지 않고 세로 스크롤만 동작 | 화면을 좌우로 밀면 빈 여백이 보이며 덜컹거림 |
| **2. 긴 텍스트 줄바꿈 (Text Wrapping)** | 긴 습관명도 카드 폭 안에서 단정하게 2줄로 줄바꿈 | 글자가 카드 테두리 선을 뚫고 삐져나감 |
| **3. 엄지손가락 터치 타깃 (Touch Target)** | 체크박스와 버튼 크기가 최소 44px 이상 확보 | 버튼이 너무 작아서 누를 때 옆 버튼이 같이 눌림 |
| **4. 헤더 및 게이지 정렬 (Header Alignment)** | 상단 달성률(%)과 프로그레스 바가 한 줄로 예쁘게 정돈 | 퍼센트 숫자가 게이지 바 아래로 밀려 떨어짐 |

---

## 5. 🚨 [비상 대응] 디자이너 없이 살려내는 2대 모바일 응급 처방전

---

### 🚨 응급 처방 1: 모달(팝업) 창이 화면 아래로 잘려 [저장] 버튼이 안 눌릴 때

#### 💡 원인 분석 및 디렉터 대처법
모달 창의 높이가 고정 픽셀(예: `h-[600px]`)로 잡혀 있으면, 작은 화면의 스마트폰에서 모달 바닥이 잘려 [저장] 버튼을 누를 수 없게 됩니다. 모달 내부 세로 스크롤(`max-h-[90vh] overflow-y-auto`)을 부여하면 즉시 해결됩니다.

#### 📋 [복사 전용] 모달 팝업 세로 스크롤 긴급 패치 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방 1] 모달 팝업 세로 스크롤 긴급 패치</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch26-modal-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch26-modal-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">스마트폰 화면에서 모달 팝업 창이 열렸을 때 화면 아래로 내용이 잘려서 [저장] 버튼을 누를 수가 없어.
모달 컴포넌트를 다음과 같이 패치해줘:

1. 모달 카드 컨테이너에 max-h-[90vh] overflow-y-auto w-[90%] max-w-md 클래스를 적용해줘.
2. 모바일 화면이 작더라도 모달 안에서 부드럽게 세로 스크롤이 되어 하단 버튼이 항상 노출되도록 보장해줘.
3. 모달 닫기(X) 버튼은 우측 상단에 고정되어 스크롤과 무관하게 언제든 닫을 수 있게 해줘.</pre>
</div>

---

### 🚨 응급 처방 2: 아이폰 사파리(Safari) 하단 주소창에 바닥 버튼이 가려질 때

#### 💡 원인 분석 및 디렉터 대처법
모바일 브라우저(특히 iPhone Safari)는 하단에 가변 주소창이 상시 떠 있어서, 단순 `100vh` 높이를 주면 맨 아래 버튼이 주소창 뒤로 숨어 터치되지 않습니다. 최신 동적 뷰포트 단위(`min-h-dvh` 또는 `100dvh`)를 적용해 주어야 합니다.

#### 📋 [복사 전용] 모바일 동적 뷰포트(100dvh) 주소창 간섭 해결 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방 2] 아이폰 사파리 하단 주소창 100dvh 간섭 해결</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch26-dvh-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch26-dvh-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">아이폰 사파리 브라우저에서 화면 맨 아래 버튼이 하단 주소창(툴바)에 가려져서 터치가 안 돼.
다음 반응형 뷰포트 규격을 적용해줘:

1. 화면 전체 높이를 차지하는 컨테이너에 h-screen 대신 min-h-screen 및 min-h-[100dvh]를 적용해줘.
2. 페이지 하단 패딩에 pb-safe 또는 pb-8을 추가해서 모바일 홈 바와 주소창 위로 충분한 여백을 확보해줘.
3. iOS 환경에서도 하단 버튼이 언제나 시원하게 보이도록 패치해줘.</pre>
</div>

---

## 6. 🛡️ [세이프티넷] 이번 챕터 공식 완성본 링크
- 🔗 [GitHub Snapshot: Part 8 완료 시점 모바일 반응형 완성 코드](https://github.com/kangheeyeol/VibeCoding/tree/snapshot-part-08)  
- 코드가 꼬였다면 아래 복사 버튼을 눌러 구원투수 명령어를 터미널에 붙여넣고 1초 만에 복구하세요:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [비상 복구 명령어] Part 8 모바일 반응형 완성본 스냅샷 롤백</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch26-snapshot').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch26-snapshot" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">git fetch origin && git reset --hard origin/snapshot-part-08</pre>
</div>
