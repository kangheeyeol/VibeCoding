# Chapter 27. 기획부터 배포까지: 루틴메이트 MVP 종합 완성
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 지금까지 만든 모든 조각(기획안, UI 디자인, DB 연동, 반응형 스타일)을 하나로 조립하여 **배포 직전의 무결점 최종 MVP(Minimum Viable Product)**를 완성합니다.
- 배포 플랫폼에 올렸을 때 어이없는 에러로 실패하지 않도록, 터미널에서 **사전 빌드 테스트(****`npm run build`****)**를 수행하고 잠재적 버그를 사전 박멸합니다.
---
## 2. 💡 [1분 개념] 신차 출고 직전의 'PDI(Pre-Delivery Inspection) 최종 검사'
공장에서 엔진(Supabase DB), 차체 프레임(Tailwind CSS), 운전석 계기판(Next.js)을 다 조립했다고 해서 차를 바로 도로에 내보내지 않습니다.  
테스트 트랙을 돌려보며 나사 하나 헐거운 곳이 없는지, 브레이크 센서 경고등이 켜지지 않는지 최종 점검(PDI)을 거칩니다.
우리가 터미널에 입력할 `npm run build` 명령어가 바로 이 PDI 최종 검사입니다.  
컴퓨터가 모든 코드를 실제 배포용 압축 파일로 변환해보며 오타나 타입 충돌이 없는지 완벽하게 검증해 줍니다.
---
## 3. 📋 [AI 지시서 & 빌드 검사 프로토콜]
### Step 1. AI에게 최종 배포 품질 검수(QA) 시키기
Cursor 에디터에서 새 대화창(`Ctrl + L`)을 열고 아래 프롬프트를 실행하여 코드에 숨은 먼지와 타입 에러를 털어냅니다:
```plain text
너는 Next.js 배포 전 품질 보증(QA) 수석 엔지니어이자 빌드 마스터야.
우리 루틴메이트 프로젝트를 Vercel에 정식 배포하기 직전의 최종 정리 작업을 진행하려 해.

[최종 품질 점검 체크리스트]
1. [불필요한 코드 제거]: 쓰이지 않는 import 문, 개발용 console.log, 임시 주석들을 모두 찾아 깔끔하게 삭제해줘.
2. [TypeScript 무결성 검증]: any 타입 남발이나 누락된 타입 정의가 없는지 전수 점검하고 올바른 인터페이스(Habit, HabitLog)를 부여해줘.
3. [빌드 적합성 보장]: `npm run build`를 실행했을 때 단 하나의 Warning이나 Type Error 없이 100% 한 번에 통과할 수 있도록 전체 코드를 완벽하게 보정해줘.
```
### Step 2. 내 컴퓨터에서 직접 최종 빌드 테스트하기
AI가 수정한 코드를 모두 반영(`Accept All`)한 뒤, 하단 터미널(`Ctrl + ~`)에 다음 명령어를 입력하고 엔터를 칩니다:
```bash
npm run build
```
화면에 몇 줄의 체크 과정이 지나간 뒤 다음과 같은 초록색 문구가 뜨면 합격입니다:
```bash
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization
```
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] 터미널에 빨간색 `Failed to compile` 에러 없이 `Compiled successfully`가 찍히는가?
- [ ] 소스 제어 창(`Ctrl + Shift + G`)에서 변경 사항을 모두 커밋(`feat: complete final MVP pre-build check`)하고 GitHub에 Push(Sync)했는가?
---
## 5. 🚨 [비상 대응] `npm run build` 중 빨간 에러가 떴을 때
- **원인**: 개발 모드(`npm run dev`)에서는 너그럽게 넘어가 주던 자잘한 오타나 타입 불일치(Type Mismatch)를 빌드 엔진이 엄격하게 잡아낸 것입니다.
- **해결책**:
	1. 터미널의 빨간 에러 문구를 그대로 복사합니다.
	2. Cursor AI 채팅창에 다음과 같이 입력하세요:  
		`"방금 npm run build 중 다음 에러가 발생했어. 원인을 분석하고 빌드가 정상 통과되도록 즉시 패치해줘: [복사한 에러 붙여넣기]"`
---
## 6. 🛡️ [세이프티넷] 완성본 최종 스냅샷
- 🔗 [GitHub Snapshot: 배포 직전 최종 완성 소스코드](https://github.com/kangheeyeol/VibeCoding/tree/snapshot-part-09)
---
---
