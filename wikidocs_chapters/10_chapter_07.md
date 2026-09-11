# Chapter 07. 감각이 없어도 전문가처럼: 디자인 시스템(Tailwind, shadcn/ui) 한 번에 입히기

## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- "나는 미적 감각이 없어서 촌스러운 사이트가 나오면 어쩌지?"라는 두려움을 완벽히 없앱니다.
- 실리콘밸리 최신 테크 기업들이 표준으로 사용하는 **Tailwind CSS + shadcn/ui** 디자인 시스템을 이해하고, 프롬프트 한 줄로 세련된 디자인을 입히는 치트키를 마스터합니다.

---

## 2. 💡 [1분 개념] '동대문 원단 바느질' vs '명품 기성복 세트'
과거의 웹 디자인(순수 CSS)은 동대문 시장에서 원단을 떼어다가 치수를 재고 가위질을 해서 옷을 만드는 것과 같았습니다. 비개발자가 직접 바느질을 하면 핏이 엉망진창인 옷이 나올 수밖에 없었습니다.

반면, 현대의 **디자인 시스템(Tailwind + shadcn/ui)**은 **'세계 최고 디자이너들이 완벽한 핏으로 재단해 둔 명품 기성복 세트'**입니다.  
버튼, 카드, 모달, 뱃지 등 모든 부품이 이미 완벽한 비율과 간격으로 만들어져 있습니다.  
우리는 그저 AI에게 **"shadcn/ui 스타일의 깔끔한 카드를 꺼내서 입혀줘"**라고 말하기만 하면 됩니다.

---

## 3. 촌스러운 웹사이트를 살려내는 4대 마법의 키워드
AI에게 디자인을 시킬 때 *"예쁘게 해줘"*라고 말하는 대신, 다음 4가지 전문 키워드를 프롬프트에 슬쩍 얹어보세요. 결과물의 수준이 10배 이상 올라갑니다.

| 마법의 키워드 | 실제 적용 효과 | 프롬프트 적용 예시 |
| --- | --- | --- |
| **1. shadcn/ui style** | 군더더기 없는 미니멀리즘과 얇은 보더라인(Border), 세련된 여백을 자동으로 적용 | "모든 컴포넌트는 shadcn/ui 스타일의 모던한 디자인 톤을 유지해줘." |
| **2. Subtle Borders & Soft Shadows** | 답답하고 굵은 테두리 대신, 은은한 그림자와 얇은 연회색 테두리로 고급스러움 연출 | "카드 테두리는 border border-slate-200을 쓰고, soft shadow(그림자)를 넣어줘." |
| **3. 60-30-10 Color Rule** | 배경 60%(화이트/연회색), 보조 30%(다크 텍스트), 포인트 10%(초록)의 황금 비율 배색 | "배경은 bg-slate-50, 텍스트는 text-slate-900, 활성화 포인트 컬러는 emerald-600만 사용해줘." |
| **4. Generous Spacing (여백의 미)** | 답답하게 다닥다닥 붙은 요소를 시원하고 넓은 패딩(Padding)으로 정돈 | "답답하지 않도록 컴포넌트 사이에 넉넉한 여백(p-6, gap-4)을 적용해줘." |

---

## 4. 📋 [실습] 프롬프트 3단계로 완성하는 루틴메이트 디자인 시스템

디자인 감각이 없어도 걱정할 필요가 없습니다. 실리콘밸리 테크 기업의 UI 디자인은 타고난 감각이 아니라 **'철저한 규칙과 시스템'**으로 완성됩니다.  
아래 3단계 실습 프롬프트를 순서대로 AI 채팅창(`Ctrl + L` 또는 웹 AI 빌더)에 입력하면, 투박했던 루틴메이트가 세련된 현대적 웹 앱으로 완전히 탈바꿈합니다.

---

### 1단계: 프로젝트 전체 디자인 헌법(Theme & Palette) 주입

