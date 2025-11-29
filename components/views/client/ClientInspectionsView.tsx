'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockInspections } from '@/lib/mockData';

export const ClientInspectionsView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Vistorias</h2>
        <p className="text-slate-500 mt-1">Histórico de aprovações e laudos técnicos.</p>
      </div>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Data</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Veículo</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Tipo</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase text-right">Laudo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockInspections.map((insp) => (
              <tr key={insp.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-5 text-sm text-slate-600">{insp.date}</td>
                <td className="p-5 font-bold text-slate-800">{insp.vehicle}</td>
                <td className="p-5 text-sm text-slate-600">{insp.type}</td>
                <td className="p-5">
                  <StatusBadge status={insp.status} />
                </td>
                <td className="p-5 text-right">
                  <button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors flex items-center gap-2 ml-auto text-sm font-medium">
                    <Download size={16} /> Baixar PDF
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


