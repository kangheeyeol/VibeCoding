# 부록 A. 복사해서 바로 쓰는 상황별 바이브 코딩 프롬프트 10선

Cursor AI 채팅창(`Ctrl + L` 또는 `Ctrl + I`)에 복사해서 바로 사용할 수 있는 실전 마법 지시서 모음입니다.  
각 상황에 맞는 프롬프트 상단의 **[📋 프롬프트 복사하기]** 버튼을 누르면 원클릭으로 클립보드에 복사됩니다.

---

### 1. [기능 추가] SPEC 기반 무결점 신규 기능 개발

- **💡 언제 쓰는가?**: 기획서(`SPEC.md`)에 정의된 새로운 단위 기능을 추가할 때 사용합니다. 기존 코드를 망가뜨리지 않고 안전하게 새 부품을 조립시킵니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">✨ [프롬프트 1] SPEC 기반 신규 기능 개발 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-01').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-01" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 시니어 프론트엔드 개발자야.
우리 프로젝트 @SPEC.md 명세서를 바탕으로 새로운 기능 [{구현할 기능 이름}]을 추가하려 해.

[작업 지침]
1. 기존에 잘 작동하고 있는 코드와 디자인을 절대 임의로 수정하거나 삭제하지 마.
2. 새 기능에 필요한 컴포넌트는 components/ 폴더 아래에 별도 파일로 깔끔하게 분리해서 생성해줘.
3. 데이터 변경 시 화면이 깜빡임 없이 부드럽게 실시간 렌더링되도록 구현해줘.
4. 구현 완료 후 어떤 파일이 추가/수정되었는지 3줄로 요약해줘.</pre>
</div>

---

### 2. [디자인 개편] 트렌디하고 세련된 모던 UI 리뉴얼

- **💡 언제 쓰는가?**: 프로토타입 디자인이 너무 밋밋하거나 투박할 때, 실리콘밸리 테크 기업 수준의 감각적인 스타일로 한 번에 탈바꿈시킵니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🎨 [프롬프트 2] 트렌디 모던 UI/UX 리뉴얼 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-02').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-02" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 최고 수준의 UI/UX 디자이너 겸 Tailwind CSS 전문가야.
현재 @page.tsx (또는 해당 컴포넌트)의 디자인이 너무 밋밋하고 투박해.
Linear, Notion, Apple 스타일의 세련된 모던 미니멀리즘 디자인으로 리뉴얼해줘.

[디자인 요구사항]
- 둥근 모서리(rounded-2xl)와 은은한 그림자(shadow-sm hover:shadow-md) 적용
- 차분하고 고급스러운 배경색(bg-slate-50 또는 dark 모드 고려)과 포인트 컬러 활용
- 버튼과 카드에 마우스를 올렸을 때 부드러운 호버 애니메이션(transition-all duration-200) 추가
- 텍스트 가독성을 위해 적절한 폰트 굵기(font-medium)와 자간, 여백을 최적화해줘.</pre>
</div>

---

### 3. [버그 박멸] 에러 로그 원클릭 진단 및 최소 패치

- **💡 언제 쓰는가?**: 터미널이나 브라우저에 빨간 에러 메시지가 떴을 때 사용합니다. 원인 분석과 다른 파일에 영향을 주지 않는 최소 교체 코드를 받아냅니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🚨 [프롬프트 3] 에러 로그 원클릭 진단 및 최소 패치 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-03').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-03" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 프론트엔드 디버깅 전문가야.
현재 화면(또는 터미널)에서 다음과 같은 에러가 발생했어:

[에러 로그]
{여기에 복사한 빨간 에러 메시지를 붙여넣으세요}

1. 비개발자 디렉터의 눈높이에서 이 문제가 왜 생겼는지 일상 비유로 1줄 요약해줘.
2. 어느 파일 몇 번째 줄이 문제인지 명시해줘.
3. 다른 기능에 영향을 주지 않는 가장 안전하고 최소한의 수정 코드(Patch)를 제안해줘.</pre>
</div>

---

### 4. [모듈화] 뚱뚱해진 파일 날씬하게 쪼개기 (300줄의 법칙)

- **💡 언제 쓰는가?**: 특정 코드 파일이 250~300줄을 넘겨 스크롤이 길어지고 버그가 발생하기 시작할 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🧩 [프롬프트 4] 300줄의 법칙 모듈화 분리 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-04').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-04" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">현재 @{파일명} 파일의 코드 길이가 너무 길어져 가독성과 유지보수성이 떨어졌어.
'300줄의 법칙'에 따라 이 파일을 독립적인 하위 컴포넌트들로 깔끔하게 분리해줘.

1. 역할별로 100~200줄 내외의 독립 컴포넌트를 components/ 폴더 아래에 각각 생성해줘.
2. 부모-자식 간에 필요한 데이터(Props)를 명확한 TypeScript 인터페이스로 전달해줘.
3. 기존 파일은 분리된 컴포넌트들을 import하여 조립만 담당하는 가벼운 컨테이너 형태로 만들어줘.
4. 사용자 관점에서의 화면 모양과 동작은 100% 동일해야 해.</pre>
</div>

---

### 5. [정기 대청소] 불필요한 코드 및 중복 제거 (리팩토링)