#### 🎯 디렉터 가이드
- **작업 목표**: 사이트 전체의 기본 배경색, 글꼴, 둥글기, 메인 포인트 컬러를 60-30-10 법칙에 맞춰 단번에 정의합니다.
- **입력 위치**: Cursor Composer (`Ctrl + I`) 또는 v0 / Bolt / Lovable 채팅창
- **핵심 포인트**: 개별 컴포넌트를 하나씩 수정하기 전에, '전체 디자인 헌법'을 먼저 머릿속에 심어주어야 이후 작업에서 일관된 스타일이 유지됩니다.

#### 📋 [복사 전용] 디자인 헌법 주입 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎨 [실습 1단계] 루틴메이트 모던 디자인 헌법 주입</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-design').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-design" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 수상 경력이 있는 시니어 UI/UX 디자이너야.
루틴메이트의 전체 디자인 테마를 실리콘밸리 테크 스타트업 수준으로 리디자인해줘.

[디자인 헌법]
1. 프레임워크: Tailwind CSS 및 shadcn/ui 미니멀리즘 스타일 적용
2. 컬러 팔레트:
   - 전체 배경: bg-slate-50 (눈이 편안한 밝은 그레이)
   - 카드 배경: bg-white (순백색)
   - 테두리선: border-slate-200 (아주 얇고 정갈한 선)
   - 메인 포인트: emerald-600 (신뢰감을 주는 숲속 에메랄드)
3. 타이포그래피: 폰트는 가독성 높은 산세리프 폰트를 쓰고, 제목은 font-bold text-slate-800, 부제목은 text-sm text-slate-500으로 대비를 줘.
4. 모서리 및 그림자: 모든 카드와 버튼은 rounded-2xl과 shadow-sm으로 부드러운 인상을 줘.</pre>
</div>

> **👀 [1단계 검수 포인트]:**
> - 브라우저 전체 배경이 쨍한 흰색이 아닌 눈이 편안한 밝은 슬레이트 톤(`bg-slate-50`)으로 깔렸는지 확인하세요.
> - 주요 텍스트가 촌스러운 검은색(`#000000`) 대신 세련된 다크 그레이(`text-slate-800`)로 정돈되었는지 확인하세요.

---

### 2단계: 핵심 컴포넌트(습관 카드 & 진행률 바) shadcn/ui 모던화

#### 🎯 디렉터 가이드
- **작업 목표**: 투박한 사각형 박스로 되어 있던 습관 카드와 상단 진행률 바를 shadcn/ui 스타일의 모던 미니멀 카드로 리뉴얼합니다.
- **입력 위치**: Cursor Chat (`Ctrl + L`) 또는 웹 AI 빌더
- **핵심 포인트**: 굵고 어두운 테두리선을 없애고, 얇은 연회색 선(`border-slate-200/80`)과 은은한 그림자(`shadow-sm`), 넉넉한 안쪽 여백(`p-5`)을 부여합니다.

#### 📋 [복사 전용] 컴포넌트 모던 스타일링 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">✨ [실습 2단계] 습관 카드 & 진행률 바 컴포넌트 모던화</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-card').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-card" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 Tailwind CSS와 shadcn/ui 컴포넌트 전문 디자이너야.
루틴메이트의 습관 카드(Habit Card)와 상단 진행률 바(Progress Bar)를 모던 미니멀리즘 스타일로 리뉴얼해줘.

[컴포넌트 디자인 상세 지침]
1. 습관 카드 (HabitCard):
   - 배경: bg-white, 모서리: rounded-2xl
   - 테두리: border border-slate-200/80, 그림자: shadow-sm hover:shadow-md transition-shadow
   - 여백: 내부 패딩 p-5, 카드 간 간격 gap-3
   - 체크박스: 커스텀 체크박스로 크기 w-6 h-6, 체크 시 bg-emerald-600 및 흰색 체크 아이콘 적용
2. 상단 진행률 바 (ProgressBar):
   - 트랙 배경: bg-slate-100, 높이 h-3, 모서리 rounded-full
   - 채움 바: bg-gradient-to-r from-emerald-500 to-teal-500 게이지 상승 애니메이션 적용
