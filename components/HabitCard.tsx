'use client';

import React from 'react';
import { Check, Flame, Trash2 } from 'lucide-react';
import { HabitWithStatus } from '../lib/types';

interface HabitCardProps {
  habit: HabitWithStatus;
  onToggle: (id: string, currentStatus: boolean) => void;
  onDelete: (id: string) => void;
}

export default function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
  const isCompleted = habit.isCompletedToday;

  return (
    <div
      className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 ${
        isCompleted
          ? 'bg-slate-50/80 border-slate-200/80'
          : 'bg-white border-slate-100 hover:border-brand-200 hover:shadow-sm'
      }`}
    >
      {/* 좌측: 체크 버튼 및 제목 */}
      <div className="flex items-center gap-3.5 flex-1 min-w-0">
        {/* 원형 체크 버튼 (모바일 44px 이상 터치 타깃 영역 확보) */}
        <button
          type="button"
          onClick={() => onToggle(habit.id, isCompleted)}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shrink-0 ${
            isCompleted
              ? 'bg-brand-600 text-white shadow-sm'
              : 'border-2 border-slate-200 text-transparent hover:border-brand-400'
          }`}
          aria-label={isCompleted ? '습관 완료 취소' : '습관 완료하기'}
        >
          <Check className={`w-5 h-5 stroke-[3] transition-transform ${isCompleted ? 'scale-100' : 'scale-75 opacity-0'}`} />
        </button>

        {/* 이모지 및 제목 */}
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-2xl shrink-0 select-none">{habit.emoji}</span>
          <div className="min-w-0">
            <h3
              className={`text-base font-semibold truncate transition-all duration-200 ${
                isCompleted ? 'text-slate-400 line-through' : 'text-slate-800'
              }`}
            >
              {habit.title}
            </h3>
            {/* 연속 달성 스트릭 표시 */}
            {habit.streak > 0 && (
              <div className="flex items-center gap-1 text-xs font-medium text-amber-600 mt-0.5">
                <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>{habit.streak}일째 실천 중!</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 우측: 삭제 버튼 (호버 또는 모바일에서 표시) */}
      <button
        type="button"
        onClick={() => {
          if (confirm(`'${habit.title}' 습관을 삭제하시겠습니까?`)) {
            onDelete(habit.id);
          }
        }}
        className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors ml-2 shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100"
        title="습관 삭제"
        aria-label="습관 삭제"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
