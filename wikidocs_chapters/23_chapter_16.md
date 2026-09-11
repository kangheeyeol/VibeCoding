# Chapter 16. '300줄의 법칙': 컴포넌트와 모듈을 깔끔하게 분리시키는 마법의 프롬프트

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 비개발자도 코드 품질을 일류 테크 기업 수준으로 유지할 수 있는 단 하나의 절대 헌법, **'300줄의 법칙(The 300-Line Rule)'**을 체화합니다.
- 코드가 800줄 이상 비대해졌을 때 발생하는 AI의 환각과 버그 전이를 방지하고, 날씬한 레고 블록 컴포넌트로 깔끔하게 쪼개는 **3대 실전 분리 프롬프트**를 마스터합니다.

---

## 2. 💡 [1분 개념] '서랍장 정리'와 컴포넌트 분리 (Component Decomposition)
옷을 정리할 때 양말, 속옷, 티셔츠, 겨울 패딩을 커다란 단벌 상자 하나에 다 쑤셔 넣으면, 양말 한 짝을 찾으려다 온 방을 뒤집어엎게 됩니다.  
소프트웨어 개발도 완전히 똑같습니다. 한 파일(`page.tsx`) 안에 모든 화면 요소와 로직을 쏟아부으면, 버튼 색 하나 고치려다 전체 화면이 멈추는 대참사가 일어납니다.

지혜로운 디렉터는 서랍을 칸칸이 나누어 옷을 보관합니다:
- 🗄️ **1번 서랍**: 양말 전용 칸
- 🗄️ **2번 서랍**: 티셔츠 전용 칸
- 🗄️ **3번 서랍**: 바지 전용 칸

루틴메이트도 화면의 부품별로 독립된 서랍(컴포넌트)을 나눕니다:
- 🧩 **`components/ProgressHeader.tsx`**: 오늘 날짜와 상단 달성률 게이지 바 전담 서랍
- 🧩 **`components/HabitCard.tsx`**: 개별 습관 카드, 이모지, 체크박스 전담 서랍
- 🧩 **`components/AddHabitModal.tsx`**: 새 습관 추가 팝업 창 전담 서랍
- 🧩 **`components/ConfettiModal.tsx`**: 100% 완료 축하 폭죽 애니메이션 전담 서랍
- 📁 **`app/page.tsx`**: 이 부품들을 가져와 조립만 하는 가벼운 지휘부(총괄 관제탑)

---

## 3. 300줄의 법칙: 디렉터의 절대 헌법

> ⚠️ **디렉터의 헌법 조항**:  
> **"어떤 코드 파일도 줄 번호가 300줄을 넘지 않게 하라. 250줄이 넘어가면 즉시 분리하라!"**

파일이 200~300줄 안쪽으로 유지될 때 일어나는 3가지 놀라운 변화:
1. **AI의 이해도 극대화**: 프롬프트 창에 파일을 통째로 읽힐 때 환각(Hallucination) 없이 0.5초 만에 정확한 코드를 출력합니다.
2. **버그 전이 원천 차단**: 습관 카드를 수정하더라도, 상단 게이지 바나 모달 창에 불똥이 튀지 않습니다.
3. **토큰 비용 80% 절감**: 질문할 때 `@HabitCard.tsx` 파일 하나만 가볍게 멘션하므로 AI 토큰 낭비를 획기적으로 줄입니다.

<p align="center" style="margin: 24px 0;">
  <img src="https://raw.githubusercontent.com/kangheeyeol/VibeCoding/main/wikidocs_chapters/images/part5_components_tree.png" alt="300줄의 법칙으로 분리된 컴포넌트 폴더 구조 화면" style="max-width: 100%; border-radius: 10px; border: 1px solid #cbd5e1; box-shadow: 0 4px 14px rgba(0,0,0,0.08);" />
  <br>
  <span style="font-size: 13px; color: #64748b; font-weight: 500;">▲ [화면 16-1] 300줄이 넘는 거대 파일이 components/ 폴더 아래 깔끔한 단일 책임 컴포넌트들로 분리된 모습</span>
</p>

---

## 4. 📋 [실습] 300줄의 법칙 실전 분리 프롬프트 3선

코드가 길어져 AI가 버벅거리거나 유지보수가 어려워질 때, 아래 실무 상황에 맞는 프롬프트를 복사하여 Cursor 채팅창(`Ctrl + L`) 또는 Composer(`Ctrl + I`)에 전송하세요.

---

### 1단계: 거대해진 메인 화면(`page.tsx`) 모듈화 분리

