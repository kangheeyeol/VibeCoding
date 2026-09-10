'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Sparkles, X } from 'lucide-react';

interface ConfettiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfettiModal({ isOpen, onClose }: ConfettiModalProps) {
  useEffect(() => {
    if (isOpen) {
      // 100% 달성 시 화려한 폭죽 발사!
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366F1', '#10B981', '#F59E0B', '#EC4899'],
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6366F1', '#10B981', '#F59E0B', '#EC4899'],
        });

        if (Date.now() < animationEnd) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-200">
      <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl border border-slate-100 text-center relative overflow-hidden">
        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 트로피 그래픽 */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 mb-4 shadow-sm">
          <Trophy className="w-10 h-10" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>오늘의 미션 100% 달성!</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-2">대단해요! 올 클리어!</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          오늘 계획했던 모든 루틴을 완수하셨습니다.<br />
          꾸준함이 쌓여 위대한 성장이 될 거예요.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md transition-all"
        >
          뿌듯한 마음으로 닫기 🎉
        </button>
      </div>
    </div>
  );
}
