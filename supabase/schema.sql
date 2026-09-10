-- ==============================================================================
-- [루틴메이트 (RoutineMate) 공식 Supabase 스키마]
-- Supabase 대시보드 -> SQL Editor 에서 아래 코드를 복사하여 실행(Run)하세요.
-- ==============================================================================

-- 1. habits (습관 테이블)
CREATE TABLE IF NOT EXISTS habits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  emoji TEXT DEFAULT '✨',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. habit_logs (완료 로그 테이블)
CREATE TABLE IF NOT EXISTS habit_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  habit_id UUID REFERENCES habits(id) ON DELETE CASCADE NOT NULL,
  completed_at DATE DEFAULT CURRENT_DATE NOT NULL
);

-- 3. Row Level Security (RLS) 정책 설정 (초보자 MVP 테스트용 공개 읽기/쓰기 허용)
ALTER TABLE habits ENABLE ROW LEVEL SECURITY;
ALTER TABLE habit_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Enable read/write for all users" ON habits;
CREATE POLICY "Enable read/write for all users" ON habits FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Enable read/write for all users" ON habit_logs;
CREATE POLICY "Enable read/write for all users" ON habit_logs FOR ALL USING (true) WITH CHECK (true);

-- 4. 초기 샘플 데이터 삽입 (선택 사항)
INSERT INTO habits (title, emoji) VALUES 
  ('아침 기상 후 물 한 컵 마시기', '💧'),
  ('가벼운 스트레칭 10분', '🧘'),
  ('자기 전 독서 15분', '📖')
ON CONFLICT DO NOTHING;
