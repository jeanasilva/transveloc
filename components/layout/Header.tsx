'use client';

import React from 'react';
import { Menu, Search, Bell, LogOut, ChevronRight, LucideIcon } from 'lucide-react';
import { IconButton } from '@/components/ui/IconButton';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface HeaderProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeTab: string;
  tabs: Tab[];
  onLogout?: () => void;
  userRole?: 'admin' | 'client';
}

export const Header: React.FC<HeaderProps> = ({ isSidebarOpen, setSidebarOpen, activeTab, tabs, onLogout, userRole = 'admin' }) => {
  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <header className="h-20 px-8 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200/50">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        <div className="h-6 w-px bg-slate-200"></div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>App</span>
          <ChevronRight size={14} />
          <span className="text-slate-900 font-medium">{currentTab?.label}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar..." 
            className="pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm w-64 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />
        </div>
        <IconButton icon={Bell} />
        <IconButton 
          icon={LogOut} 
          onClick={onLogout}
          className="hover:text-rose-600 hover:bg-rose-50" 
        />
      </div>
    </header>
  );
};

