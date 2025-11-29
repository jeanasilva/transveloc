'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';

interface VehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adicionar Veículo">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Placa</label>
            <input 
              type="text" 
              placeholder="ABC-1234" 
              className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50 uppercase" 
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Modelo/Marca</label>
            <input 
              type="text" 
              placeholder="Ex: Volvo FH 540" 
              className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" 
            />
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 mt-4"
        >
          Salvar Veículo
        </button>
      </div>
    </Modal>
  );
};


