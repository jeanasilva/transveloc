'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContractModal: React.FC<ContractModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Novo Contrato">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Cliente</label>
          <input 
            type="text" 
            placeholder="Nome da empresa" 
            className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" 
          />
        </div>
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 mt-4"
        >
          Criar Contrato
        </button>
      </div>
    </Modal>
  );
};


