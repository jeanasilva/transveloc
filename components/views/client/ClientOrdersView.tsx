'use client';

import React from 'react';
import { Search } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockClientOrders } from '@/lib/mockData';

export const ClientOrdersView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Meus Pedidos</h2>
        <p className="text-slate-500 mt-1">Acompanhe o status de suas cargas.</p>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar pedido, NF..." 
          className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm w-64 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
      </div>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Pedido / Carga</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Origem / Destino</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Veículo</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Previsão</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockClientOrders.map((order) => (
              <tr key={order.id} className="hover:bg-slate-50/80 transition-colors cursor-pointer">
                <td className="p-5">
                  <p className="font-bold text-slate-800">{order.id}</p>
                  <p className="text-xs text-slate-500">{order.items}</p>
                </td>
                <td className="p-5">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div> {order.origin}
                    </div>
                    <div className="h-2 border-l border-slate-200 ml-[3px]"></div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {order.dest}
                    </div>
                  </div>
                </td>
                <td className="p-5 text-sm text-slate-600">{order.vehicle}</td>
                <td className="p-5 text-sm font-medium text-slate-700">{order.eta}</td>
                <td className="p-5 text-right">
                  <StatusBadge status={order.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </div>
);


