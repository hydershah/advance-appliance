'use client';

import React, { useState, useRef, useEffect } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface ServiceFilterTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const ServiceFilterTabs: React.FC<ServiceFilterTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElement = tabsRef.current[activeIndex];
    if (activeTabElement) {
      setIndicatorStyle({ width: activeTabElement.offsetWidth, left: activeTabElement.offsetLeft });
    }
  }, [activeTab, tabs]);

  return (
    <div className="relative">
      <div className="hidden md:flex items-center justify-center bg-white rounded-2xl border border-gray-200 p-2 relative shadow-sm">
        <div className="absolute top-2 bottom-2 bg-modern-blue-500 rounded-xl transition-all duration-300 ease-out" style={indicatorStyle} />
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => { tabsRef.current[index] = el; }}
            onClick={() => onTabChange(tab.id)}
            className={`relative z-10 px-6 py-3 font-openSans font-semibold text-sm uppercase tracking-wider transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-modern-charcoal hover:text-modern-blue-500'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="md:hidden">
        <select
          value={activeTab}
          onChange={(e) => onTabChange(e.target.value)}
          className="w-full px-6 py-4 bg-white text-modern-navy-900 rounded-xl font-openSans font-semibold text-sm uppercase tracking-wider appearance-none cursor-pointer border border-gray-200"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2307203f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 1rem center',
            backgroundSize: '1.5rem',
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.id} value={tab.id}>{tab.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface TabContentProps {
  id: string;
  activeTab: string;
  children: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children }) => {
  if (id !== activeTab) return null;
  return <div className="animate-fadeIn">{children}</div>;
};
