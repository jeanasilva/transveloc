'use client';

import React from 'react';
import { 
  Truck, 
  ArrowUpRight, 
  MapPin, 
  MessageSquare, 
  Users, 
  ClipboardCheck,
  Settings,
  LucideIcon
} from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
}

const tabs: Tab[] = [
  { id: 'dashboard', label: 'Dashboard', icon: ArrowUpRight },
  { id: 'monitor', label: 'Monitoramento', icon: MapPin },
  { id: 'whatsapp', label: 'Comunicação', icon: MessageSquare },
  { id: 'fleet', label: 'Gestão de Frota', icon: Truck },
  { id: 'inspection', label: 'Vistoria Digital', icon: ClipboardCheck },
  { id: 'clients', label: 'Contratos', icon: Users },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isSidebarOpen }) => {
  return (
    <aside className={`
      ${isSidebarOpen ? 'w-72' : 'w-24'} 
      bg-[#0F172A] text-white transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col relative shadow-2xl z-50
    `}>
      {/* Logo Area */}
      <div className="h-20 flex items-center px-8 border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Truck className="text-white" size={20} />
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
            <h1 className="text-lg font-bold tracking-wide">TRANS<span className="text-indigo-400">VELOC</span></h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Logística Inteligente</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8 px-4 space-y-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group
                ${activeTab === tab.id 
                  ? 'bg-indigo-600/10 text-indigo-400 font-semibold' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }
              `}
            >
              <Icon size={22} className={activeTab === tab.id ? 'text-indigo-400' : 'text-slate-500 group-hover:text-white transition-colors'} />
              <span className={`whitespace-nowrap transition-all duration-300 ${isSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 w-0 overflow-hidden'}`}>
                {tab.label}
              </span>
              {activeTab === tab.id && isSidebarOpen && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
              )}
            </button>
          );
        })}
      </nav>

      {/* User Profile Snippet */}
      <div className="p-4 border-t border-slate-800/50 bg-[#0B1120]">
        <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 border-2 border-slate-800 flex items-center justify-center font-bold text-sm">
            AD
          </div>
          <div className={`overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'w-auto opacity-100' : 'w-0 opacity-0'}`}>
            <p className="text-sm font-medium text-white">Admin Geral</p>
            <p className="text-xs text-slate-500">admin@transveloc.com</p>
          </div>
          {isSidebarOpen && (
            <button className="ml-auto text-slate-500 hover:text-white transition-colors">
              <Settings size={18} />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

