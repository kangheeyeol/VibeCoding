'use client';

import React, { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';

interface AddHabitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (title: string, emoji: string) => Promise<void>;
}

const EMOJI_PRESETS = ['💧', '🏃‍♂️', '📖', '🧘', '💊', '🥗', '💤', '✍️', '🍎', '✨'];

export default function AddHabitModal({ isOpen, onClose, onAdd }: AddHabitModalProps) {
  const [title, setTitle] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💧');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setIsSubmitting(true);
      await onAdd(title.trim(), selectedEmoji);
      setTitle('');
      setSelectedEmoji('💧');
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* 모달 헤더 */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">새로운 습관 만들기</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 입력 폼 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이모지 선택기 */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-2">대표 이모지</label>
            <div className="flex flex-wrap gap-2">
              {EMOJI_PRESETS.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() => setSelectedEmoji(emoji)}
                  className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${
                    selectedEmoji === emoji
                      ? 'bg-brand-50 border-2 border-brand-600 scale-105'
                      : 'bg-slate-50 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          {/* 습관 이름 입력 */}
          <div>
            <label htmlFor="habit-title" className="block text-xs font-semibold text-slate-600 mb-2">
              어떤 습관을 만들고 싶으신가요?
            </label>
            <input
              id="habit-title"
              type="text"
              required
              placeholder="예) 아침 물 한 컵, 스트레칭 10분"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-slate-800 placeholder-slate-400 text-sm font-medium"
              autoFocus
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !title.trim()}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white shadow-sm disabled:opacity-50 transition-all flex items-center gap-1.5"
            >
              {isSubmitting ? (
                '추가 중...'
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>습관 등록</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
