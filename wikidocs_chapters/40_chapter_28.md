# Chapter 28. 내 컴퓨터를 벗어나 세상으로: Vercel 원클릭 무료 배포
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 전 세계 수백만 개발자와 테크 기업들이 사용하는 글로벌 클라우드 호스팅 플랫폼인 **Vercel(버셀)**을 통해 내 앱을 전 세계에 무료로 배포합니다.
- 복잡한 리눅스 서버 설정 없이, **내 GitHub 저장소를 클릭 한 번으로 연결하여 1분 만에 고유한 인터넷 주소(****`https://내앱이름.vercel.app`****)를 획득**합니다.
---
## 2. 💡 [1분 개념] '방구석 모니터' vs '광화문 전광판'
- **`localhost:3000`**** (방구석 모니터)**:  
	오직 내 노트북 화면에서만 보입니다. 친구에게 자랑하고 싶어도 내 컴퓨터를 들고 가서 보여주지 않는 한 볼 수 없습니다.
- **Vercel 무료 배포 (광화문 전광판)**:  
	전 세계 어디서든 누구나 접속할 수 있는 공개 URL 주소가 발급됩니다.  
	엄마, 친구, 팀원들에게 카카오톡으로 링크 하나만 툭 던져주면 그 즉시 상대방의 스마트폰에서 내 루틴메이트가 실시간으로 작동합니다!
---
## 3. 📋 [실전 가이드] 3분 만에 Vercel로 세상에 배포하기
### Step 1. Vercel 회원가입 및 GitHub 연동
1. 웹 브라우저에서 [Vercel 공식 홈페이지(vercel.com)](https://vercel.com)에 접속합니다.
2. 우측 상단의 **[Sign Up]**을 누르고, **[Continue with GitHub]**을 클릭하여 간편 가입합니다.
### Step 2. 내 저장소 가져오기 (Import)
1. Vercel 메인 대시보드에서 파란색 **[Add New...] ➡️ [Project]**를 클릭합니다.
2. 목록에서 우리가 지금까지 커밋해 온 **`routinemate`** 저장소를 찾고 오른쪽의 **[Import]** 버튼을 누릅니다.
### Step 3. 가장 중요한 단계: 환경변수(Environment Variables) 등록!
Vercel 클라우드 서버도 Supabase DB에 접속할 수 있도록 비밀 열쇠를 알려주어야 합니다.
1. 화면 중간의 **`Environment Variables`** 아코디언 메뉴를 클릭하여 펼칩니다.
2. Part 7에서 `.env.local`에 적어두었던 두 가지 키를 그대로 추가합니다:
	- **Key**: `NEXT_PUBLIC_SUPABASE_URL` ➡️ **Value**: `내 Supabase URL 값` 입력 후 [Add] 클릭
	- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` ➡️ **Value**: `내 anon 키 값` 입력 후 [Add] 클릭
```javascript
[Vercel 환경변수 입력 예시]
NAME                             VALUE
NEXT_PUBLIC_SUPABASE_URL         https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY    eyJhbGciOiJIUzI1NiIsIn...
```
### Step 4. 배포 버튼 누르고 축하 파티 즐기기!
- 하단의 검은색 **[Deploy]** 버튼을 힘차게 클릭합니다!
- 약 40초~1분 동안 Vercel이 코드를 빌드하고 전 세계 CDN 서버로 복사합니다.
- 화면 가득 화려한 **폭죽 애니메이션(🎉 Congratulations!)**과 함께 실시간 사이트 썸네일이 나타납니다!
- 썸네일 아래에 적힌 파란색 URL(예: `https://routinemate.vercel.app`)을 클릭해 보세요.

> 💡 **원클릭 배포 치트키**: 아래 버튼을 누르면 위 과정이 한 번에 자동 진행됩니다:  
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkangheeyeol%2FVibeCoding&project-name=routinemate)
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] Vercel 대시보드에 초록색 `Ready` 상태 표시와 함께 공식 도메인 링크가 생성되었는가?
- [ ] 내 스마트폰의 사파리(Safari)나 크롬 브라우저에 해당 URL을 입력했을 때 루틴메이트가 정상 접속되는가?
- [ ] 스마트폰에서 새 습관을 등록하고 체크했을 때, PC 브라우저에서도 똑같이 실시간 동기화되는가?
---
## 5. 🚨 [비상 대응] 배포 중 빨간색 'Build Failed' 에러가 떴을 때
- **원인 99%**: Vercel의 Environment Variables에 Supabase URL이나 Key 값을 빼먹었거나 오타가 난 경우입니다.
- **해결책**:
	1. Vercel 프로젝트 대시보드 상단의 **[Settings] ➡️ [Environment Variables]**로 이동합니다.
	2. 키 이름(`NEXT_PUBLIC_...`)에 오타가 없는지, 따옴표(`"`)가 섞여 들어가지 않았는지 확인하고 올바르게 수정한 뒤 [Save]를 누릅니다.
	3. 상단 **[Deployments]** 탭으로 가서 최신 커밋 우측의 `...` 메뉴를 누르고 **[Redeploy]**를 클릭하세요.
---
## 6. 🛡️ [세이프티넷] 공식 라이브 데모 사이트
- 🔗 [루틴메이트 공식 Vercel 배포 데모 체험하기](https://routinemate-starter.vercel.app)
---
---
