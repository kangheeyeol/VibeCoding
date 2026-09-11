# Chapter 18. 비개발자에게 Git이란? "보스전 직전의 세이브 파일"
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 비개발자에게 가장 큰 진입장벽이었던 **Git(깃)에 대한 막연한 공포증**을 완전히 떨쳐냅니다.
- 복잡한 명령어(`git commit`, `git add` 등)를 타이핑할 필요 없이, Cursor 좌측의 **'소스 제어(Source Control)' GUI 창에서 마우스 클릭 2번으로 내 앱을 안전하게 세이브(Commit)**하는 법을 배웁니다.
- AI를 활용해 귀찮은 커밋 메시지를 3초 만에 자동으로 작성하는 비법을 익힙니다.
---
## 2. 💡 [1분 개념] RPG 게임의 "보스전 직전 세이브 포인트"
게임을 하다가 강력한 보스 몬스터 방에 들어가기 직전, 우리는 무의식적으로 무엇을 하나요?  
네, 바로 **'세이브(Save, 저장)'**를 누릅니다.  
보스에게 맞아서 죽더라도 방금 저장한 세이브 포인트에서 다시 시작하면 모든 아이템과 경험치가 그대로 유지되기 때문입니다.
```javascript
[비개발자를 위한 Git 3대 용어 직관 번역]
🎮 세이브 파일 만들기 (Commit)   : "지금까지 에러 없이 잘 돌아가는 내 앱 상태를 찰칵 사진 찍어두기"
☁️ 클라우드 백업하기 (Push)      : "내 컴퓨터가 고장 나도 안전하도록 네이버 MYBOX/구글 드라이브(GitHub)에 세이브 파일 올리기"
⏳ 세이브 파일 불러오기 (Revert)  : "AI가 코드를 망쳤을 때, 방금 전 세이브 포인트로 1초 만에 시간 되돌리기"
```
Git은 프로그래머들만의 전유물이 아닙니다.  
비개발자 총괄 디렉터에게 Git은 **"마음 놓고 AI에게 과감한 실험을 지시할 수 있게 해주는 무제한 목숨(라이프)"**입니다.
---
## 3. 📋 [실전 가이드] Cursor에서 마우스 클릭으로 세이브(Commit)하기
터미널을 열 필요가 전혀 없습니다. Cursor 화면 안에서 마우스만으로 세이브 파일을 생성할 수 있습니다.
### Step 1. 소스 제어 창 열기
1. Cursor 에디터 왼쪽 사이드바에서 **나뭇가지에 동그라미 세 개가 달린 모양의 아이콘(소스 제어)**을 클릭합니다.  
  *(단축키: **`Ctrl + Shift + G`** / Mac: **`Cmd + Shift + G`**)*
2. 화면에 `Changes`라는 항목 아래로 방금 수정한 파일 목록(예: `page.tsx`, `HabitCard.tsx`)이 나타납니다.
### Step 2. AI에게 커밋 메시지 작성 시키기
세이브 파일에는 "이게 어떤 시점인지" 라벨(메시지)을 적어야 나중에 찾기 쉽습니다. 하지만 직접 적을 필요가 없습니다.
1. 메시지 입력창 오른쪽 끝에 있는 **반짝이는 작은 AI 아이콘(Generate Commit Message)**을 클릭합니다.
2. Cursor AI가 방금 변경된 코드 내용을 분석하여 3초 만에 완벽한 요약 메시지를 자동으로 작성해 줍니다!
  > 예시: `feat: add habit completion checkbox and progress bar animation`
### Step 3. 세이브 완료 버튼 누르기
- 메시지 입력창 바로 아래에 있는 파란색 **[Commit]** (또는 체크 표시 `✓`) 버튼을 꾹 누릅니다.
- `Changes` 목록이 순식간에 비워지면서, 깨끗하게 세이브 파일 1개가 영구적으로 저장되었습니다!
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] 왼쪽 소스 제어 창의 `Changes` 항목 아래에 숫자가 사라지고 비어 있는가?
- [ ] 에디터 하단 상태 표시줄에 커밋 완료 표시(세이브 포인트 카운트)가 정상 반영되었는가?
- [ ] 브라우저에서 `localhost:3000`을 새로고침했을 때 앱이 에러 없이 잘 동작하는가?
---
## 5. 🚨 [비상 대응] 빨간 글씨(에러)가 떴을 때 응급처치
**Q. 파란색 [Commit] 버튼을 눌렀는데 "Make sure you configure your 'user.name' and 'user.email'"이라는 에러 팝업이 뜹니다!**  
- **원인**: 컴퓨터에 "이 세이브 파일을 만든 사람이 누구인지" 이름표가 등록되지 않아서 생기는 최초 1회성 알림입니다.
### 💡 3단계 초간단 해결책

- **1단계: 터미널 열기**  
  하단 터미널(`Ctrl + ~`)을 엽니다.

- **2단계: 사용자 이름 및 이메일 등록**  
  아래 복사 버튼을 눌러 명령어를 복사한 뒤, 본인의 영문 닉네임과 이메일로 변경하여 터미널에 입력하고 엔터를 칩니다 (최초 딱 1번만 등록하면 평생 다시 묻지 않습니다):

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚙️ [Git 명령어] 최초 1회 사용자 이름 및 이메일 등록</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch18-gitconfig').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch18-gitconfig" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">git config --global user.name "내영문닉네임"
git config --global user.email "내이메일@gmail.com"</pre>
</div>

- **3단계: 커밋 재실행**  
  다시 Cursor의 파란색 **[Commit]** 버튼을 누르면 정상적으로 세이브가 완료됩니다!
---
## 6. 🛡️ [세이프티넷] 공식 템플릿 커밋 히스토리
- 🔗 [루틴메이트 공식 리포지토리 커밋 기록 확인하기](https://github.com/kangheeyeol/VibeCoding/commits/main)  
  *(프로 개발자들은 어떤 단위로 세이브 파일을 남기는지 구경해 보세요!)*
---
