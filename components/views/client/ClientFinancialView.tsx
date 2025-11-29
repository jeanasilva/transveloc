'use client';

import React from 'react';
import { Download, FileText } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockBilling } from '@/lib/mockData';

export const ClientFinancialView: React.FC = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="flex justify-between items-end">
      <div>
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Financeiro</h2>
        <p className="text-slate-500 mt-1">Faturas, boletos e histórico de pagamentos.</p>
      </div>
    </div>
    <GlassCard className="p-0 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Fatura</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Vencimento</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Valor</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase">Status</th>
              <th className="p-5 text-xs font-bold text-slate-500 uppercase text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockBilling.map((bill) => (
              <tr key={bill.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-5 font-bold text-slate-800">{bill.id}</td>
                <td className="p-5 text-sm text-slate-600">{bill.due}</td>
                <td className="p-5 font-bold text-slate-800">{bill.amount}</td>
                <td className="p-5">
                  <StatusBadge status={bill.status} />
                </td>
                <td className="p-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Baixar Boleto"
                    >
                      <Download size={18} />
                    </button>
                    <button 
                      className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" 
                      title="Copiar Código de Barras"
                    >
                      <FileText size={18} />
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