3. 다른 기능 로직은 절대 건드리지 말고 순수 Tailwind UI 클래스만 세련되게 다듬어줘.</pre>
</div>

> **👀 [2단계 검수 포인트]:**
> - 습관 카드의 테두리가 얇고 은은하게 정돈되었으며, 마우스를 올렸을 때 그림자가 살짝 깊어지는지 확인하세요.
> - 상단 게이지 바가 자연스러운 에메랄드 그라데이션으로 채워지는지 확인하세요.

---

### 3단계: 마이크로 인터랙션 및 상태 전환(Hover & Active) 디테일 완성

#### 🎯 디렉터 가이드
- **작업 목표**: 버튼을 누르거나 마우스를 올렸을 때 부드럽게 반응하는 '마이크로 인터랙션'을 주입하여 살아 숨 쉬는 앱의 느낌을 완성합니다.
- **입력 위치**: Cursor Chat (`Ctrl + L`)
- **핵심 포인트**: `transition-all duration-200`과 `active:scale-95` 효과를 주면 모바일 네이티브 앱처럼 쫀득한 터치감을 연출할 수 있습니다.

#### 📋 [복사 전용] 마이크로 인터랙션 주입 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [실습 3단계] 마이크로 인터랙션 & 호버 손맛 주입</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-interaction').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-interaction" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">루틴메이트의 모든 클릭 가능한 요소에 모던 웹 마이크로 인터랙션을 입혀줘.

[인터랙션 요구사항]
1. 버튼 인터랙션:
   - 모든 버튼에 hover:brightness-105 active:scale-95 transition-all duration-150을 적용해서 누르는 손맛을 줘.
2. 완료 루틴 시각 효과:
   - 습관 체크박스를 클릭하여 완료 상태가 되면, 텍스트에 line-through와 text-slate-400을 적용하고 카드 투명도를 살짝 낮춰줘(opacity-75).
3. 뱃지 & 스트릭:
   - 연속 달성 스트릭(🔥) 뱃지는 bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2.5 py-0.5 text-xs font-semibold 형태로 작고 귀엽게 연출해줘.</pre>
</div>

> **👀 [3단계 검수 포인트]:**
> - 버튼을 클릭했을 때 살짝 쫀득하게 눌리는 효과(`scale-95`)가 체감되는지 확인하세요.
> - 루틴 체크 시 완료된 항목이 부드럽게 취소선과 회색 톤으로 변하며 차분해지는지 확인하세요.

---

## 5. 👀 [검수 기준] 디자인 시스템 완성도 4대 체크리스트

AI가 수정한 UI를 브라우저로 열었을 때, 다음 4가지 기준표를 보며 10초 만에 자가진단을 수행하세요.

| 검수 항목 | 합격 기준 (PASS) | 불합격 징후 (FAIL) |
| :--- | :--- | :--- |
| **1. 둥글기 일관성 (Border Radius)** | 모든 카드와 모달이 동일한 곡률(`rounded-2xl`)을 유지 | 어떤 버튼은 각지고, 어떤 카드는 둥글어서 제각각임 |
| **2. 60-30-10 배색 절제** | 은은한 슬레이트 배경(60%), 다크 텍스트(30%), 에메랄드(10%) | 빨강, 파랑, 노랑 등 온갖 원색이 한 화면에 뒤섞임 |
| **3. 여백의 리듬감 (Spacing)** | 카드 사이가 답답하지 않고 시원하게 여백(`p-5`, `gap-3`) 확보 | 글씨와 테두리가 바짝 붙어 있어 읽기 답답함 |
| **4. 폰트 명암 대비 (Contrast)** | 제목(진한 다크), 본문(중간), 설명(연한 그레이)의 위계 명확 | 모든 글씨의 크기와 색상이 같아 한눈에 안 들어옴 |

---

## 6. 🚨 [비상 대응] 디자이너 없이 살려내는 3대 디자인 응급 처방전

