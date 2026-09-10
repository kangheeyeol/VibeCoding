# [SPEC.md] 스마트 습관/루틴 트래커 「루틴메이트 (RoutineMate)」

## 1. 프로젝트 개요 (Overview)
- **서비스명**: 루틴메이트 (RoutineMate)
- **슬로건**: "작은 습관이 모여 완벽한 하루를 만듭니다"
- **목적**: 바이브 코딩으로 10분 만에 완성하여 배포 가능한 모바일 퍼스트 일일 습관 트래커 MVP
- **핵심 가치**: 군더더기 없는 미니멀 UI, 1초 만에 체크하는 즉각적 피드백, 100% 달성 시 축하 폭죽 애니메이션

---

## 2. 핵심 기능 요구사항 (Features)

### F-01. 오늘 날짜 및 전체 달성도 대시보드 (`ProgressHeader`)
- 오늘 날짜(예: 2026년 9월 10일 목요일)와 요일 자동 표시
- 오늘 등록된 습관 수 대비 완료된 습관 비율을 프로그레스 바로 시각화 (0% ~ 100%)
- 달성률에 따른 응원 메시지 (0%: "오늘도 힘차게 시작해봐요!", 50%: "절반이나 해냈어요!", 100%: "오늘의 루틴을 모두 완수했어요! 🎉")

### F-02. 습관 목록 및 완료 체크박스 (`HabitCard`)
- 각 습관별 대표 이모지(예: 💧, 📖, 🏃‍♂️), 제목, 연속 달성 일수(Streak) 표시
- 체크박스 클릭 시 부드러운 체크 애니메이션과 함께 취소선 및 옅은 배경 처리
- 완료 상태 토글(체크 / 해제) 지원

### F-03. 신규 습관 추가 모달 (`AddHabitModal`)
- `+ 새 습관 추가` 플로팅 또는 상단 버튼 클릭 시 팝업
- 간편 추천 이모지 탭 선택 지원 (💧, 🏃‍♂️, 📖, 🧘, 💊, 🥗, 💤, ✨)
- 습관 제목 입력 필드 및 유효성 검사 (공백 입력 방지)

### F-04. 100% 달성 축하 폭죽 팝업 (`ConfettiModal`)
- 모든 등록된 습관을 체크하여 달성률이 100%가 되는 순간 화면 전체에 화려한 컨페티(Confetti) 폭죽 발사
- 축하 팝업 모달 노출

---

## 3. 데이터베이스 스키마 (Supabase)

```sql
-- 1. habits (습관 기본 정보)
create table habits (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  emoji text default '✨',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. habit_logs (일별 습관 완료 기록)
create table habit_logs (
  id uuid default gen_random_uuid() primary key,
  habit_id uuid references habits(id) on delete cascade not null,
  completed_at date default current_date not null
);
```

---

## 4. UI/UX 디자인 원칙
- **모바일 퍼스트**: 가로 375px~420px 화면에서 완벽하게 핏되는 카드 레이아웃
- **포인트 컬러**: 브랜드 인디고 (`#6366F1`) 및 차분한 슬레이트 그레이
- **터치 영역**: 모바일 사용성을 위해 모든 버튼/체크박스는 최소 44px x 44px 터치 패딩 보장
