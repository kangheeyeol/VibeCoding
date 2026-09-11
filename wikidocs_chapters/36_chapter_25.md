# Chapter 25. 디버깅 3종 신기: 개발자 도구(F12), 콘솔 로그, AI 에러 분석
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 전 세계 모든 웹 개발자들이 하루 종일 켜놓고 일하는 필수 무기인 **크롬 개발자 도구(Chrome DevTools, F12)**를 정복합니다.
- 코드가 보이지 않는 곳에서 어떻게 흘러가는지 추적하는 **CCTV 카메라(****`console.log`****)**의 활용법을 익힙니다.
- Cursor 에디터 터미널에 내장된 **원클릭 AI 디버그 버튼(****`Debug with AI`****)**을 활용해 문제를 3초 만에 낚아챕니다.
---
## 2. 💡 [1분 개념] '병원 X-ray 촬영기'와 '사건 현장 CCTV'
- **개발자 도구 (F12)**:  
	환자의 몸속 뼈와 혈관을 들여다보는 병원의 정밀 X-ray 촬영기입니다. 화면 겉보기에는 멀쩡해 보여도 F12를 켜면 내부에서 데이터가 잘 오가고 있는지, 어디에 금이 갔는지 한눈에 투시할 수 있습니다.
- **콘솔 로그 (****`console.log`****)**:  
	사건 현장 골목마다 설치해 둔 CCTV입니다.  
	사용자가 습관 체크 버튼을 눌렀을 때 *"1번 골목: 버튼 클릭 감지됨"*, *"2번 골목: Supabase로 데이터 전송 시도 중"*, *"3번 골목: 저장 성공!"*처럼 단계별로 발자국을 남겨 어디서 문제가 생겼는지 범인을 1초 만에 특정해 줍니다.
---
## 3. 📋 [실전 가이드] 디버깅 3종 신기 100% 활용법
### 무기 1. 크롬 개발자 도구(F12)의 딱 2개 탭만 알기
1. 크롬 브라우저에서 `localhost:3000`을 띄우고 키보드 맨 위의 **`F12`**를 누릅니다 (Mac: `Cmd + Option + I`).
2. 화면 오른쪽에 복잡한 창이 뜨지만 쫄 필요 없습니다. 상단 메뉴에서 딱 2개만 기억하세요:
	- 🔴 **Console 탭**: 브라우저 화면 안에서 터진 에러 메시지와 `console.log` 기록을 실시간으로 보여주는 곳.
	- 🌐 **Network 탭**: 우리 앱이 Supabase 클라우드 서버와 대화를 잘 나누고 있는지(200 OK인지 404/500 에러인지) 감시하는 곳.
### 무기 2. AI에게 CCTV(`console.log`) 달아달라고 시키기
체크박스를 눌렀는데 반응이 없을 때, AI 채팅창(`Ctrl + L`)에 아래 프롬프트를 복사해 전달하세요:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🔍 [프롬프트] 상태 추적용 콘솔 로그(CCTV) 자동 부착 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch25-console-log').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch25-console-log" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">@components/HabitCard.tsx 파일에서 사용자가 체크박스를 클릭했을 때 실행되는 함수 안에 디버깅용 console.log를 단계별로 상세히 심어줘:
1. 클릭된 습관의 id와 title 출력
2. 현재 완료 상태(true/false) 출력
3. Supabase 통신 성공 또는 실패 시의 응답 결과 출력
F12 콘솔 창에서 확인하기 쉽게 이모지(👉, 🚨, ✅)를 붙여서 출력해줘.</pre>
</div>

```plain text
@components/HabitCard.tsx 파일에서 사용자가 체크박스를 클릭했을 때 실행되는 함수 안에 디버깅용 console.log를 단계별로 상세히 심어줘:
1. 클릭된 습관의 id와 title 출력
2. 현재 완료 상태(true/false) 출력
3. Supabase 통신 성공 또는 실패 시의 응답 결과 출력
F12 콘솔 창에서 확인하기 쉽게 이모지(👉, 🚨, ✅)를 붙여서 출력해줘.
```
### 무기 3. Cursor 터미널의 치트키 [Debug with AI]
터미널에 빨간 에러가 떴을 때, 에러 문구 우측 상단이나 하단을 보면 파란색의 **`[Debug with AI]`** (또는 `Ask AI`) 버튼이 나타납니다.  
이 버튼을 마우스로 딸깍 누르기만 하면, Cursor가 에러 메시지와 관련 소스코드를 자동으로 읽어 들여 3초 만에 원인과 수정 코드를 대화창에 띄워줍니다!
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] 브라우저에서 `F12`를 눌렀을 때 개발자 도구 창이 정상적으로 열리는가?
- [ ] 습관 카드의 체크박스를 클릭했을 때 `Console` 탭에 `👉 [클릭 감지] ...` 로그가 찍히는가?
- [ ] Cursor 터미널의 에러 메시지 옆에 있는 `Debug with AI` 버튼의 위치를 확인했는가?
---
## 5. 🚨 [비상 대응] F12 콘솔 창에 알 수 없는 노란색/빨간색 글씨가 너무 많을 때
- **원인**: 외부 라이브러리나 크롬 확장 프로그램(Extension)들이 뿜어내는 사소한 경고(Warning)들입니다.
- **해결책**:
	1. 콘솔 창 상단의 깔때기 모양 필터 옆에서 **[Errors]**만 체크하고 [Warnings]나 [Info]는 체크를 끕니다.
	2. 빨간색으로 표시된 진짜 치명적인 에러만 집중해서 AI에게 전달하면 됩니다.
---
## 6. 🛡️ [세이프티넷] 디버깅 공식 레퍼런스
- 🔗 [루틴메이트 공식 디버깅 로그 샘플 코드 확인하기](https://github.com/kangheeyeol/VibeCoding/tree/main/lib)
---
---
