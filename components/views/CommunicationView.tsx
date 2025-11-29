'use client';

import React from 'react';
import { Smartphone, CheckCircle2, Users, Clock, Share2 } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { mockCommunications } from '@/lib/mockData';

export const CommunicationView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Central de Notificações</h2>
        <p className="text-slate-500 mt-1">Histórico de alertas e mensagens automáticas enviadas aos clientes.</p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 shadow-lg shadow-green-200">
          <Smartphone size={16} /> Disparo Manual
        </button>
      </div>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Cliente / Contato</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Veículo</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/3">Conteúdo da Mensagem</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Horário</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockCommunications.map((comm) => (
              <tr key={comm.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="p-5">
                  <div className="flex items-center gap-2 text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-full w-fit border border-green-100">
                    <CheckCircle2 size={14} />
                    Via WhatsApp
                  </div>
                </td>
                <td className="p-5">
                  <p className="font-bold text-slate-800">{comm.client}</p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                    <Users size={12} /> {comm.contact}
                  </div>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                      {comm.vehicle.split('-')[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{comm.vehicle}</p>
                      <p className="text-xs text-slate-500">{comm.driver}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <div className="p-3 bg-green-50/50 border border-green-100 rounded-lg text-sm text-slate-700 shadow-sm">
                    <p className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                      <span className="font-bold text-green-700 block mb-1 text-xs uppercase flex items-center gap-1">
                        <Smartphone size={10} /> {comm.type}
                      </span>
                      {comm.message}
                    </p>
                  </div>
                </td>
                <td className="p-5">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock size={14} /> {comm.time}
                  </div>
                </td>
                <td className="p-5 text-right">
                  <button className="p-2 text-slate-400 hover:text-indigo-600">
                    <Share2 size={18} />
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

