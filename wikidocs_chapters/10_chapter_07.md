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

## 4. 📋 [실습] 루틴메이트 디자인 시스템 프롬프트

### 🎯 디렉터 가이드: 디자인 헌법을 AI에게 주입하는 법
Cursor(`Ctrl + L` 또는 `Ctrl + I`)나 웹 AI 빌더(v0, Bolt, Lovable) 채팅창에 아래 **디자인 헌법 프롬프트**를 입력하세요.  
설명과 프롬프트 문장이 명확히 분리되어 있어, 상단의 **[📋 프롬프트 복사하기]** 버튼을 누른 뒤 바로 붙여넣으시면 됩니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎨 [프롬프트] 루틴메이트 모던 디자인 헌법 주입</span>
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

```plain text
너는 수상 경력이 있는 시니어 UI/UX 디자이너야.
루틴메이트의 전체 디자인 테마를 실리콘밸리 테크 스타트업 수준으로 리디자인해줘.

[디자인 헌법]
1. 프레임워크: Tailwind CSS 및 shadcn/ui 미니멀리즘 스타일 적용
2. 컬러 팔레트:
   - 전체 배경: bg-slate-50 (눈이 편안한 밝은 그레이)
   - 카드 배경: bg-white (순백색)
   - 테두리선: border-slate-200 (아주 얇고 정갈한 선)
   - 메인 포인트: emerald-600 (신뢰감을 주는 숲속 에메랄드)
3. 타이포그래피: 폰트는 가독성 높은 산세리프 폰트를 쓰고, 제목은 font-bold text-slate-800, 부제목은 text-sm text-slate-500으로 대비를 줘.
4. 모서리 및 그림자: 모든 카드와 버튼은 rounded-2xl과 shadow-sm으로 부드러운 인상을 줘.
```

---

## 5. 👀 [검수 기준] 디자인 완성도 체크리스트
- [ ] 버튼과 카드의 둥글기(Border Radius)가 `rounded-2xl`로 일관되게 적용되어 있는가?
- [ ] 포인트 컬러(초록색)가 너무 남발되지 않고, 강조해야 할 체크박스와 완료 게이지에만 절제되어 쓰였는가?
- [ ] 글씨와 배경 사이의 명암 대비가 뚜렷하여 글자가 한눈에 쏙 들어오는가?

---

## 6. 🚨 [비상 대응] AI가 90년대 스타일의 촌스러운 파란색 버튼을 만들었을 때

### 💡 문제 원인과 디렉터 대처법
AI 모델이 기본 HTML 버튼(`button`)에 스타일을 충분히 입히지 않으면 브라우저 기본 파란색 사각형 버튼이 튀어나옵니다.  
이때 당황해서 길게 설명하지 마시고, 아래 응급 처방 프롬프트 딱 한 줄을 복사해서 채팅창에 던져주세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [응급 처방] shadcn/ui 모던 버튼 교체 프롬프트</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch07-button-fix').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch07-button-fix" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">버튼 스타일이 너무 원색적이고 촌스러워. 기본 HTML 버튼 대신, shadcn/ui 스타일의 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all 적용으로 세련되게 바꿔줘.</pre>
</div>

```plain text
버튼 스타일이 너무 원색적이고 촌스러워. 기본 HTML 버튼 대신, shadcn/ui 스타일의 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-xl transition-all 적용으로 세련되게 바꿔줘.
```

---

## 7. 🛡️ [세이프티넷] 공식 템플릿
- 🔗 [루틴메이트 공식 GitHub 저장소: Tailwind 테마 설정 파일(tailwind.config.js) 보기](https://github.com/kangheeyeol/VibeCoding/blob/main/tailwind.config.js)
