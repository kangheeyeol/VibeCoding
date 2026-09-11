# Chapter 22. Cursor MCP 연동: AI에게 DB 열쇠를 쥐여주는 법 (스키마 자동 생성)
## 1. 🎯 [디렉터 브리핑] 이번 챕터 미션
- 데이터베이스 설계(테이블 생성, 데이터 타입, 관계 설정 등)를 외계어 같은 SQL 문법 대신 **Cursor AI에게 자연어로 지시하여 자동 생성**합니다.
- AI가 내 데이터베이스를 직접 읽고 쓸 수 있는 최신 업계 표준 기술인 **MCP(Model Context Protocol)**의 원리를 이해합니다.
- MCP 설정이 어렵거나 부담스러운 입문자를 위해, **Supabase 웹 대시보드에서 1초 만에 표를 만드는 '2-Way 비상 탈출구'**도 완벽히 제공합니다.
---
## 2. 💡 [1분 개념] '전화로 묘사하기' vs 'AI 비서에게 도어락 마스터키 주기'
- **기존 방식**:  
	AI에게 "테이블 만들어줘"라고 물어본 뒤, AI가 써준 SQL 코드를 내가 복사해서 Supabase 사이트에 로그인하고 붙여넣어 실행해야 했습니다. 번거롭고 실수하기 쉽습니다.
- **MCP(Model Context Protocol) 방식**:  
	AI에게 데이터베이스와 직접 대화할 수 있는 안전한 마스터키(MCP 파이프라인)를 쥐여주는 것입니다.  
	내가 *"루틴메이트 습관 테이블 만들어줘"*라고 한마디만 하면, AI가 알아서 내 Supabase에 접속해 표를 만들고 "사장님, 테이블 2개와 관계 설정을 완벽히 끝냈습니다!"라고 보고합니다.
---
## 3. 📋 [AI 지시서 & 스키마 생성 2-Way 가이드]
우리의 루틴메이트에는 2개의 표(Table)가 필요합니다:
1. **`habits`**: 등록한 습관 정보 (습관 이름, 이모지 등)
2. **`habit_logs`**: 언제 습관을 실천했는지 날짜 기록 (습관 ID, 완료 날짜 등)
### 방법 1. Supabase 웹 콘솔에서 1초 만에 만들기 (가장 쉬운 추천 경로)
1. Supabase 웹 대시보드 왼쪽 사이드바에서 **[SQL Editor]** (터미널 모양 아이콘)를 클릭합니다.
2. 초록색 **[+ New query]** 버튼을 누르고, 아래 복사 버튼을 눌러 공식 스키마 SQL 코드를 복사한 뒤 붙여넣습니다:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🗄️ [SQL 스키마] 습관 및 기록 테이블 2종 생성 & RLS 허용 쿼리</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('sql-ch22-schema').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 SQL 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 SQL 복사하기</button>
  </div>
  <pre id="sql-ch22-schema" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">-- 1. 습관 목록 테이블 (habits) 생성
CREATE TABLE habits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  emoji TEXT DEFAULT '✨',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. 습관 완료 기록 테이블 (habit_logs) 생성
CREATE TABLE habit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE NOT NULL,
  completed_at DATE DEFAULT CURRENT_DATE NOT NULL
);

-- 3. 비개발자를 위한 안전한 공개 읽기/쓰기 권한(RLS) 임시 개방
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read/write for all users" ON habits FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable read/write for all users" ON habit_logs FOR ALL USING (true) WITH CHECK (true);</pre>
</div>
1. 오른쪽 하단의 파란색 **[Run]** (또는 `Ctrl + Enter`) 버튼을 누릅니다.  
	화면에 `Success. No rows returned`가 뜨면 모든 DB 구축이 끝났습니다!
---
### 방법 2. Cursor MCP 연동 방식 (프로 디렉터 지향)
Cursor의 `Settings` ➡️ `Features` ➡️ `MCP Servers`에 Supabase MCP를 등록하면, AI 채팅창(`Ctrl + L`)에 아래 프롬프트를 입력하는 것만으로 위 작업이 자동 실행됩니다:

<div style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 12px; padding: 16px 20px; margin: 14px 0 16px 0;">
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;">
    <span style="font-weight: 700; color: #0f172a; font-size: 14px;">🤖 [프롬프트] Supabase MCP 스키마 자동 구축 지시서</span>
    <button onclick="navigator.clipboard.writeText(document.getElementById('prompt-ch22-mcp').innerText); this.innerText='✅ 복사 완료!'; setTimeout(() => this.innerText='📋 프롬프트 복사하기', 2000);" style="background-color: #059669; color: #ffffff; border: none; padding: 7px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; font-size: 13px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">📋 프롬프트 복사하기</button>
  </div>
  <pre id="prompt-ch22-mcp" style="background-color: #0f172a; color: #f8fafc; border-radius: 8px; padding: 16px; font-family: 'JetBrains Mono', Consolas, Monaco, monospace; font-size: 13.5px; line-height: 1.65; white-space: pre-wrap; word-break: break-word; margin: 0;">너는 데이터베이스 엔지니어이자 Supabase MCP 전문가야.
우리 프로젝트 @SPEC.md 의 데이터 모델에 맞춰 Supabase에 다음 2개의 테이블을 생성해줘:

1. habits 테이블:
   - id: uuid (기본키, 자동생성)
   - title: text (필수)
   - emoji: text (기본값 '✨')
   - created_at: timestamptz (기본값 현재시간)

2. habit_logs 테이블:
   - id: uuid (기본키, 자동생성)
   - habit_id: uuid (habits.id 참조 외래키, 삭제시 연쇄삭제)
   - completed_at: date (기본값 오늘날짜)

비개발자 MVP 테스트를 위해 RLS 정책도 모든 사용자 접근 가능(All allowed)으로 함께 활성화해줘.</pre>
</div>
---
## 4. 👀 [검수 기준] 성공 체크리스트
- [ ] Supabase 왼쪽 메뉴의 **[Table Editor]**를 클릭했을 때, 엑셀 시트처럼 `habits`와 `habit_logs`라는 2개의 테이블이 목록에 나타나는가?
- [ ] `habits` 테이블의 컬럼명에 `id`, `title`, `emoji`, `created_at`이 예쁘게 자리 잡고 있는가?
---
## 5. 🚨 [비상 대응] 빨간 글씨(에러)가 떴을 때 응급처치
**Q. Table Editor에 주황색 방패 아이콘과 함께 "RLS not enabled" 또는 "Access Denied" 경고가 뜹니다!**  
- **원인**: Supabase의 보안 정책(Row Level Security)으로 인해 외부에서 데이터를 읽거나 쓸 수 없도록 차단된 상태입니다.
- **해결책**:
	- 위의 3번 실전 가이드에 적힌 SQL 코드 중 **3번(CREATE POLICY...)** 섹션이 제대로 실행되었는지 확인하세요. 해당 쿼리가 실행되면 누구나 자유롭게 습관을 추가하고 조회할 수 있는 테스트 모드가 열립니다.
---
## 6. 🛡️ [세이프티넷] 공식 SQL 스키마 원본
- 🔗 [루틴메이트 공식 GitHub: schema.sql 파일 보러가기](https://github.com/kangheeyeol/VibeCoding/blob/main/supabase/schema.sql)
---
---
