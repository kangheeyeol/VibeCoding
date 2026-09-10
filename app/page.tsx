'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Plus } from 'lucide-react';
import ProgressHeader from '../components/ProgressHeader';
import HabitCard from '../components/HabitCard';
import AddHabitModal from '../components/AddHabitModal';
import ConfettiModal from '../components/ConfettiModal';
import PwaInstallPrompt from '../components/PwaInstallPrompt';
import { HabitWithStatus } from '../lib/types';
import { fetchHabitsWithStatus, createHabit, toggleHabitCompletion, deleteHabit } from '../lib/storage';

export default function RoutineMatePage() {
  const [habits, setHabits] = useState<HabitWithStatus[]>([]);
  const [isCloud, setIsCloud] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isConfettiOpen, setIsConfettiOpen] = useState(false);

  // 습관 목록 불러오기
  const loadHabits = useCallback(async () => {
    try {
      const data = await fetchHabitsWithStatus();
      setHabits(data.habits);
      setIsCloud(data.isCloud);
    } catch (err) {
      console.error('Failed to load habits:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHabits();
  }, [loadHabits]);

  // 습관 완료 토글
  const handleToggle = async (id: string, currentStatus: boolean) => {
    const nextStatus = !currentStatus;

    // 즉각적인 반응을 위한 Optimistic UI 업데이트
    setHabits(prev =>
      prev.map(h => {
        if (h.id === id) {
          const streakDiff = nextStatus ? 1 : -1;
          return { ...h, isCompletedToday: nextStatus, streak: Math.max(0, h.streak + streakDiff) };
        }
        return h;
      })
    );

    await toggleHabitCompletion(id, nextStatus);

    // 100% 달성 시 축하 폭죽 팝업
    const updatedCompleted = habits.filter(h => (h.id === id ? nextStatus : h.isCompletedToday)).length;
    if (nextStatus && updatedCompleted === habits.length && habits.length > 0) {
      setIsConfettiOpen(true);
    }
  };

  // 신규 습관 등록
  const handleAddHabit = async (title: string, emoji: string) => {
    await createHabit(title, emoji);
    await loadHabits();
  };

  // 습관 삭제
  const handleDelete = async (id: string) => {
    await deleteHabit(id);
    await loadHabits();
  };

  const completedCount = habits.filter(h => h.isCompletedToday).length;

  return (
    <main className="max-w-md mx-auto min-h-screen px-4 py-8 flex flex-col justify-between overflow-x-hidden">
      <div className="flex-1">
        {/* 상단 대시보드 헤더 */}
        <ProgressHeader completedCount={completedCount} totalCount={habits.length} isCloud={isCloud} />

        {/* 습관 목록 섹션 */}
        <section className="space-y-2.5">
          {isLoading ? (
            <div className="space-y-3 pt-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-16 bg-white/70 rounded-2xl animate-pulse border border-slate-100" />
              ))}
            </div>
          ) : habits.length === 0 ? (
            <div className="text-center py-16 px-4 bg-white/60 rounded-3xl border border-dashed border-slate-200">
              <span className="text-4xl block mb-2">🌱</span>
              <p className="text-sm font-semibold text-slate-700">등록된 습관이 없습니다</p>
              <p className="text-xs text-slate-400 mt-1">아래 버튼을 눌러 첫 번째 습관을 만들어보세요!</p>
            </div>
          ) : (
            habits.map(habit => (
              <HabitCard key={habit.id} habit={habit} onToggle={handleToggle} onDelete={handleDelete} />
            ))
          )}
        </section>
      </div>

      {/* 하단 플로팅 추가 버튼 (모바일 44px 이상 영역 확보) */}
      <div className="sticky bottom-6 pt-6 mt-8">
        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="w-full py-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
        >
          <Plus className="w-5 h-5 stroke-[2.5]" />
          <span>새 습관 추가하기</span>
        </button>
      </div>

      {/* 모달 팝업 컴포넌트들 */}
      <AddHabitModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddHabit} />
      <ConfettiModal isOpen={isConfettiOpen} onClose={() => setIsConfettiOpen(false)} />
      <PwaInstallPrompt />
    </main>
  );
}
