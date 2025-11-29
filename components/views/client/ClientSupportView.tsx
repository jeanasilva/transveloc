'use client';

import React from 'react';
import { MessageSquare, Smartphone, Mail, HelpCircle, ChevronRight } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export const ClientSupportView: React.FC = () => {
  const faqs = [
    "Como solicitar a segunda via do boleto?",
    "Qual o prazo para liberação de carga após pagamento?",
    "Como agendar uma nova vistoria?",
    "Onde vejo o status do meu pedido em tempo real?"
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Suporte</h2>
          <p className="text-slate-500 mt-1">Como podemos ajudar você hoje?</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="flex flex-col items-center text-center p-8 hover:border-indigo-200 cursor-pointer group">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Chat Online</h3>
          <p className="text-sm text-slate-500 mb-4">Converse com nossos atendentes em tempo real.</p>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">Disponível</span>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center p-8 hover:border-indigo-200 cursor-pointer group">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Smartphone size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">WhatsApp</h3>
          <p className="text-sm text-slate-500 mb-4">Atendimento rápido via mensagem.</p>
          <button className="text-sm font-bold text-indigo-600 hover:underline">Iniciar Conversa</button>
        </GlassCard>

        <GlassCard className="flex flex-col items-center text-center p-8 hover:border-indigo-200 cursor-pointer group">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Mail size={24} />
          </div>
          <h3 className="font-bold text-slate-800 mb-2">Email / Ticket</h3>
          <p className="text-sm text-slate-500 mb-4">Para assuntos mais complexos ou documentais.</p>
          <button className="text-sm font-bold text-indigo-600 hover:underline">Abrir Ticket</button>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <HelpCircle size={20} className="text-indigo-600"/> Perguntas Frequentes
        </h3>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer flex justify-between items-center group transition-colors">
              <span className="text-sm font-medium text-slate-600 group-hover:text-indigo-600">{faq}</span>
              <ChevronRight size={16} className="text-slate-300 group-hover:text-indigo-600" />
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};


