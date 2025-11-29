'use client';

import React from 'react';
import { Plus, FileText, FileCheck, Clock, Users, Download, MoreVertical } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockContracts } from '@/lib/mockData';

export const ContractsView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Contratos & Clientes</h2>
        <p className="text-slate-500 mt-1">Gerencie vencimentos, documentos e faturamento.</p>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200">
        <Plus size={16} /> Novo Contrato
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <GlassCard className="p-4 flex items-center gap-3">
        <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><FileText size={20}/></div>
        <div><p className="text-xs text-slate-500 uppercase font-bold">Total Ativo</p><p className="text-lg font-bold text-slate-800">R$ 1.2M</p></div>
      </GlassCard>
      <GlassCard className="p-4 flex items-center gap-3">
        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><FileCheck size={20}/></div>
        <div><p className="text-xs text-slate-500 uppercase font-bold">Contratos</p><p className="text-lg font-bold text-slate-800">142</p></div>
      </GlassCard>
      <GlassCard className="p-4 flex items-center gap-3">
        <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg"><Clock size={20}/></div>
        <div><p className="text-xs text-slate-500 uppercase font-bold">A Vencer (30d)</p><p className="text-lg font-bold text-slate-800">5</p></div>
      </GlassCard>
      <GlassCard className="p-4 flex items-center gap-3">
        <div className="p-2 bg-slate-100 text-slate-600 rounded-lg"><Users size={20}/></div>
        <div><p className="text-xs text-slate-500 uppercase font-bold">Clientes</p><p className="text-lg font-bold text-slate-800">48</p></div>
      </GlassCard>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">ID / Cliente</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Tipo de Serviço</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Vigência</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Valor</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockContracts.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-5">
                  <p className="font-bold text-indigo-600 text-xs mb-1">{c.id}</p>
                  <p className="font-medium text-slate-800">{c.client}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1"><FileText size={10} /> {c.docs} documentos</p>
                </td>
                <td className="p-5"><span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-md">{c.type}</span></td>
                <td className="p-5 text-sm text-slate-600">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Início: {c.start}</span>
                    <span className="font-medium">Fim: {c.end}</span>
                  </div>
                </td>
                <td className="p-5 font-bold text-slate-800">{c.value}</td>
                <td className="p-5"><StatusBadge status={c.status} /></td>
                <td className="p-5 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Download PDF">
                      <Download size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  </div>
);

