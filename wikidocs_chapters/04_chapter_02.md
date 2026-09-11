# Chapter 02. [실습] 프롬프트 세 번으로 브라우저에서 만드는 '루틴메이트 UI 프로토타입'

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- **목표**: 회원가입이나 복잡한 설정 없이, 브라우저에서 단 3번의 대화로 동작하는 **스마트 습관 트래커 「루틴메이트」의 첫 화면**을 완성합니다.
- **완성할 화면**:
  1. **상단**: 오늘 날짜와 목표 달성률 게이지(Progress Bar)
  2. **중앙**: 습관 카드 3개 (💧 물 마시기, 📖 독서하기, 🏃 운동하기)
  3. **인터랙션**: 체크박스를 누르면 줄이 그어지고 상단 달성률이 쑥 올라가는 시각적 효과

---

## 2. 💡 [1분 개념] '컴포넌트(Component)'란 레고 블록입니다
우리가 보는 웹사이트나 앱은 커다란 한 장의 그림이 아닙니다.  
여러 개의 조각들이 조립되어 있는 **'레고 성'**입니다.

- 🧱 **상단 바 블록**: 오늘 날짜와 진행률을 보여주는 레고 조각
- 🧱 **습관 카드 블록**: 아이콘, 습관 이름, 체크박스가 들어 있는 레고 조각
- 🧱 **축하 팝업 블록**: 100% 달성 시 폭죽이 터지는 레고 조각

이처럼 화면을 구성하는 독립적인 레고 조각들을 개발 용어로 **'컴포넌트(Component)'**라고 부릅니다.  
AI에게 지시를 내릴 때도 통째로 "앱 만들어줘"라고 하는 것보다, **"상단 바 레고 블록과 습관 카드 레고 블록을 만들어줘"**라고 지시하면 AI가 훨씬 더 정교하고 버그 없는 결과물을 만들어냅니다.

---

