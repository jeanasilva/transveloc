'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ArrowRight, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { mockVehicles } from '@/lib/mockData';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InspectionModal: React.FC<InspectionModalProps> = ({ isOpen, onClose }) => {
  const [inspectionType, setInspectionType] = useState<'saida' | 'entrada'>('saida');

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Iniciar Nova Vistoria">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Tipo de Vistoria</label>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setInspectionType('saida')}
              className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                inspectionType === 'saida' 
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <ArrowUpCircle size={24} />
              <span className="font-bold">Saída (Entrega)</span>
            </button>
            <button 
              onClick={() => setInspectionType('entrada')}
              className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                inspectionType === 'entrada' 
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-700' 
                  : 'border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              <ArrowDownCircle size={24} />
              <span className="font-bold">Entrada (Devolução)</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Selecione o Veículo</label>
          <select className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50">
            <option>Selecione...</option>
            {mockVehicles.map(v => (
              <option key={v.id}>{v.plate} - {v.model}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Odômetro (km)</label>
            <input 
              type="number" 
              className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" 
              placeholder="0" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Nível Combustível</label>
            <select className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50">
              <option>Cheio (100%)</option>
              <option>3/4 (75%)</option>
              <option>1/2 (50%)</option>
              <option>1/4 (25%)</option>
              <option>Reserva</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Motorista</label>
          <input 
            type="text" 
            className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" 
            placeholder="Nome do responsável" 
          />
        </div>

        <button 
          onClick={onClose} 
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 mt-2 flex items-center justify-center gap-2"
        >
          <span>Continuar para Check-list</span> <ArrowRight size={20} />
        </button>
      </div>
    </Modal>
  );
};


