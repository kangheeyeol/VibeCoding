# Chapter 13. 필요한 파일만 콕 집어 전달하기 (`@` 멘션 및 컨텍스트 다이어트 기술)
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 프로젝트 전체 폴더를 무식하게 다 읽혀서 AI를 둔하게 만들고 토큰을 낭비하는 실수를 방지합니다.
- Cursor의 핵심 치트키인 **`@`**** 멘션 기능**을 활용해 필요한 서류만 포스트잇 붙여 전달하는 기술을 마스터합니다.
---
## 2. 💡 [1분 개념] '서류 100박스 던지기' vs '해당 서류 1장만 건네기'
변호사에게 계약서의 3번째 조항 하나를 검토해달라고 부탁하면서, 회사 창고에 있는 **지난 10년 치 회계 서류 100박스를 통째로 갖다 주면** 어떻게 될까요?  
변호사는 서류를 뒤적거리느라 며칠이 걸리고, 자문료(비용)도 수백만 원이 청구될 것입니다.
AI에게 질문할 때도 똑같습니다.  
그냥 질문하면 AI는 프로젝트의 수십 개 파일을 혼자 다 훑어보느라 속도도 느려지고 엉뚱한 파일을 건드립니다.  
**"지금 수정할 그 파일 딱 1개"**만 콕 집어줘야 합니다.
---
## 3. Cursor의 마법 기호: `@` 멘션 4대 활용법
채팅창에서 `@` 글자를 치면 마법 같은 메뉴가 펼쳐집니다.

| 기호 | 기능 및 역할 | 실전 활용 예시 |
| --- | --- | --- |
| **`@Files`** | 특정 파일 딱 하나만 AI에게 건네주기 (가장 추천!) | `@RoutineCard.tsx` 체크박스 아이콘 크기를 좀 더 크게 키워줘. |
| **`@Folders`** | 특정 컴포넌트 폴더 전체를 참고시키기 | `@components/` 폴더의 디자인 톤을 참고해서 새 모달을 만들어줘. |
| **`@Code`** | 파일 전체가 아니라 특정 함수 블록만 지정하기 | `@calculateStreak` 스트릭 계산 로직에 버그가 없는지 검토해줘. |
| **`@Web`** | 최신 라이브러리 공식 문서를 인터넷에서 실시간 검색시키기 | `@Web` 최신 Supabase Auth 가입 방법 공식 문서를 찾아서 적용해줘. |

---
## 4. 📋 [실전 패턴] 컨텍스트 다이어트 프롬프트 템플릿

### 🎯 디렉터 가이드: 파일 1개만 콕 집어 지시하는 법
Cursor 채팅창(`Ctrl + L`)에서 `@`를 치고 해당 파일명을 선택한 뒤, 아래와 같이 질문을 던지세요.  
AI가 프로젝트 전체를 훑지 않고 지정된 파일에만 100% 집중하여 1초 만에 군더더기 없는 완벽한 코드를 완성합니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">⚡ [프롬프트] 단일 파일 타깃팅 컨텍스트 다이어트</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch13-diet').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch13-diet" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">@RoutineCard.tsx 파일 확인해줘.
현재 체크박스를 누를 때 색깔이 즉시 변하는데, 
Tailwind의 transition-colors duration-200을 적용해서 
초록색으로 부드럽게 물들듯이 바뀌도록 효과를 추가해줘.</pre>
</div>

> 💡 **효과**: 불필요한 전체 파일 탐색을 방지하여 응답 속도가 3배 빨라지고, 소모되는 AI 토큰 비용을 90% 이상 획기적으로 아낄 수 있습니다.
---
