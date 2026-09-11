# Chapter 09. 터미널 공포증 깨부수기: 검은 창은 그저 '명령어를 주고받는 메신저'일 뿐이다
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 영화 속 해커들이나 쓰는 것 같았던 무서운 검은 화면(터미널)에 대한 막연한 공포증을 완전히 없앱니다.
- 비개발자가 평생 사용하는 **핵심 명령어 딱 3개**만 마스터합니다.
---
## 2. 💡 [1분 개념] 터미널은 '컴퓨터와 나누는 카카오톡 창'입니다
우리는 평소에 마우스로 아이콘을 '더블클릭'해서 프로그램을 실행합니다.  
**'터미널(Terminal)'**은 마우스 대신 **글자(텍스트)로 컴퓨터에게 일을 시키는 대화창**일 뿐입니다.
- 마우스로 식당 문을 열고 들어가는 것 = 터미널에 `"가게 문 열어줘"`라고 타이핑하는 것
- 마우스로 프로그램을 끄는 것 = 터미널에 `"가게 문 닫아줘"`라고 요청하는 것
우리가 메신저에서 친구와 카톡을 주고받듯, 터미널은 **"컴퓨터에게 보내는 카카오톡 입력창"**이라고 생각하시면 됩니다. 절대 무서워할 필요가 없습니다!
---
## 3. 비개발자가 평생 쓰는 핵심 명령어 딱 3개
실제로 바이브 코딩을 할 때 비개발자가 직접 터미널에 치는 명령어는 다음 3개가 전부입니다. 이것만 외우면 끝납니다!

| 명령어 | 일상 비유 (카톡 명령) | 실제 일어나는 일 |
| --- | --- | --- |
| **`npm run dev`** | *"가게 오픈해줘!"* | 내 컴퓨터 안에서 웹사이트를 실행하고, 브라우저로 볼 수 있게 로컬 서버를 켭니다. (가장 많이 씀!) |
| **`Ctrl + C`** | *"오늘 영업 종료!"* | 실행 중이던 로컬 서버를 안전하게 끕니다. (터미널에서 언제든 멈추고 싶을 때 누르는 탈출키) |
| **`npm install`** | *"부족한 재료 장 봐와!"* | 프로젝트에 필요한 외부 라이브러리 부품들을 인터넷에서 자동으로 다운받아 채워 넣습니다. |

> 💡 **더 놀라운 사실!**
> 앞으로 복잡한 명령어가 필요할 때는 **Cursor의 AI가 터미널에 명령어를 대신 적어줍니다.**
> 여러분은 화면에 뜨는 **`[Run Command (명령어 실행)]`** 파란색 버튼만 마우스로 콕 눌러주시면 됩니다!
---
## 4. 🚨 [비상 대응] 윈도우에서 빨간 글씨로 "스크립트를 실행할 수 없으며..." 에러가 뜰 때!
윈도우 10/11 환경에서 `npm` 명령어를 칠 때 보안 정책 때문에 빨간 에러가 뜨는 경우가 있습니다. 비개발자가 가장 많이 당황하는 순간입니다.
### 💡 3단계 초간단 해결법

- **1단계: 관리자 터미널 열기**  
  윈도우 시작 버튼을 마우스 우클릭 → **[터미널(관리자)]** 또는 **[PowerShell(관리자)]**을 엽니다.

- **2단계: 보안 권한 해제 명령어 실행**  
  아래 복사 버튼을 눌러 명령어를 복사한 뒤 터미널에 붙여넣고 엔터를 칩니다:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [PowerShell 명령어] 보안 스크립트 실행 권한 해제</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch09-policy').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch09-policy" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">Set-ExecutionPolicy RemoteSigned -Scope CurrentUser</pre>
</div>

- **3단계: 실행 권한 변경 승인**  
  터미널에 `[Y] 예`를 입력하고 엔터를 치면 권한 변경이 완료되며, 평생 다시는 이 에러가 발생하지 않습니다!
---
