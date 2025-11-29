'use client';

import React from 'react';
import { Plus, Wrench, Fuel, Truck, Gauge, AlertTriangle, Settings } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockVehicles } from '@/lib/mockData';

export const FleetView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Gestão de Frota</h2>
        <p className="text-slate-500 mt-1">Controle de manutenção, consumo e disponibilidade.</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200">
        <Plus size={16} /> Adicionar Veículo
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GlassCard className="flex items-center gap-4 bg-orange-50 border-orange-100">
        <div className="p-3 bg-white rounded-xl text-orange-600 shadow-sm"><Wrench size={24} /></div>
        <div><h3 className="text-2xl font-bold text-slate-800">8</h3><p className="text-sm text-slate-500">Manutenções Pendentes</p></div>
      </GlassCard>
      <GlassCard className="flex items-center gap-4 bg-blue-50 border-blue-100">
        <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm"><Fuel size={24} /></div>
        <div><h3 className="text-2xl font-bold text-slate-800">2.4 km/l</h3><p className="text-sm text-slate-500">Média de Consumo</p></div>
      </GlassCard>
      <GlassCard className="flex items-center gap-4 bg-emerald-50 border-emerald-100">
        <div className="p-3 bg-white rounded-xl text-emerald-600 shadow-sm"><Truck size={24} /></div>
        <div><h3 className="text-2xl font-bold text-slate-800">92%</h3><p className="text-sm text-slate-500">Disponibilidade da Frota</p></div>
      </GlassCard>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Veículo / Modelo</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Motorista</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Odômetro / Combustível</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Próx. Manutenção</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockVehicles.map((v) => (
              <tr key={v.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                      <Truck className="text-slate-500" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{v.plate}</p>
                      <p className="text-xs text-slate-500">{v.model}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5"><StatusBadge status={v.status} /></td>
                <td className="p-5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">{v.avatar}</div>
                    <span className="text-sm text-slate-600">{v.driver}</span>
                  </div>
                </td>
                <td className="p-5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Gauge size={14} className="text-slate-400" /> {v.km.toLocaleString()} km
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <Fuel size={14} className={v.fuel < 20 ? "text-red-500" : "text-slate-400"} /> 
                      <div className="w-24 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${v.fuel < 30 ? 'bg-red-500' : 'bg-emerald-500'}`} style={{ width: `${v.fuel}%` }}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <div className={`flex items-center gap-2 text-sm font-medium ${v.nextMaint === 'Hoje' ? 'text-red-600' : 'text-slate-600'}`}>
                    {v.nextMaint === 'Hoje' && <AlertTriangle size={14} />}
                    {v.nextMaint}
                  </div>
                </td>
                <td className="p-5 text-right">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Settings size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </div>
);

