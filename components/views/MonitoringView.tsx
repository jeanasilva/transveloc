'use client';

import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockVehicles } from '@/lib/mockData';

export const MonitoringView: React.FC = () => (
  <div className="flex h-[calc(100vh-140px)] gap-6 animate-in fade-in duration-500">
    <div className="w-96 flex flex-col gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar veículo..." 
          className="w-full pl-10 pr-4 py-3 bg-white border-none rounded-xl shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
        {mockVehicles.map((v) => (
          <div key={v.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 cursor-pointer hover:border-indigo-500 hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h4 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{v.plate}</h4>
                <p className="text-xs text-slate-500">{v.model}</p>
              </div>
              <StatusBadge status={v.status} />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">{v.avatar}</div>
              <span className="text-sm text-slate-600 font-medium">{v.driver}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-50 p-2 rounded-lg">
              <MapPin size={12} />
              <span className="truncate">{v.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <GlassCard className="flex-1 p-0 relative overflow-hidden bg-slate-200">
      <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
        <MapPin size={48} className="mb-2 opacity-50" />
        <p>Selecione um veículo para rastreamento detalhado</p>
      </div>
    </GlassCard>
  </div>
);

