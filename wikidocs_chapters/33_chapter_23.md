# Chapter 23. "새로고침해도 내 데이터가 살아있다!": 첫 DB 입출력 바이브 코딩
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 지금까지 메모리 상에 가짜 데이터(Mock Data)로만 떠돌던 루틴메이트의 습관들을 **진짜 Supabase 클라우드 데이터베이스와 연결**합니다.
- 새로운 습관을 추가하면 Supabase에 즉시 영구 저장되고, **브라우저를 새로고침하거나 컴퓨터를 껐다 켜도 내 데이터가 100% 온전히 살아있는 감격적인 순간**을 확인합니다.
---
## 2. 💡 [1분 개념] '교실 칠판 낙서' vs '가죽 양장 다이어리'
- **기존 상태 (****`useState`**** 임시 데이터)**:  
	수업 시간 교실 칠판에 분필로 적어둔 것과 같습니다. 수업이 끝나고 지우개로 쓱 지우면(브라우저 새로고침 `F5`) 모든 글씨가 흔적도 없이 사라집니다.
- **Supabase 연동 후 (클라우드 DB)**:  
	평생 찢어지지 않는 최고급 양장 다이어리에 만년필로 기록하는 것과 같습니다. 내가 노트북을 끄든, 스마트폰으로 접속하든 다이어리에 적힌 습관 목록은 영원히 안전하게 보존됩니다.
---
## 3. 📋 [AI 지시서] 복사해서 바로 붙여넣는 마법의 프롬프트

### 🎯 디렉터 가이드: 풀스택 DB 연동 지시법
Cursor 에디터에서 새 대화창(`Ctrl + L`)을 열고, 모델을 **Claude 3.5 Sonnet**으로 선택한 뒤 아래 프롬프트를 전송하세요.  
설명과 프롬프트 본문이 분리되어 있으므로 **[📋 프롬프트 복사하기]** 버튼을 누르면 한 번에 클립보드에 담깁니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [프롬프트] Supabase 클라우드 실시간 DB 연동 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch23-db-sync').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch23-db-sync" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 Next.js 14(App Router)와 Supabase 연동 전문 풀스택 개발자야.
우리 루틴메이트 프로젝트의 습관 데이터를 실제 Supabase 클라우드 DB와 실시간 연동하려 해.

[작업 가이드라인]
1. @.env.local 의 환경변수(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)를 읽어와서 Supabase 클라이언트를 생성하는 lib/supabase.ts 파일을 만들어줘. (@supabase/supabase-js 라이브러리 사용)
2. 현재 @app/page.tsx 및 관련 컴포넌트에서 하드코딩된 mock 데이터를 모두 걷어내줘.
3. [습관 목록 불러오기]: 페이지가 로드될 때 Supabase의 'habits' 테이블에서 전체 습관 목록을 가져오고, 오늘 날짜로 완료된 기록을 'habit_logs'에서 조회해 체크 여부를 표시해줘.
4. [새 습관 추가]: 습관 추가 모달에서 입력 후 저장 버튼을 누르면 Supabase 'habits' 테이블에 새 row를 insert하고 화면에 즉시 반영해줘.
5. [완료 체크/해제 토글]: 습관 카드의 체크박스를 클릭하면:
   - 체크 시: 'habit_logs' 테이블에 { habit_id, completed_at: 오늘날짜 } 데이터를 insert
   - 체크 해제 시: 해당 habit_id와 오늘 날짜에 해당하는 'habit_logs' 데이터를 delete
6. 데이터 통신 중 오류가 발생하면 사용자에게 친절한 토스트 메시지를 띄우고, 로딩 중에는 자연스러운 스켈레톤(Skeleton) UI를 보여줘.</pre>
</div>

