# Chapter 29. 모바일 홈 화면에 앱으로 추가하기 (PWA 세팅)
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 애플 앱스토어나 구글 플레이스토어에 10만 원씩 개발자 등록비를 내고 까다로운 심사를 몇 주씩 기다리는 대신, **웹사이트를 스마트폰의 진짜 네이티브 앱처럼 설치시키는 PWA(Progressive Web App)** 기술을 적용합니다.
- 스마트폰 홈 화면에 예쁜 루틴메이트 앱 아이콘을 띄우고, 터치했을 때 주소창이 사라진 깔끔한 풀스크린 앱 경험을 선사합니다.
---
## 2. 💡 [1분 개념] '앱스토어 심사'를 우회하는 마법의 고속도로
과거에는 스마트폰 화면에 아이콘을 띄우려면 수백만 원을 들여 iOS/Android 앱을 따로 개발하고 애플의 엄격한 검열을 통과해야 했습니다.  
하지만 현대 웹 표준인 **PWA(웹 앱)** 기술을 사용하면:
1. 사용자가 웹사이트에 접속합니다.
2. 스마트폰의 **'홈 화면에 추가'** 버튼을 누릅니다.
3. 1초 만에 카카오톡이나 토스처럼 **홈 화면에 독자적인 앱 아이콘**이 생성됩니다!
4. 실행하면 상단 URL 주소창이 사라지고 **완벽한 전체화면 모바일 앱**으로 작동합니다.
---
## 3. 📋 [AI 지시서] PWA 매니페스트 및 아이콘 자동 설정

### 🎯 디렉터 가이드: PWA 원클릭 앱 설정 지시법
Cursor AI 대화창(`Ctrl + L`)을 열고 아래 **[📋 프롬프트 복사하기]** 버튼을 눌러 지시하세요.  
설명과 프롬프트 본문이 분리되어 있어 손쉽게 복사해 전송할 수 있습니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📲 [프롬프트] PWA manifest.json 및 모바일 앱 설치 연동 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch29-pwa').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch29-pwa" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 모바일 PWA(Progressive Web App) 전문가야.
우리 루틴메이트 웹사이트를 스마트폰 홈 화면에 설치 가능한 완벽한 웹 앱으로 만들어줘.

[작업 가이드라인]
1. public/manifest.json 파일을 만들고 다음 메타데이터를 정의해줘:
   - name: "루틴메이트 - 스마트 습관 트래커"
   - short_name: "루틴메이트"
   - start_url: "/"
   - display: "standalone" (브라우저 주소창 숨김 모드)
   - background_color: "#ffffff"
   - theme_color: "#6366F1" (앱 메인 인디고 컬러)
   - icons: 192x192 및 512x512 사이즈의 표준 앱 아이콘 설정
2. app/layout.tsx 파일의 <head> 태그 안에 PWA 연동 링크 및 아이폰용 apple-touch-icon 메타태그를 깔끔하게 삽입해줘.
3. 사용자가 사파리(Safari)나 크롬으로 모바일 접속했을 때, 하단에 "홈 화면에 앱으로 추가하고 매일 루틴을 지켜보세요! 📲" 안내 배너를 띄우는 콤팩트한 힌트 컴포넌트(PwaInstallPrompt.tsx)를 제안해줘.</pre>
</div>
---
## 4. 👀 [검수 기준] 스마트폰 실전 설치 테스트
- [ ] **아이폰 (Safari)**: 하단 가운데 공유 버튼(네모에 위 화살표) 클릭 ➡️ **[홈 화면에 추가]** 클릭 ➡️ 바탕화면에 예쁜 루틴메이트 아이콘이 생겼는가?
- [ ] **갤럭시 (Chrome)**: 우측 상단 점 3개 메뉴 클릭 ➡️ **[앱 설치]** (또는 홈 화면에 추가) 클릭 ➡️ 홈 화면에 아이콘이 생겼는가?
- [ ] 홈 화면의 루틴메이트 아이콘을 눌러 실행했을 때, 상단 브라우저 주소창(`https://...`)이 사라지고 네이티브 앱처럼 실행되는가?
---
## 5. 🚨 [비상 대응] 아이폰 홈 화면 아이콘이 기본 웹사이트 캡처로 뜰 때
- **원인**: iOS 사파리는 일반 아이콘 외에 `apple-touch-icon.png`라는 애플 전용 규격 아이콘을 별도로 요구합니다.
- **해결책**:
	- `public/apple-touch-icon.png` 파일(180x180 픽셀)이 존재하는지 확인하고, `app/layout.tsx`에 `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />` 태그가 잘 들어갔는지 AI에게 점검을 요청하세요.
---
## 6. 🛡️ [세이프티넷] PWA 공식 템플릿 파일
- 🔗 [루틴메이트 공식 manifest.json 및 아이콘 리소스 보기](https://github.com/kangheeyeol/VibeCoding/tree/main/public)
---
---
