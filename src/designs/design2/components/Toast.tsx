'use client';

import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within a ToastProvider');
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const addToast = useCallback((message: string, type: ToastType = 'info', duration = 5000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, duration }]);
  }, []);
  const removeToast = useCallback((id: string) => { setToasts((prev) => prev.filter((t) => t.id !== id)); }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer: React.FC<{ toasts: Toast[]; removeToast: (id: string) => void }> = ({ toasts, removeToast }) => (
  <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3 max-w-sm w-full">
    {toasts.map((toast) => <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />)}
  </div>
);

const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => setIsVisible(true), 10);
    const dismissTimeout = setTimeout(() => { setIsLeaving(true); setTimeout(onClose, 300); }, toast.duration || 5000);
    return () => { clearTimeout(showTimeout); clearTimeout(dismissTimeout); };
  }, [toast.duration, onClose]);

  const colors: Record<ToastType, string> = { success: 'bg-green-500', error: 'bg-red-500', warning: 'bg-yellow-500', info: 'bg-modern-blue-500' };
  const borderColors: Record<ToastType, string> = { success: 'border-l-green-500', error: 'border-l-red-500', warning: 'border-l-yellow-500', info: 'border-l-modern-blue-500' };

  return (
    <div className={`bg-white rounded-lg shadow-2xl border-l-4 ${borderColors[toast.type]} p-4 flex items-start space-x-3 transform transition-all duration-300 ${isVisible && !isLeaving ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className={`flex-shrink-0 w-10 h-10 ${colors[toast.type]} rounded-full flex items-center justify-center text-white`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {toast.type === 'success' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />}
          {toast.type === 'error' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />}
          {toast.type === 'warning' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />}
          {toast.type === 'info' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
        </svg>
      </div>
      <div className="flex-grow"><p className="text-modern-navy-900 font-openSans font-medium">{toast.message}</p></div>
      <button onClick={() => { setIsLeaving(true); setTimeout(onClose, 300); }} className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};

export const StandaloneToast: React.FC<{ message: string; type?: ToastType; isVisible: boolean; onClose: () => void }> = ({ message, type = 'info', isVisible, onClose }) => {
  if (!isVisible) return null;
  const colors: Record<ToastType, string> = { success: 'bg-green-500', error: 'bg-red-500', warning: 'bg-yellow-500', info: 'bg-modern-blue-500' };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl p-4 flex items-start space-x-3 animate-slideIn max-w-sm">
        <div className={`flex-shrink-0 w-10 h-10 ${colors[type]} rounded-full flex items-center justify-center text-white`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {type === 'success' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />}
            {type === 'info' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
          </svg>
        </div>
        <div className="flex-grow"><p className="text-modern-navy-900 font-openSans font-medium">{message}</p></div>
        <button onClick={onClose} className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
};
