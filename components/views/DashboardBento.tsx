'use client';

import React from 'react';
import { Plus, ArrowUpRight, ArrowDownRight, Bell, Truck, DollarSign, Calendar } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockStats, mockVehicles, mockBilling } from '@/lib/mockData';

interface DashboardBentoProps {
  onOpenModal: (modal: string) => void;
}

export const DashboardBento: React.FC<DashboardBentoProps> = ({ onOpenModal }) => (
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
        <button 
          onClick={() => onOpenModal('report')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
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

    {/* Main Grid: Map & Billing */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Mapa do Brasil Visual */}
      <GlassCard className="lg:col-span-2 p-0 overflow-hidden relative min-h-[400px]">
        <div className="absolute inset-0 bg-slate-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Brazil_relief_location_map.jpg/800px-Brazil_relief_location_map.jpg" 
            alt="Mapa do Brasil"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          {/* Pontos no Mapa */}
          <div className="absolute top-[60%] left-[45%]">
            <div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping absolute"></div>
            <div className="w-4 h-4 bg-indigo-500 border-2 border-white rounded-full relative z-10"></div>
            <div className="absolute left-6 top-0 bg-white/90 px-2 py-1 rounded text-xs font-bold whitespace-nowrap shadow-sm">Brasília (HQ)</div>
          </div>
          <div className="absolute top-[70%] right-[35%]">
            <div className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full relative z-10"></div>
          </div>
          <div className="absolute bottom-[20%] left-[40%]">
            <div className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full relative z-10"></div>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">Operação Nacional</h3>
          <p className="text-sm text-slate-200 drop-shadow-md">Monitoramento em tempo real</p>
        </div>
      </GlassCard>

      {/* Tabela de Faturamento */}
      <GlassCard className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-800 flex items-center gap-2">
            <DollarSign size={18} className="text-emerald-600"/> Faturamento Recente
          </h3>
          <button className="text-indigo-600 text-xs font-bold hover:underline">Ver tudo</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar">
          {mockBilling.map(bill => (
            <div key={bill.id} className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-slate-700 text-sm">{bill.client}</span>
                <span className="text-xs font-bold text-slate-900">{bill.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Vence: {bill.due}</span>
                <StatusBadge status={bill.status} />
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-50">
          Gerar Nota Fiscal
        </button>
      </GlassCard>
    </div>
  </div>
);

