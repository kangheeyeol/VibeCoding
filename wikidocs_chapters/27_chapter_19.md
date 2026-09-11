# Chapter 19. AI가 코드를 망쳐놨을 때 1초 만에 되돌리는 타임머신 (Revert & Checkpoint)
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 바이브 코딩 중 가장 흔히 겪는 **"AI가 멀쩡하던 내 앱을 망가뜨렸을 때의 멘붕"**을 1초 만에 해결하는 법을 배웁니다.
- AI에게 "원래대로 돌려줘!"라고 채팅으로 애원하는 치명적인 실수를 멈추고, Cursor의 **Checkpoint 기능과 Git Discard 기능으로 즉시 롤백(Rollback)**하는 프로토콜을 체득합니다.
---
## 2. 💡 [1분 개념] 포토샵 Ctrl+Z vs 영구 타임머신
일반 문서나 그래픽 툴에서는 실수를 하면 `Ctrl + Z`(실행 취소)를 누릅니다. 하지만 프로그램을 껐다 켜거나 여러 파일을 한꺼번에 수정한 뒤에는 `Ctrl + Z`가 먹히지 않습니다.
AI 코딩에서는 **2단계 비상 탈출 방패**가 존재합니다:
```javascript
┌────────────────────────────────────────────────────────┐
│  [1단계 방패: Cursor Checkpoint (초단기 되돌리기)]        │
│  방금 AI 대화창에서 코드가 수정되었는데 마음에 안 든다?  │
│  👉 AI 채팅창의 [Restore] 버튼을 눌러 직전으로 롤백!     │
└──────────────────────────┬─────────────────────────────┘
                           │ 만약 여러 파일을 건드려 완전히 꼬였다면?
                           ▼
┌────────────────────────────────────────────────────────┐
│  [2단계 방패: Git Discard Changes (영구 세이브 복구)]    │
│  마지막으로 세이브(Commit)했던 그 황금 시간대로 복귀!     │
│  👉 소스 제어 창의 둥근 되돌리기 화살표(⟲) 1초 클릭!     │
└────────────────────────────────────────────────────────┘
```
> ⚠️ **절대 하지 말아야 할 행동**:
> 코드가 깨졌을 때 AI 채팅창에 **"방금 네가 고친 거 다 취소하고 아까 30분 전 상태로 돌려줘"**라고 지시하지 마세요!
> AI는 과거의 전체 코드 상태를 완벽히 기억하지 못하므로, 기억을 짜깁기하다가 다른 정상 코드까지 삭제해 버려 상황이 3배로 악화됩니다. 되돌리기는 반드시 **툴의 버튼(Restore/Discard)**으로 해야 합니다.
---
## 3. 📋 [실전 가이드] 상황별 1초 탈출 프로토콜
### 상황 A: 방금 AI가 제안한 코드가 영 마음에 안 들 때 (Checkpoint)
1. 오른쪽 AI 채팅창(Composer)에서 방금 생성된 답변 상단을 봅니다.
2. 작은 글씨로 표시된 **[Restore Checkpoint]** (또는 `Revert`) 버튼을 클릭합니다.
3. 파일의 코드가 AI가 답변을 출력하기 딱 직전의 깨끗한 상태로 마법처럼 되돌아옵니다.
### 상황 B: 이것저것 만지다 화면이 새하얗게 뻗었을 때 (Git Discard)
AI와 대화를 몇 번 주고받았는데, 에러가 10개씩 터지면서 도저히 손쓸 수 없게 되었다면?  
마지막 세이브 포인트로 즉시 귀환합니다.
1. 왼쪽 사이드바의 **소스 제어(****`Ctrl + Shift + G`****)** 아이콘을 클릭합니다.
2. `Changes` 글자 바로 오른쪽에 마우스를 올리면 나타나는 **둥근 되돌리기 화살표(Discard All Changes)** 아이콘을 클릭합니다.
3. "정말로 모든 변경 사항을 되돌리시겠습니까?" 확인 창이 뜨면 **[Discard Changes]**를 누릅니다.
4. **결과:** 오늘 망쳐놓은 모든 엉터리 코드가 증발하고, 마지막으로 정상 작동하여 세이브(Commit)해 두었던 그 완벽한 상태로 깨끗하게 복구됩니다!
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] 소스 제어 창에서 ⟲(Discard)를 누른 뒤 `Changes` 목록이 깨끗해졌는가?
- [ ] 브라우저 창에서 `F5`(새로고침)를 눌렀을 때, 빨간색 화면이 사라지고 이전의 정상 화면이 다시 나타나는가?
- [ ] 터미널에 에러 로그가 멈추고 `Ready in ...ms` 문구가 뜨는가?
---
## 5. 🚨 [비상 대응] 되돌리기를 눌렀는데 브라우저가 계속 에러 화면일 때
- **원인**: 코드는 되돌아갔는데, 브라우저가 이전의 고장 난 상태를 메모리(캐시)에 쥐고 있는 경우입니다.
- **해결책**:
	1. 브라우저에서 **강력 새로고침 단축키**를 누릅니다:  
		`Ctrl + Shift + R` (Mac: `Cmd + Shift + R`)
	2. 그래도 에러가 남아있다면, 하단 터미널을 클릭한 뒤 `Ctrl + C`를 눌러 서버를 끄고, 아래 복사 버튼을 눌러 개발 서버를 다시 켭니다:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🔄 [터미널 명령어] 개발 서버 재부팅</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch19-restart').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch19-restart" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">npm run dev</pre>
</div>

```bash
npm run dev
```
---
---
