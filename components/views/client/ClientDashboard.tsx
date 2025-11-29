'use client';

import React from 'react';
import { Plus, Truck, Package, FileText, FileCheck, Headphones, MapPin } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { mockClientStats } from '@/lib/mockData';

export const ClientDashboard: React.FC = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Painel do Cliente</h2>
        <p className="text-slate-500 mt-1">Bem-vindo, Logística Express Ltda.</p>
      </div>
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 shadow-lg shadow-emerald-200">
          <Plus size={16} /> Novo Pedido
        </button>
      </div>
    </div>

    {/* Client Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mockClientStats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <GlassCard key={i} className="flex flex-col justify-between h-32 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${stat.color}`}>
              <Icon size={64} />
            </div>
            <div className="z-10">
              <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            </div>
            <div className="z-10 flex items-center gap-1 text-xs font-bold text-slate-600 bg-slate-100 w-fit px-2 py-1 rounded-full">
              {stat.trend}
            </div>
          </GlassCard>
        );
      })}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Active Shipment Map */}
      <GlassCard className="lg:col-span-2 p-0 overflow-hidden relative min-h-[300px]">
        <div className="absolute inset-0 bg-slate-100">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          {/* Simple Map Visualization */}
          <div className="absolute top-[40%] left-[30%]">
            <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
            <div className="absolute top-4 -left-4 text-[10px] font-bold text-slate-500">São Paulo</div>
          </div>
          <div className="absolute top-[30%] right-[30%]">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute"></div>
            <div className="w-3 h-3 bg-emerald-500 border-2 border-white rounded-full relative z-10"></div>
            
            {/* Truck Tooltip */}
            <div className="absolute -top-12 -left-16 bg-white p-2 rounded-lg shadow-xl border border-slate-100 w-32 animate-bounce">
              <div className="flex items-center gap-2 mb-1">
                <Truck size={12} className="text-emerald-600" />
                <span className="text-[10px] font-bold">ABC-1234</span>
              </div>
              <div className="text-[8px] text-slate-500">Chegada: 18:00</div>
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-b border-r border-slate-100"></div>
            </div>
          </div>
          {/* Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <path d="M 280 200 Q 400 150 550 150" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl border border-slate-100 flex justify-between items-center">
          <div>
            <p className="text-xs font-bold text-slate-500 uppercase">Pedido #9901</p>
            <p className="text-sm font-bold text-slate-800">Eletrônicos - Em rota para Rio de Janeiro</p>
          </div>
          <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-lg">Ver Detalhes</button>
        </div>
      </GlassCard>

      {/* Quick Actions */}
      <GlassCard className="flex flex-col gap-3">
        <h3 className="font-bold text-slate-800 mb-2">Acesso Rápido</h3>
        <button className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
            <FileText size={20}/>
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm">2ª Via de Boleto</p>
            <p className="text-[10px] text-slate-400">Financeiro</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
            <FileCheck size={20}/>
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm">Aprovar Vistoria</p>
            <p className="text-[10px] text-slate-400">Pendente: #9021</p>
          </div>
        </button>
        <button className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left group">
          <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
            <Headphones size={20}/>
          </div>
          <div>
            <p className="font-bold text-slate-700 text-sm">Falar com Suporte</p>
            <p className="text-[10px] text-slate-400">Online agora</p>
          </div>
        </button>
      </GlassCard>
    </div>
  </div>
);