#### 🎯 디렉터 가이드
- **작업 목표**: 800줄에 달하는 메인 화면 파일을 지휘부(`page.tsx`)와 4개의 독립 하위 컴포넌트로 완벽 분리합니다.
- **입력 위치**: Cursor Composer (`Ctrl + I`) 또는 새 대화창 (`Ctrl + L`)
- **핵심 포인트**: 기능과 디자인은 1밀리미터도 바꾸지 않고, 코드의 구조(아키텍처)만 레고 블록으로 나누도록 엄격한 제약조건을 부여합니다.

#### 📋 [복사 전용] 컴포넌트 모듈화 분리 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🧩 [실습 1단계] 300줄의 법칙 컴포넌트 모듈화 분리 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch16-split').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch16-split" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 소프트웨어 리팩토링 전문가야.
현재 @app/page.tsx 파일의 코드 길이가 너무 길어져서 가독성과 유지보수성이 떨어졌어.
'300줄의 법칙'에 따라 이 파일을 역할별 컴포넌트로 깔끔하게 분리해줘.

[분리 가이드라인]
1. components/ 폴더 아래에 다음 독립된 컴포넌트 파일들을 새로 생성해줘:
   - components/ProgressHeader.tsx : 상단 날짜 및 달성률 게이지 바 영역
   - components/HabitCard.tsx       : 개별 습관 카드, 이모지, 체크박스 영역
   - components/AddHabitModal.tsx   : 새 습관 추가 팝업 창 영역
   - components/ConfettiModal.tsx   : 100% 달성 시 뜨는 폭죽 및 축하 팝업
2. 분리된 컴포넌트들이 필요한 데이터(습관 목록, 함수 등)는 Props로 깔끔하게 전달받도록 설계해줘.
3. 기존 @app/page.tsx 파일은 위 컴포넌트들을 import해서 조립만 하는 가벼운 지휘부(Container) 형태로 만들어줘.
4. 디자인이나 기능 동작은 이전과 100% 완벽히 동일해야 해.</pre>
</div>

> **👀 [1단계 검수 포인트]:**
> - `components/` 폴더 안에 신규 파일들(`HabitCard.tsx` 등)이 정상 생성되었는지 확인하세요.
> - `app/page.tsx`의 줄 수가 100~150줄 내외로 대폭 줄어들었는지 파일 맨 아래 줄 번호를 확인하세요.

---

### 2단계: 복잡한 계산식 및 비즈니스 로직 분리 (`lib/storage.ts`)

#### 🎯 디렉터 가이드
- **작업 목표**: 컴포넌트 UI 파일 안에 섞여 있는 데이터 저장, 날짜 계산, 스트릭 계산 등 '순수 계산 로직'을 `lib/` 폴더의 독립 모듈로 추출합니다.
- **입력 위치**: Cursor Chat (`Ctrl + L`)
- **핵심 포인트**: 화면을 그리는 코드(HTML/CSS)와 데이터를 다루는 코드(자바스크립트 함수)가 분리되면 버그 발생률이 절반으로 감소합니다.

#### 📋 [복사 전용] 비즈니스 로직 분리 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📦 [실습 2단계] 비즈니스 로직 및 스토리지 함수 분리</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch16-logic').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch16-logic" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 프론트엔드 아키텍처 전문가야.
현재 UI 컴포넌트 코드 안에 데이터 저장 및 비즈니스 계산 함수들이 뒤섞여 있어.

[로직 분리 가이드라인]
1. lib/ 폴더 아래에 다음 순수 함수 모듈을 생성해줘:
   - lib/types.ts   : 습관(Habit), 상태(Status)에 관한 TypeScript 인터페이스 정의
   - lib/storage.ts : 로컬 스토리지 읽기/쓰기 및 완료 상태 토글 함수
2. 컴포넌트 파일들에서는 위 함수와 타입들을 import해서 호출만 하도록 분리해줘.
3. UI 렌더링 로직과 데이터 관리 로직의 관심사를 명확히 분리해줘.</pre>
</div>

> **👀 [2단계 검수 포인트]:**
> - `lib/types.ts` 및 `lib/storage.ts` 파일이 새로 생성되었는지 확인하세요.
> - 브라우저에서 습관을 등록하고 체크했을 때 데이터가 정상 보존되는지 확인하세요.

---

### 3단계: 분리 후 Import 경로 및 Props 무결성 검수

#### 🎯 디렉터 가이드
- **작업 목표**: 파일을 쪼갠 직후 발생하기 쉬운 모듈 참조 누락(`Cannot find module`)이나 부모-자식 간 데이터 전달(Props) 타입 오류를 단번에 자동 패치합니다.
- **입력 위치**: Cursor Chat (`Ctrl + L`)
- **핵심 포인트**: 분리 직후 브라우저에 붉은 화면이 뜨더라도 당황하지 않고, AI에게 즉시 전수 검사를 지시합니다.

