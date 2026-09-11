# Chapter 16. '300줄의 법칙': 컴포넌트와 모듈을 깔끔하게 분리시키는 마법의 프롬프트
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 비개발자도 코드의 품질을 최고 수준으로 유지할 수 있는 단 하나의 절대 헌법, **'300줄의 법칙(The 300-Line Rule)'**을 체화합니다.
- 뚱뚱해진 800줄짜리 괴물 파일을 1초 만에 4개의 날씬한 레고 블록으로 쪼개는 실전 분리 프롬프트를 마스터합니다.
---
## 2. 💡 [1분 개념] '서랍장 정리' (Component Decomposition)
옷을 서랍에 넣을 때 양말, 속옷, 바지, 겨울 패딩을 큰 상자 하나에 다 쑤셔 넣으면 아침마다 지옥을 경험합니다.  
우리는 당연히 서랍을 칸칸이 나눕니다:
- 🗄️ 1번 서랍: 양말
- 🗄️ 2번 서랍: 티셔츠
- 🗄️ 3번 서랍: 바지
루틴메이트의 메인 화면(`page.tsx`)도 똑같이 서랍을 나눠주어야 합니다:
- 🧩 **`ProgressHeader.tsx`**: 오늘 날짜와 상단 진행률 게이지 서랍
- 🧩 **`HabitCard.tsx`**: 개별 습관 카드와 체크박스 서랍
- 🧩 **`ConfettiModal.tsx`**: 100% 완료 축하 폭죽 팝업 서랍
- 🧩 **`StreakHeatmap.tsx`**: 30일 잔디 히트맵 서랍
---
## 3. 300줄의 법칙: 디렉터의 절대 헌법
> **"어떤 파일도 줄 번호가 300줄을 넘지 않게 하라. 250줄이 넘어가면 즉시 분리하라!"**
파일이 200~300줄 안쪽으로 유지되면 다음과 같은 기적이 일어납니다:
1. AI가 파일 전체를 0.5초 만에 완벽하게 이해합니다.
2. 특정 기능(예: 습관 카드)을 수정할 때 다른 기능(상단 게이지)에 절대 버그가 전이되지 않습니다.
3. `@HabitCard.tsx` 처럼 멘션하여 가볍게 질문할 수 있어 토큰 비용이 80% 절감됩니다.
---
## 4. 📋 [마법의 프롬프트] 뚱뚱한 파일을 슬림하게 쪼개는 분리 지시서

### 🎯 디렉터 가이드: 컴포넌트 분리 프롬프트 전달법
메인 페이지(`app/page.tsx`)가 300줄에 육박했을 때, 새 대화창(`Ctrl + L`)을 열고 아래 프롬프트를 입력하세요.  
설명과 프롬프트 본문이 분리되어 있으므로 **[📋 프롬프트 복사하기]** 버튼을 누른 후 붙여넣으시면 됩니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🧩 [프롬프트] 300줄의 법칙 기반 컴포넌트 모듈화 분리 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch16-split').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch16-split" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 소프트웨어 리팩토링 전문가야.
현재 @page.tsx 파일의 코드 길이가 너무 길어져서 가독성과 유지보수성이 떨어졌어.
'300줄의 법칙'에 따라 이 파일을 역할별 컴포넌트로 깔끔하게 분리해줘.

[분리 가이드라인]
1. components/ 폴더 아래에 다음 독립된 컴포넌트 파일들을 새로 생성해줘:
   - components/ProgressHeader.tsx : 상단 날짜 및 달성률 게이지 바 영역
   - components/HabitCard.tsx       : 개별 습관 카드, 이모지, 체크박스 영역
   - components/ConfettiModal.tsx   : 100% 달성 시 뜨는 폭죽 및 축하 팝업
2. 분리된 컴포넌트들이 필요한 데이터(습관 목록, 체크 함수 등)는 Props로 깔끔하게 전달받도록 설계해줘.
3. 기존 @page.tsx 파일은 위 컴포넌트들을 import해서 조립만 하는 가벼운 지휘부(Container) 형태로 만들어줘.
4. 디자인이나 기능 동작은 이전과 100% 동일해야 해.</pre>
</div>
---
## 5. 👀 [검수 기준] 분리 전과 분리 후의 극적인 변화
```javascript
[분리 전 (괴물 파일)]
app/page.tsx (총 850줄 - 스크롤 내리다 멀미 남, 버그 천국)

      ⬇️ 300줄의 법칙 적용 후 ⬇️

[분리 후 (명품 모듈화)]
app/page.tsx                 (총 65줄 - 조립만 담당하는 깔끔한 지휘부)
components/ProgressHeader.tsx (총 80줄 - 상단 게이지 전담)
components/HabitCard.tsx      (총 95줄 - 습관 카드 전담)
components/ConfettiModal.tsx  (총 60줄 - 축하 효과 전담)
```
- [ ] 메인 `page.tsx` 파일이 100줄 이내로 홀쭉해졌는가?
- [ ] 브라우저에서 버튼을 누르고 체크했을 때 분리 전과 완전히 똑같이 동작하는가?
---
---
