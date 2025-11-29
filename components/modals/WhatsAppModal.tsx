'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { Smartphone } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Disparo Manual (WhatsApp)">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Destinatário</label>
          <select className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50">
            <option>Selecione um cliente...</option>
            <option>Logística Express</option>
            <option>Supermercados Ideal</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Mensagem</label>
          <textarea 
            rows={4} 
            className="w-full border border-slate-200 rounded-lg p-3 bg-slate-50" 
            placeholder="Digite sua mensagem aqui..."
          ></textarea>
        </div>
        <button 
          onClick={onClose} 
          className="w-full py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 mt-4 flex items-center justify-center gap-2"
        >
          <Smartphone size={20} /> Enviar Mensagem
        </button>
      </div>
    </Modal>
  );
};