```plain text
너는 Next.js 14(App Router)와 Supabase 연동 전문 풀스택 개발자야.
우리 루틴메이트 프로젝트의 습관 데이터를 실제 Supabase 클라우드 DB와 실시간 연동하려 해.

[작업 가이드라인]
1. @.env.local 의 환경변수(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)를 읽어와서 Supabase 클라이언트를 생성하는 lib/supabase.ts 파일을 만들어줘. (@supabase/supabase-js 라이브러리 사용)
2. 현재 @app/page.tsx 및 관련 컴포넌트에서 하드코딩된 mock 데이터를 모두 걷어내줘.
3. [습관 목록 불러오기]: 페이지가 로드될 때 Supabase의 'habits' 테이블에서 전체 습관 목록을 가져오고, 오늘 날짜로 완료된 기록을 'habit_logs'에서 조회해 체크 여부를 표시해줘.
4. [새 습관 추가]: 습관 추가 모달에서 입력 후 저장 버튼을 누르면 Supabase 'habits' 테이블에 새 row를 insert하고 화면에 즉시 반영해줘.
5. [완료 체크/해제 토글]: 습관 카드의 체크박스를 클릭하면:
   - 체크 시: 'habit_logs' 테이블에 { habit_id, completed_at: 오늘날짜 } 데이터를 insert
   - 체크 해제 시: 해당 habit_id와 오늘 날짜에 해당하는 'habit_logs' 데이터를 delete
6. 데이터 통신 중 오류가 발생하면 사용자에게 친절한 토스트 메시지를 띄우고, 로딩 중에는 자연스러운 스켈레톤(Skeleton) UI를 보여줘.
```
프롬프트 입력 후 AI가 코드를 작성하기 시작하면, 변경 사항을 검토하고 우측의 **[Accept]** (또는 `Ctrl + Enter`)를 눌러 적용합니다.
---
## 4. 👀 [검수 기준] 성공 체크리스트 (3대 영구 보존 테스트)
- [ ] **테스트 1 (데이터 등록)**: 브라우저(`localhost:3000`)에서 `+ 새 습관 추가` 버튼을 눌러 "매일 영양제 먹기 💊"를 등록했을 때 카드가 정상적으로 생기는가?
- [ ] **테스트 2 (새로고침 생존)**: 키보드의 **`F5`****(새로고침)**를 5번 연달아 눌러도 방금 등록한 영양제 습관이 사라지지 않고 그대로 유지되는가?
- [ ] **테스트 3 (클라우드 직관)**: Supabase 웹 사이트의 **[Table Editor] ➡️ ****`habits`**** 테이블**을 열었을 때, 내가 방금 입력한 "매일 영양제 먹기"가 실시간으로 한 줄 추가되어 있는가?
---
## 5. 🚨 [비상 대응] 빨간 글씨(에러)가 떴을 때 응급처치
**Q. 새 습관을 추가하려고 하니 콘솔에 ****`TypeError: Failed to fetch`**** 또는 ****`Module not found: Can't resolve '@supabase/supabase-js'`**** 에러가 뜹니다!**  
- **원인**: 프로젝트에 Supabase와 통신하기 위한 공식 통역사 도구 패키지(`@supabase/supabase-js`)가 설치되지 않은 경우입니다.
- **해결책**:
	1. 하단 터미널(`Ctrl + ~`)을 엽니다.
	2. 아래 복사 버튼을 눌러 패키지 설치 명령어를 복사한 뒤, 터미널에 붙여넣고 엔터를 칩니다:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">📦 [터미널 명령어] Supabase 공식 SDK 클라이언트 패키지 설치</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch23-npminstall').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch23-npminstall" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">npm install @supabase/supabase-js</pre>
</div>

```bash
npm install @supabase/supabase-js
```
	3. 설치가 완료된 후 다시 브라우저를 새로고침하면 거짓말처럼 정상 동작합니다!
---
## 6. 🛡️ [세이프티넷] 이번 챕터 공식 완성본 링크
- 🔗 [GitHub Snapshot: Part 7 완료 시점 전체 소스코드 보러가기](https://github.com/kangheeyeol/VibeCoding/tree/snapshot-part-07)  
- 코드가 꼬였다면 아래 복사 버튼을 눌러 구원투수 명령어를 터미널에 붙여넣고 1초 만에 복구하세요:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [비상 복구 명령어] Part 7 Supabase 연동 완성본 스냅샷 롤백</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('cmd-ch23-snapshot').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 명령어 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 명령어 복사하기</button>
  </div>
  <pre id="cmd-ch23-snapshot" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">git fetch origin && git reset --hard origin/snapshot-part-07</pre>
</div>

```bash
git fetch origin && git reset --hard origin/snapshot-part-07
```
