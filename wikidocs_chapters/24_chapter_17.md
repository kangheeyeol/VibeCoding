# Chapter 17. 정기 대청소 프로토콜: 새 기능 추가를 멈추고 코드 정리(리팩토링) 시키는 법
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 기능 개발에만 매달리다 프로젝트가 폭발하는 것을 방지하기 위해, 정기적으로 거쳐야 하는 **'AI 대청소(Refactoring) 프로토콜'**을 배웁니다.
- 안 쓰는 쓰레기 코드(Dead Code)를 청소하고, 중복을 제거하여 프로젝트를 가볍고 단단하게 만듭니다.
---
## 2. 💡 [1분 개념] '고속도로 아스팔트 재포장'
차들이 고속도로를 매일 쌩쌩 달리다 보면 아스팔트가 파이고 균열이 생깁니다.  
차(새로운 기능)만 계속 달리게 방치하면 결국 대형 연쇄 추돌 사고가 납니다.
가끔은 야간에 차선 통제를 하고 **아스팔트를 매끄럽게 재포장(리팩토링)**해야 합니다.  
겉보기엔 도로 모양이 똑같지만, 차들이 훨씬 더 안전하고 빠르게 달릴 수 있는 상태가 됩니다.  
리팩토링이란 **"겉으로 보이는 기능 동작은 그대로 유지하면서, 내부 코드의 구조와 품질을 깨끗하게 청소하는 작업"**입니다.
---
## 3. 언제 대청소를 해야 할까요? (청소 주기)
- ⏱️ **기능 3개 추가 후 1회**: 새로운 기능(F-01, F-02, F-03)을 세 번 붙이고 나면 무조건 청소 타임을 갖습니다.
- ⏱️ **새로운 파트로 넘어가기 전**: Part 6(Git)이나 Part 7(DB 연동)으로 넘어가기 전, 이전 코드를 단단하게 청소해 둡니다.
---
## 4. 📋 [치트키] AI에게 시키는 정기 대청소 3단계 프롬프트

### 🎯 디렉터 가이드: 새 창에서 대청소 지시하는 법
새로운 기능을 3개 정도 추가했거나 다음 파트로 넘어가기 전, Cursor에서 새 대화창(`Ctrl + L`)을 열고 아래 프롬프트를 전송하세요.  
상단의 **[📋 프롬프트 복사하기]** 버튼을 클릭하면 전체 템플릿이 한 번에 복사됩니다.

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🧹 [프롬프트] 클린 코드 및 리팩토링 정기 대청소 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch17-cleanup').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch17-cleanup" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 꼼꼼한 시니어 코드 리뷰어이자 클린 코드(Clean Code) 전문가야.
우리 프로젝트의 정기 대청소(리팩토링)를 진행하려고 해.
새로운 기능을 추가하지 말고, 오직 코드의 품질과 청결도만 개선해줘.

[대청소 3대 체크리스트]
1. [쓰레기 코드 제거]: 현재 프로젝트에서 쓰이지 않는 불필요한 import문, 안 쓰는 변수, 테스트용 console.log를 모두 찾아 지워줘.
2. [중복 제거]: 여러 곳에서 반복되는 스타일 코드나 로직을 하나의 깔끔한 공통 함수로 묶어줘.
3. [가독성 주석]: 비개발자인 내가 코드를 쉽게 이해할 수 있도록, 핵심 로직마다 친절한 한글 주석을 달아줘.

작업을 완료한 후, 어떤 파일들이 어떻게 다이어트되었는지 변경 사항을 3줄로 요약해줘.</pre>
</div>

```plain text
너는 꼼꼼한 시니어 코드 리뷰어이자 클린 코드(Clean Code) 전문가야.
우리 프로젝트의 정기 대청소(리팩토링)를 진행하려고 해.
새로운 기능을 추가하지 말고, 오직 코드의 품질과 청결도만 개선해줘.

[대청소 3대 체크리스트]
1. [쓰레기 코드 제거]: 현재 프로젝트에서 쓰이지 않는 불필요한 import문, 안 쓰는 변수, 테스트용 console.log를 모두 찾아 지워줘.
2. [중복 제거]: 여러 곳에서 반복되는 스타일 코드나 로직을 하나의 깔끔한 공통 함수로 묶어줘.
3. [가독성 주석]: 비개발자인 내가 코드를 쉽게 이해할 수 있도록, 핵심 로직마다 친절한 한글 주석을 달아줘.

작업을 완료한 후, 어떤 파일들이 어떻게 다이어트되었는지 변경 사항을 3줄로 요약해줘.
```
---
## 5. 👀 [검수 기준] 리팩토링 성공의 척도: '무변화의 미학'
- 리팩토링이 완벽하게 끝났다는 증거는 역설적이게도 **"화면에서는 아무런 변화도 느껴지지 않는 것"**입니다.
- 브라우저에서 루틴메이트를 켜고 체크박스를 눌렀을 때, 이전과 똑같이 부드럽고 완벽하게 동작하면서 코드 파일 용량만 가벼워졌다면 대청소 성공입니다!
---
## 6. 🛡️ [세이프티넷] 공식 템플릿
- 🔗 [루틴메이트 공식 GitHub 저장소: 클린 컴포넌트 폴더 구조 둘러보기](https://github.com/kangheeyeol/VibeCoding/tree/main/components)
