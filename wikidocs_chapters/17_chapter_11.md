# Chapter 11. AI가 자꾸 헛소리를 해요: 컨텍스트 오염과 대화창 리셋 타이밍
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 대화가 길어질수록 AI가 이전 코드를 잊고 엉뚱한 코드를 내뱉는 **'컨텍스트 오염(Context Pollution)'**의 원리를 이해합니다.
- 바이브 코딩에서 가장 강력한 디버깅 기술인 **'대화창 리셋(Reset)의 골든 타이밍'**을 익힙니다.
---
## 2. 💡 [1분 개념] AI의 뇌는 '교실 칠판'입니다
AI가 기억할 수 있는 용량(컨텍스트 윈도우)은 커다란 **'교실 칠판'**과 같습니다.
처음 대화를 시작할 때는 칠판이 깨끗하게 비어 있어, 여러분의 지시가 칠판 한가운데 또렷하게 적힙니다. AI도 집중력을 100% 발휘합니다.  
하지만 대화가 10번, 20번 넘어가면 어떻게 될까요?  
칠판에 옛날 코드 조각, 실패했던 에러 메시지, 지나간 잡담이 분필 가루처럼 뒤엉켜 칠판이 새까맣게 변합니다.
결국 AI는 **"내가 방금 고치다 실패한 코드"와 "새로 짜야 할 정상 코드"를 구분하지 못하고 횡설수설**하기 시작합니다.  
이때 가장 빠른 해결책은 무엇일까요? 코드를 고치려고 씨름하는 것이 아니라, **지우개로 칠판을 깨끗이 지우는 것(새 대화창 열기)**입니다!
---
## 3. 언제 새 대화창(Ctrl+L / Cmd+L)을 열어야 할까요? (3대 골든 룰)

| 리셋 타이밍 | 상황 및 징후 | 디렉터의 행동 요령 |
| --- | --- | --- |
| **1. 단위 기능 완성 시** | 하나의 기능(예: 체크박스 클릭 시 게이지 오르기)이 성공적으로 구현되었을 때 | 지체 없이 대화창을 닫고, 커밋(Commit)을 남긴 뒤 새 대화창에서 다음 기능(예: 잔디 심기)을 시작합니다. |
| **2. 같은 에러 2회 반복 시** | AI가 "수정했습니다!"라고 했는데 똑같은 에러가 2번 연속 다시 뜰 때 | 현재 대화창은 오염되었습니다. 대화창을 닫고 새 창을 열어 **에러 메시지와 해당 파일만 콕 집어** 다시 질문합니다. |
| **3. 대화 턴(Turn) 7~10회 초과 시** | 하나의 창에서 질문과 답변이 10번 이상 길게 오갔을 때 | AI의 응답 속도가 느려지고 쓸데없이 긴 코드를 출력하기 시작합니다. 즉시 새 창으로 환기합니다. |

---
## 4. 📋 새 창을 열고도 기억을 잃지 않는 비법
*"새 대화창을 열면 AI가 우리 프로젝트를 다 까먹지 않나요?"*  
전혀 걱정하실 필요가 없습니다! 칠판을 지워도 벽에 걸린 설계도(`SPEC.md`)는 그대로 남아있기 때문입니다.
새 대화창을 열었을 때는 딱 한 줄만 입력하면 됩니다. 아래 복사 버튼을 눌러 프롬프트를 전송하세요:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎯 [프롬프트] 새 창에서 SPEC 기반 다음 기능 이어가기</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch11-new-turn').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch11-new-turn" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">@SPEC.md 확인하고, 이번엔 F-03번 기능인 '습관 등록 모달 창'을 만들 차례야. 
현재 코드를 확인하고 필요한 컴포넌트를 설계해줘.</pre>
</div>
이렇게 하면 AI는 이전 대화의 쓰레기 기억 없이, **맑고 깨끗한 뇌로 다음 기능을 완벽하게 구현**합니다.
---
