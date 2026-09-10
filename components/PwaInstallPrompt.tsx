'use client';

import React, { useState, useEffect } from 'react';
import { Smartphone, X, Download } from 'lucide-react';

export default function PwaInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto z-40 bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center justify-between border border-slate-800 animate-in slide-in-from-bottom-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center shrink-0">
          <Smartphone className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold">홈 화면에 앱으로 설치</p>
          <p className="text-xs text-slate-400">매일 빠르게 루틴을 체크해 보세요</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={handleInstall}
          className="px-3 py-1.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-xs font-semibold text-white flex items-center gap-1"
        >
          <Download className="w-3.5 h-3.5" />
          설치
        </button>
        <button
          type="button"
          onClick={() => setShowPrompt(false)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
