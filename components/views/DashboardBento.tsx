'use client';

import React from 'react';
import { Calendar, Plus, ArrowUpRight, ArrowDownRight, Bell, Truck } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { mockStats, mockVehicles } from '@/lib/mockData';

export const DashboardBento: React.FC = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Visão Geral</h2>
        <p className="text-slate-500 mt-1">Bem-vindo de volta, Administrador.</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <Calendar size={16} /> Últimos 30 dias
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
          <Plus size={16} /> Novo Relatório
        </button>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {mockStats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <GlassCard key={i} className="flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${stat.color}`}>
              <Icon size={64} />
            </div>
            <div className="flex justify-between items-start z-10">
              <div className={`p-2.5 rounded-lg ${stat.color}`}>
                <Icon size={20} />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isPositive ? 'text-emerald-700 bg-emerald-50' : 'text-rose-700 bg-rose-50'}`}>
                {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </span>
            </div>
            <div className="z-10">
              <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
          </GlassCard>
        );
      })}
    </div>

    {/* Main Grid: Map & List */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
      <GlassCard className="lg:col-span-2 p-0 overflow-hidden relative group">
        <div className="absolute inset-0 bg-slate-100">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          {mockVehicles.slice(0, 4).map((v, i) => (
            <div key={v.id} className={`absolute transition-all duration-1000 ease-in-out hover:z-50 cursor-pointer group/pin`} style={{ top: `${30 + (i * 15)}%`, left: `${20 + (i * 20)}%` }}>
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full shadow-xl border-2 border-white text-white ${v.status === 'Alerta' ? 'bg-rose-500 animate-bounce' : v.status === 'Manutencao' ? 'bg-orange-500' : 'bg-indigo-600'}`}>
                <Truck size={18} />
                <div className="absolute -bottom-1 w-2 h-2 rotate-45 bg-inherit"></div>
              </div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                <p className="font-bold text-slate-800 text-xs">{v.plate}</p>
                <p className="text-[10px] text-slate-500">{v.status}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-1 rounded-lg shadow-sm border border-slate-200 flex gap-1">
          <button className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 rounded-md">Satélite</button>
          <button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-50 rounded-md">Trânsito</button>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-lg font-bold text-slate-800 mb-1">Frota em Tempo Real</h3>
          <p className="text-sm text-slate-500">Visão global das operações de hoje.</p>
        </div>
      </GlassCard>
      <GlassCard className="overflow-hidden flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800">Atividade Recente</h3>
          <button className="text-indigo-600 text-xs font-bold hover:underline">Ver tudo</button>
        </div>
        <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="flex gap-3 items-start p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 flex-shrink-0">
                <Bell size={14} />
              </div>
              <div>
                <p className="text-sm text-slate-700 font-medium leading-tight mb-1">
                  <span className="font-bold text-slate-900">TR-00{i+1}</span> iniciou rota para Centro de Distribuição.
                </p>
                <p className="text-xs text-slate-400">Há 12 minutos</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  </div>
);

