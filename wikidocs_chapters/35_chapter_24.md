# Chapter 24. 에러 메시지 번역기: 터미널 빨간 글씨에 쫄지 않는 법
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 터미널이나 브라우저에 시뻘건 영어 글씨(Error Stack Trace)가 쏟아져 나와도 심장이 두근거리지 않는 **'디버깅 마인드셋'**을 갖춥니다.
- 복잡한 50줄의 에러 로그 중에서 **AI가 즉시 원인을 파악할 수 있는 핵심 2줄(에러 종류 + 파일 경로)을 짚어내는 눈**을 기르고, AI에게 복사해 붙여넣는 공식 프롬프트를 배웁니다.
---
## 2. 💡 [1분 개념] '병원 종합 검진 진단서' 읽는 법
병원에서 피검사를 받으면 결과지에 수십 가지 의학 용어와 숫자가 복잡하게 적혀 있습니다.  
일반인은 그 외계어 수치들을 다 이해할 필요가 없습니다.  
의사 선생님이 짚어주는 딱 두 가지만 들으면 됩니다:
1. **병명**: "위에 염증이 조금 있습니다." (`TypeError: Cannot read properties of undefined`)
2. **환부 위치**: "위장 아랫부분입니다." (`at components/HabitCard.tsx:18`)
```javascript
[터미널 에러 로그의 해부도]
🔴 TypeError: Cannot read properties of undefined (reading 'title')  ◀── [1. 병명] 제목이 비어있는데 읽으려 함!
    at HabitCard (webpack-internal:///./components/HabitCard.tsx:18:24) ◀── [2. 환부] HabitCard.tsx 18번째 줄!
    at renderWithHooks (webpack-internal:///./node_modules/...)          ◀── (이하 40줄은 시스템 내부 잡음. 무시!)
    at mountIndeterminateComponent (...)
```
에러 메시지는 컴퓨터가 우리에게 화를 내는 것이 아닙니다.  
**"디렉터님, 제가 지금 HabitCard 18번째 줄에서 'title'이라는 글자를 찾지 못해 잠시 멈췄습니다. 여기를 확인해 주세요!"**라고 보내는 아주 친절하고 구체적인 SOS 신호입니다.
---
## 3. 📋 [AI 지시서] 에러를 단번에 해결하는 응급 처방 프롬프트

### 🎯 디렉터 가이드: 에러 메시지 전달 요령
에러가 발생하면 터미널이나 브라우저 화면의 붉은 텍스트를 마우스로 드래그하여 복사(`Ctrl + C`)하세요.  
그다음 아래 **[📋 프롬프트 복사하기]** 버튼을 눌러 양식을 복사한 뒤, `[에러 메시지 전문]` 자리에 복사한 텍스트를 채워 AI 채팅창(`Ctrl + L`)에 전달하세요.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [프롬프트] 에러 로그 원인 규명 및 무결점 패치 처방전</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch24-error-patch').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch24-error-patch" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 Next.js 14와 React 프론트엔드 최고 디버깅 전문가야.
우리 루틴메이트 프로젝트를 실행하던 중 다음과 같은 에러가 발생했어:

[에러 메시지 전문]
{여기에 복사한 빨간 에러 텍스트를 그대로 붙여넣으세요}

[디렉터 요청 사항]
1. [한 줄 원인]: 비개발자도 직관적으로 이해할 수 있게, 이 에러가 왜 났는지 쉬운 일상 비유로 딱 한 줄 요약해줘.
2. [범인 위치]: 어느 파일의 몇 번째 줄 코드 때문에 문제가 생긴 건지 정확히 알려줘.
3. [패치 코드]: 다른 정상 기능이 깨지는 부작용(Side Effect)이 없도록, 해당 부분만 안전하게 수정하는 완벽한 교체 코드를 제안해줘.</pre>
</div>
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] AI가 수정한 코드를 `Accept`한 뒤, 터미널의 빨간 글씨가 멈추고 `Ready in ...ms` 상태로 돌아왔는가?
- [ ] 브라우저 창에서 `F5`(새로고침)를 눌렀을 때 빨간 에러 오버레이 팝업이 사라지고 정상 화면이 나오는가?
---
## 5. 🚨 [비상 대응] AI가 에러를 고치려다 다른 에러를 또 만들 때 (핑퐁 지옥 탈출법)
- **증상**: A 에러를 고쳐달라고 했더니 B 에러가 나고, B를 고쳤더니 다시 C 에러가 나면서 코드가 누더기가 되는 현상.
- **디렉터의 결단**:
	1. AI와 에러 수정 대화를 **3회 이상 주고받았는데도 안 고쳐진다면 즉시 멈추세요!**
	2. Part 6에서 배운 **Git Discard Changes (⟲)**를 눌러 에러가 나기 전 마지막 세이브 포인트로 즉시 되돌아갑니다.
	3. 대화창을 리셋(`Ctrl + L`)하고, 더 작은 단위로 쪼개어 AI에게 다시 지시하세요.
---
## 6. 🛡️ [세이프티넷] 자주 만나는 5대 에러 치트시트
- 🔗 [비개발자를 위한 Next.js 5대 빈출 에러 사전 바로가기](https://github.com/kangheeyeol/VibeCoding/wiki/Common-Errors)
---
---
