'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Novo Relatório Gerencial">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Tipo de Relatório</label>
          <select className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50">
            <option>Desempenho da Frota</option>
            <option>Faturamento Mensal</option>
            <option>Manutenção e Custos</option>
            <option>Alertas e Multas</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Data Início</label>
            <input type="date" className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Data Fim</label>
            <input type="date" className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" />
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 mt-4"
        >
          Gerar Relatório
        </button>
      </div>
    </Modal>
  );
};