## 3. 📋 [AI 지시서] 복사해서 바로 붙여넣는 프롬프트 3단계
[Bolt.new](https://bolt.new) (또는 [v0.dev](https://v0.dev)) 사이트에 접속한 뒤, 아래 3단계 프롬프트를 순서대로 복사하여 AI 입력창에 전달하세요.

---

### 1단계: 뼈대와 감각적인 디자인 세팅하기 (1차 프롬프트)

#### 🎯 [디렉터 가이드] 이 프롬프트의 핵심 의도
- **목표**: 서비스의 모바일 규격 뼈대(Layout)와 신선한 첫인상 스타일(Theme)을 1분 만에 세팅합니다.
- **핵심 디렉팅 포인트**:
  1. **페르소나 부여**: AI에게 *"감각적인 미니멀리즘 웹 디자이너이자 숙련된 React 개발자"* 역할을 부여해 코드와 디자인 퀄리티를 최상급으로 고정합니다.
  2. **모바일 화면 규격화 (`max-w-[420px]`)**: PC 와이드 모니터로 화면이 무한정 퍼지지 않도록 스마트폰 크기 중앙 카드로 제한합니다.
  3. **구체적 컬러 & 초기 상태 명시**: 에메랄드 그린(`emerald-500`) 포인트와 함께, 3개 습관 중 2개는 체크 완료 상태로 시작하도록 지시해 시각적 대비를 확인합니다.

#### 📋 [복사 전용] 1차 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚀 1단계 지시문 (AI 첫 대화창에 입력)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-step-1').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-step-1" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 감각적인 미니멀리즘 웹 디자이너이자 숙련된 React 프론트엔드 개발자야.
스마트 습관/루틴 트래커 웹앱인 '루틴메이트 (RoutineMate)'의 모바일 뷰 프로토타입을 만들어줘.

[화면 요구사항]
1. 모바일 스마트폰 화면(최대 너비 420px) 크기로 화면 중앙에 깔끔하게 카드 형태로 배치해줘.
2. 배경은 깔끔한 연한 회색(bg-slate-50), 메인 포인트 컬러는 신선한 에메랄드 그린(emerald-500)을 사용해줘.
3. [상단 헤더 영역]:
   - 오늘 날짜(예: "2026년 9월 10일 목요일")와 "오늘의 루틴 (2/3 달성)" 텍스트 표시
   - 전체 진행률을 보여주는 부드러운 프로그레스 바(Progress Bar) 배치 (현재 66% 채워짐)
4. [루틴 카드 리스트 영역]: 아래 3개의 예시 습관 카드를 예쁘게 보여줘.
   - 💧 아침 미온수 한 잔 마시기 (체크 완료 상태)
   - 📖 경제/기술 도서 10페이지 읽기 (체크 완료 상태)
   - 🏃 저녁 가벼운 조깅 30분 (체크 안 됨 상태)
5. 각 카드에는 대표 이모지, 습관 이름, 그리고 큼직한 원형 체크박스를 넣어줘.</pre>
</div>

> **👀 [1단계 완료 후 확인]:** 화면 중앙에 모바일 비율의 깔끔한 카드와 3개의 습관 리스트가 예쁘게 렌더링되었는지 확인합니다. 아직 클릭해도 반응하지 않는 것이 정상이니, 곧바로 2단계로 넘어갑니다!

---

### 2단계: 실제로 클릭하며 작동하게 만들기 (2차 프롬프트)

#### 🎯 [디렉터 가이드] 이 프롬프트의 핵심 의도
- **목표**: 정적인 그림에 불과했던 프로토타입에 '실시간 인터랙션 로직'을 부여합니다.
- **핵심 디렉팅 포인트**:
  1. **긍정적 피드백으로 맥락 고정**: *"디자인이 아주 마음에 들어!"*로 대화를 시작해 AI가 앞서 잘 만든 디자인 뼈대를 갈아엎지 않고 유지하게 만듭니다.
  2. **토글(Toggle) 인터랙션 묘사**: 체크박스를 눌렀을 때 켜지고 꺼지는 시각적 변화(초록색 체크, 연한 취소선, 카드 투명도)를 명확하게 요구합니다.
  3. **상태(State) 간 인과관계 연결**: 체크박스를 누를 때마다 상단 프로그레스 바 게이지와 "N/3 달성" 숫자가 동시에 실시간 재계산되도록 로직을 엮어줍니다.

#### 📋 [복사 전용] 2차 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ 2단계 지시문 (첫 화면 렌더링 후 대화창에 입력)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-step-2').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-step-2" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">디자인이 아주 마음에 들어! 이제 사용자가 직접 클릭하면서 작동하도록 기능을 추가해줘.

[동작 요구사항]
1. 습관 카드의 원형 체크박스를 클릭하면 완료 상태가 토글(Toggle)되게 해줘.
2. 완료되면:
   - 체크박스가 초록색으로 채워지며 체크 아이콘(✓)이 표시됨
   - 습관 텍스트에 연한 취소선이 그어지고 카드가 살짝 연해짐
3. 체크 상태가 바뀔 때마다 상단의 "오늘의 루틴 (N/3 달성)" 숫자와 프로그레스 바 게이지가 실시간으로 부드럽게 변해야 해.</pre>
</div>

> **👀 [2단계 완료 후 확인]:** 마우스로 체크박스를 직접 클릭해 보세요! 체크가 켜지고 꺼질 때마다 상단 게이지 바가 `33%` ➔ `66%` ➔ `100%`로 부드럽게 오르내린다면 2단계 대성공입니다.

---

### 3단계: 도파민 폭발! 100% 완료 축하 효과 넣기 (3차 프롬프트)

#### 🎯 [디렉터 가이드] 이 프롬프트의 핵심 의도
- **목표**: 사용자가 하루 루틴을 모두 완주했을 때 짜릿한 성취감(도파민)을 주는 축하 시각 효과를 심습니다.
- **핵심 디렉팅 포인트**:
  1. **조건부 발동(Trigger Condition)**: "3개의 습관을 모두 완료(100% 달성)하는 순간"에만 발동하도록 정확한 조건을 부여합니다.
  2. **화려한 폭죽 애니메이션 (Confetti)**: 사용자 반응률을 극적으로 올려주는 축하 팡파레 효과를 구체적 용어로 요청합니다.
  3. **토스트(Toast) 팝업**: 화면 전체를 가리는 촌스러운 경고창 대신, 하단에 살포시 떴다 사라지는 세련된 토스트 메시지로 칭찬을 건넵니다.

#### 📋 [복사 전용] 3차 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎉 3단계 지시문 (2단계 동작 검증 후 최종 입력)</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-step-3').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-step-3" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">완벽해! 마지막으로 도파민을 주는 축하 효과를 하나 넣어줘.

[축하 인터랙션]
- 사용자가 3개의 습관을 모두 완료(100% 달성)하는 순간:
  1. 화면에 화려한 팡파레 폭죽(Confetti) 애니메이션 효과가 터지게 해줘.
  2. "🎉 오늘 목표를 모두 달성하셨어요! 멋진 하루입니다!"라는 축하 메시지가 하단에 깜짝 토스트(Toast) 팝업으로 나타나게 해줘.</pre>
</div>

> **👀 [3단계 완료 후 확인]:** 3개의 습관 카드를 모두 체크하여 100%를 달성해 보세요! 화면 가득 화려한 축하 폭죽이 팡 터지며 하단에 칭찬 토스트 팝업이 나타난다면, 여러분의 첫 인터랙티브 웹 프로토타입 완성입니다!

---

## 4. 👀 [검수 기준] 내 화면과 비교하는 성공 체크리스트
AI가 작성을 마치고 화면을 렌더링하면, 디렉터의 눈으로 다음 항목을 직접 클릭하며 검수해 보세요.
- [ ] **모바일 비율 확인**: 화면 양옆이 너무 퍼지지 않고 스마트폰 화면처럼 가운데 예쁘게 모여 있는가?
- [ ] **인터랙션 확인**: 체크박스를 눌렀을 때 부드럽게 초록색으로 변하고 취소선이 생기는가?
- [ ] **상단 게이지 실시간 연동**: 3개 중 1개만 체크하면 `33%`, 2개 체크하면 `66%`, 3개 다 체크하면 `100%`로 게이지가 차오르는가?
- [ ] **폭죽 효과 확인**: 3개를 모두 체크했을 때 화면에 알록달록한 축하 폭죽이 터지는가?

이 4가지가 모두 정상 작동한다면, **축하합니다! 여러분은 코딩 문법 한 줄 외우지 않고 10분 만에 첫 번째 작동하는 인터랙티브 웹앱을 성공적으로 런칭하신 것입니다.**

---

## 5. 🚨 [비상 대응] 빨간 글씨(에러)나 이상 동작이 나타났나요?

### Q1. 체크박스를 눌러도 색깔이 안 바뀌고 게이지가 안 움직여요!
- **원인**: AI가 화면(디자인)만 그리고 실제 데이터를 기억하고 바꾸는 '상태(State)' 로직을 빠뜨렸을 때 발생합니다.
  - **해결 프롬프트**: 아래 복사 버튼을 눌러 상태 로직 복구를 요청하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방] 체크박스 상태(useState) 복구 프롬프트</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch02-q1').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch02-q1" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">체크박스를 클릭해도 상태가 바뀌지 않아. React의 useState를 사용해서 체크 여부를 기억하고, 클릭할 때마다 상단 프로그레스 바 수치와 텍스트가 즉시 다시 계산되도록 수정해줘.</pre>
</div>

### Q2. 텍스트가 길어져서 카드 밖으로 삐져나가거나 깨져 보여요!
- **원인**: 모바일 화면 크기에 맞춘 여백과 말줄임 설정이 빠졌기 때문입니다.
  - **해결 프롬프트**: 아래 복사 버튼을 눌러 모바일 반응형 수리를 요청하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방] 모바일 카드 넘침 방지 프롬프트</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch02-q2').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch02-q2" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">스마트폰 화면에서 카드가 밖으로 넘치지 않도록 전체 컨테이너에 max-w-md와 mx-auto를 적용하고, 습관 텍스트가 길어져도 줄바꿈이 자연스럽게 되도록 레이아웃을 다듬어줘.</pre>
</div>

---

## 6. 🛡️ [세이프티넷] 이번 챕터 공식 완성본 링크
- 🔗 [루틴메이트 공식 GitHub: ch02-web-prototype 완성본 브랜치 열기](https://github.com/kangheeyeol/VibeCoding/tree/ch02-web-prototype)
- 🌐 [루틴메이트 공식 배포 라이브 데모 바로가기](https://vibe-coding-delta-three.vercel.app/)
