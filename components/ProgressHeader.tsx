'use client';

import React from 'react';
import { Calendar, CheckCircle2, Sparkles, Cloud, HardDrive } from 'lucide-react';

interface ProgressHeaderProps {
  completedCount: number;
  totalCount: number;
  isCloud: boolean;
}

export default function ProgressHeader({ completedCount, totalCount, isCloud }: ProgressHeaderProps) {
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // 오늘 날짜 포맷 (한국어)
  const todayText = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  }).format(new Date());

  // 격려 메시지
  const getMotivationalMessage = () => {
    if (totalCount === 0) return '등록된 습관이 없어요. 첫 습관을 만들어볼까요?';
    if (percentage === 0) return '오늘도 활기차게 시작해 봐요! 🔥';
    if (percentage < 50) return '좋은 출발이에요! 한 걸음씩 나아가요. 🏃';
    if (percentage < 100) return '거의 다 왔어요! 조금만 더 힘내요! 💪';
    return '축하해요! 오늘의 모든 루틴을 완수했어요! 🎉';
  };

  return (
    <header className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-6 transition-all">
      {/* 상단 날짜 및 스토리지 뱃지 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
          <Calendar className="w-4 h-4 text-brand-600" />
          <span>{todayText}</span>
        </div>

        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
            isCloud
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-amber-50 text-amber-700 border border-amber-200'
          }`}
          title={isCloud ? 'Supabase 클라우드 DB 연동됨' : '로컬 스토리지 모드로 작동 중'}
        >
          {isCloud ? <Cloud className="w-3.5 h-3.5" /> : <HardDrive className="w-3.5 h-3.5" />}
          <span>{isCloud ? 'Cloud DB' : 'Local Mode'}</span>
        </div>
      </div>

      {/* 헤드라인 타이틀 */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">오늘의 루틴</h1>
          <p className="text-sm text-slate-500 mt-0.5">{getMotivationalMessage()}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-brand-600">{percentage}%</span>
          <span className="block text-xs font-medium text-slate-400">
            {completedCount} / {totalCount} 완료
          </span>
        </div>
      </div>

      {/* 진행률 게이지 바 */}
      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-brand-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </header>
  );
}