#### 📋 [복사 전용] 분리 후 무결성 점검 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🔍 [실습 3단계] 분리 후 Import 경로 및 Props 무결성 점검</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch16-verify').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch16-verify" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">방금 컴포넌트 분리 작업을 마쳤어.
프로젝트 전체의 TypeScript 컴파일 오류와 Import 경로를 전수 점검해줘:

1. 분리된 모든 컴포넌트 파일 상단에 필요한 모듈이 올바른 상대 경로로 import되었는지 확인해줘.
2. 부모 컴포넌트에서 자식 컴포넌트로 전달하는 Props의 이름과 타입이 100% 일치하는지 검증해줘.
3. 브라우저에서 'Cannot find module' 에러가 나지 않도록 누락된 export / import를 완벽히 패치해줘.</pre>
</div>

> **👀 [3단계 검수 포인트]:**
> - 터미널에 `Compiled successfully` 또는 `Ready` 메시지가 유지되는지 확인하세요.
> - 브라우저 콘솔(F12)에 임포트 관련 빨간 에러 로그가 없는지 확인하세요.

---

## 5. 👀 [검수 기준] 분리 전 vs 분리 후 다이어트 성적표

실제 루틴메이트 프로젝트에 300줄의 법칙을 적용했을 때의 드라마틱한 코드 구조 변화입니다.

| 구분 | ❌ 분리 전 (괴물 모놀리식) | ⭕ 분리 후 (스마트 모듈화) | 비고 |
| :--- | :--- | :--- | :--- |
| **메인 파일** | `app/page.tsx` (총 850줄) | `app/page.tsx` (총 120줄) | **86% 다이어트 달성!** 조립만 담당 |
| **헤더 영역** | 본문에 뒤섞임 | `components/ProgressHeader.tsx` (80줄) | 날짜 및 프로그레스 바 전담 |
| **카드 영역** | 본문에 뒤섞임 | `components/HabitCard.tsx` (95줄) | 체크박스, 이모지 인터랙션 전담 |
| **팝업 모달** | 본문에 뒤섞임 | `components/AddHabitModal.tsx` (90줄) | 새 습관 입력 폼 전담 |
| **축하 효과** | 본문에 뒤섞임 | `components/ConfettiModal.tsx` (60줄) | 100% 완료 폭죽 효과 전담 |

### ✅ 디렉터 10초 자가진단 체크리스트
- [ ] 탐색기 창을 열었을 때 `components/` 폴더 아래 각 부품 파일들이 질서정연하게 자리 잡았는가?
- [ ] 메인 `app/page.tsx` 파일의 스크롤을 내렸을 때 200줄 이내에서 파일이 끝나는가?
- [ ] 브라우저에서 습관을 등록하고 체크박스를 눌렀을 때 분리 전과 100% 동일하게 부드럽게 동작하는가?

---

## 6. 🚨 [비상 대응] 컴포넌트를 분리했더니 화면이 하얗게 멈췄을 때 (White Screen)

### 💡 문제 원인과 디렉터 대처법
초보 AI가 컴포넌트를 분리할 때 상단에 `'use client';` 선언을 빠뜨리거나, 부모가 넘겨주어야 할 필수 데이터(Props)를 빠뜨리면 브라우저가 하얀 백지(White Screen of Death) 상태로 멈출 수 있습니다.  
이때 당황하여 코드를 되돌리지 마시고, 아래 응급 복구 프롬프트를 복사하여 채팅창에 전달하세요.

#### 📋 [복사 전용] 클라이언트 컴포넌트 및 Props 긴급 복구 지시서

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방] 컴포넌트 분리 후 화이트스크린 긴급 패치</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch16-emergency').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch16-emergency" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">컴포넌트를 분리한 후 브라우저 화면이 하얗게 멈추고 렌더링되지 않아.

[원인 점검 및 긴급 조치]
1. useState나 이벤트 핸들러(onClick 등)를 사용하는 모든 분리된 컴포넌트 파일 맨 첫 줄에 'use client'; 선언이 누락되었는지 확인하고 추가해줘.
2. 부모(page.tsx)에서 자식 컴포넌트로 전달되는 Props 중 undefined가 넘어가서 충돌이 나는 곳이 없는지 삼항 연산자나 기본값을 안전하게 채워줘.
3. 코드를 롤백하지 말고, 에러의 원인 부분만 콕 집어서 즉시 정상 화면이 뜨도록 패치해줘.</pre>
</div>

---

## 7. 🛡️ [세이프티넷] 공식 완성본 컴포넌트 구조
- 🔗 [루틴메이트 공식 GitHub 저장소: components 폴더 원본 코드 보기](https://github.com/kangheeyeol/VibeCoding/tree/main/components)
- 🔗 [루틴메이트 공식 GitHub 저장소: 메인 app/page.tsx 지휘부 코드 보기](https://github.com/kangheeyeol/VibeCoding/blob/main/app/page.tsx)