- **💡 언제 쓰는가?**: 새 기능을 3개 정도 추가했거나 다음 파트로 넘어가기 전, 프로젝트 전체를 깔끔하게 정돈할 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🧹 [프롬프트 5] 클린 코드 정기 대청소(리팩토링) 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-05').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-05" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">우리 프로젝트의 정기 코드 청소(Refactoring)를 진행하려 해.
화면의 시각적 디자인이나 기능 동작은 절대 바꾸지 말고, 오직 내부 코드의 품질만 개선해줘.

1. 사용하지 않는 쓰레기 import문, 안 쓰는 변수, 디버깅용 console.log를 모두 삭제해줘.
2. 여러 컴포넌트에 중복되어 작성된 동일한 함수나 로직을 lib/utils.ts 공통 함수로 묶어줘.
3. 비개발자도 코드를 읽기 쉽도록 핵심 로직마다 친절한 한국어 한 줄 주석을 달아줘.</pre>
</div>

---

### 6. [모바일 최적화] 스마트폰 가로 스크롤 박멸 및 반응형 수리

- **💡 언제 쓰는가?**: 모바일 화면에서 양옆으로 기분 나쁜 스크롤이 생기거나 글자가 카드 밖으로 삐져나갈 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📱 [프롬프트 6] 모바일 반응형 및 가로 스크롤 완전 박멸 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-06').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-06" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">우리 앱을 스마트폰 모바일 화면(너비 360px~420px)에서 확인했더니 몇 가지 화면 깨짐이 발견됐어.
Tailwind CSS의 모바일 퍼스트 원칙을 적용해 완벽히 수리해줘.

1. 화면이 좌우로 흔들리지 않도록 가로 스크롤(overflow-x)을 원천 차단해줘.
2. 모바일 기기에서도 손가락 터치가 편하도록 모든 버튼과 체크박스에 충분한 터치 영역(최소 44px)을 확보해줘.
3. 긴 텍스트가 들어왔을 때 카드가 찌그러지지 않도록 말줄임(truncate) 또는 자연스러운 줄바꿈을 적용해줘.</pre>
</div>

---

### 7. [DB 연동] Supabase 테이블 데이터 실시간 CRUD 연결

- **💡 언제 쓰는가?**: 가짜 임시 목데이터를 실제 Supabase 클라우드 데이터베이스와 연결해 영구 저장시킬 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🗄️ [프롬프트 7] Supabase 실시간 CRUD 연동 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-07').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-07" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">현재 임시 목데이터(mock data)로 표시되고 있는 기능을 Supabase 실제 클라우드 DB와 연동해줘.

1. lib/supabase.ts의 클라이언트를 활용해줘.
2. [조회]: 컴포넌트 마운트 시 '{테이블명}' 테이블에서 최신 데이터를 select해와 화면에 띄워줘.
3. [생성]: 입력 폼에서 제출 시 insert 쿼리를 실행하고 화면 상태(State)에 즉시 반영해줘.
4. [삭제/수정]: 버튼 클릭 시 올바른 id 조건으로 delete/update를 수행해줘.
5. 로딩 중일 때는 깜빡임 없는 스켈레톤 UI를 보여주고, 통신 에러 발생 시 부드러운 안내 메시지를 띄워줘.</pre>
</div>

---

### 8. [배포 사전 점검] Vercel 배포 실패 방지 최종 빌드 검사

- **💡 언제 쓰는가?**: Vercel에 코드를 배포하기 직전, 터미널에서 `npm run build`가 100% 무결점으로 통과하도록 점검할 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🏗️ [프롬프트 8] 배포 전 최종 빌드 무결점 검사 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-08').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-08" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">우리 프로젝트를 Vercel에 정식 배포하기 직전이야.
터미널에서 `npm run build`를 실행했을 때 단 하나의 Type Error나 Warning 없이 100% 한 번에 통과할 수 있도록 전체 프로젝트 코드를 점검하고 완벽히 다듬어줘.</pre>
</div>

---

### 9. [PWA] 스마트폰 홈 화면 설치형 앱 매니페스트 설정

- **💡 언제 쓰는가?**: 앱스토어 등록 없이 내 웹 서비스를 모바일 홈 화면에 앱 아이콘 형태로 설치시키고 싶을 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📲 [프롬프트 9] PWA 웹 앱 매니페스트 자동 설정 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-09').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-09" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">우리 웹 서비스를 사용자들이 스마트폰 홈 화면에 진짜 앱(App)처럼 설치할 수 있도록 PWA(Progressive Web App)를 세팅해줘.
- public/manifest.json 생성 (이름, 아이콘 경로, 테마 색상, display: standalone 설정)
- app/layout.tsx에 필요한 meta 태그 및 아이폰용 apple-touch-icon 링크 삽입</pre>
</div>

---

### 10. [차기 기획 회의] 사용자 피드백을 v2.0 스펙 문서로 전환

- **💡 언제 쓰는가?**: 서비스 론칭 후 모인 실제 사용자 피드백을 우선순위별로 정렬하여 차기 버전 명세서(`SPEC-v2.0.md`)로 도출할 때 사용합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">💡 [프롬프트 10] 사용자 피드백 기반 v2.0 스펙 전환 회의 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-appa-10').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-appa-10" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 우리 팀의 수석 프로덕트 매니저(PM)야.
사용자들로부터 다음과 같은 실제 피드백을 받았어:
[{사용자 피드백 내용}]

기존 @SPEC.md 를 기반으로 가장 시급하고 중요한 개선 과제 2가지를 도출하고, 이를 명세화한 [SPEC-v2.0.md] 초안을 작성해줘.</pre>
</div>

---