AI에게 스타일을 맡기다 보면 가끔 황당하고 촌스러운 디자인이 튀어나올 때가 있습니다. 이럴 때는 장황하게 화내지 마시고 아래 3대 응급 처방 프롬프트를 복사해서 그대로 던져주세요.

---

### 🚨 응급 처방 1: 90년대 스타일의 촌스러운 파란색 버튼이 튀어나왔을 때

#### 💡 원인 분석 및 디렉터 대처법
AI 모델이 기본 HTML 버튼 태그를 생성하면서 Tailwind 스타일 클래스를 빠뜨리면 운영체제 기본 파란색 직사각형 버튼이 화면에 띕니다. shadcn/ui 스타일의 에메랄드 버튼 규격을 강제로 지정해주면 즉시 해결됩니다.

#### 📋 [복사 전용] shadcn/ui 모던 버튼 교체 프롬프트

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방 1] shadcn/ui 모던 에메랄드 버튼 교체</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-button-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-button-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">버튼 스타일이 너무 원색적이고 촌스러워. 기본 HTML 버튼 대신, shadcn/ui 스타일의 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all 적용으로 세련되게 바꿔줘.</pre>
</div>

---

### 🚨 응급 처방 2: 요소들이 다닥다닥 붙어 화면이 숨 막힐 때 (여백 긴급 수술)

#### 💡 원인 분석 및 디렉터 대처법
초보 AI 빌더가 모바일 뷰를 구현할 때 안쪽 여백(`padding`)을 빠뜨리면 화면 가장자리에 글자가 딱 달라붙어 극도로 촌스러워집니다. 시원한 여백(Generous Spacing) 규칙을 한 번에 주입하세요.

#### 📋 [복사 전용] 시원한 여백 & 패딩 확장 처방전

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방 2] 시원한 여백(Spacing) 및 레이아웃 패딩 교정</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-spacing-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-spacing-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">현재 화면 레이아웃이 너무 답답하고 요소들이 화면 가장자리에 달라붙어 있어.
1. 메인 컨테이너에 max-w-md mx-auto px-4 py-8을 적용해서 모바일 뷰 중앙에 시원하게 배치해줘.
2. 모든 카드 내부 패딩을 p-6으로 넓히고, 카드와 카드 사이 간격을 space-y-4로 넉넉하게 벌려줘.
3. 여백의 미(Generous Spacing)를 살려서 답답함을 완전히 없애줘.</pre>
</div>

---

### 🚨 응급 처방 3: 폰트가 굴림체나 딱딱한 기본 고딕으로 보일 때 (타이포그래피 교정)

#### 💡 원인 분석 및 디렉터 대처법
글꼴 패밀리가 제대로 상속되지 않으면 브라우저 기본 글꼴(굴림체, 맑은 고딕 등)이 튀어나와 90년대 사이트처럼 보입니다. 세련된 시스템 산세리프 폰트 스택과 타이포그래피 계층을 지정해줍니다.

#### 📋 [복사 전용] 모던 산세리프 타이포그래피 처방전

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방 3] 실리콘밸리 테크 산세리프 폰트 및 타이포그래피 정돈</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-font-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-font-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">글꼴이 둔탁하고 제목과 본문의 구분이 안 되어 촌스러워 보여.
1. 폰트는 Apple의 San Francisco 및 Google Inter 계열의 현대적인 시스템 산세리프 스택(font-sans antialiased)을 적용해줘.
2. 메인 타이틀은 text-2xl font-bold tracking-tight text-slate-900으로 시원하게 강조해줘.
3. 보조 설명 텍스트는 text-sm text-slate-500 font-normal로 계층적 명암 대비를 확실히 줘.</pre>
</div>

---

## 7. 🛡️ [세이프티넷] 공식 템플릿 및 설정 파일
- 🔗 [루틴메이트 공식 GitHub 저장소: Tailwind 테마 설정 파일(tailwind.config.js) 보기](https://github.com/kangheeyeol/VibeCoding/blob/main/tailwind.config.js)
