'use client';

import React, { useState } from 'react';
import { Filter, Plus, ClipboardCheck, CheckCircle2, AlertTriangle, Camera, Image as ImageIcon, PenTool, XCircle, Fuel, Gauge } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { mockInspections } from '@/lib/mockData';

interface Zone {
  id: string;
  label: string;
  status: 'ok' | 'avaria';
}

interface InspectionViewProps {
  onOpenModal: (modal: string) => void;
}

export const InspectionView: React.FC<InspectionViewProps> = ({ onOpenModal }) => {
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  const zones: Zone[] = [
    { id: 'frente', label: 'Frente', status: 'ok' },
    { id: 'lat_esq', label: 'Lat. Esquerda', status: 'avaria' },
    { id: 'lat_dir', label: 'Lat. Direita', status: 'ok' },
    { id: 'traseira', label: 'Traseira', status: 'ok' },
    { id: 'pneus', label: 'Pneus / Rodas', status: 'ok' },
    { id: 'interno', label: 'Interior / Cabine', status: 'ok' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Vistoria Digital</h2>
          <p className="text-slate-500 mt-1">Check-list de entrega e devolução de veículos sem papel.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50">
            <Filter size={16} /> Histórico
          </button>
          <button 
            onClick={() => onOpenModal('inspection')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200"
          >
            <Plus size={16} /> Nova Vistoria
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Painel Esquerdo: Lista de Vistorias Recentes */}
        <GlassCard className="p-0 overflow-hidden h-fit">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <ClipboardCheck size={18} className="text-indigo-600"/> Recentes
            </h3>
          </div>
          <div className="divide-y divide-slate-100">
            {mockInspections.map((insp) => (
              <div key={insp.id} className="p-4 hover:bg-slate-50 cursor-pointer transition-colors group">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-slate-700 text-sm group-hover:text-indigo-600">{insp.vehicle}</span>
                  <StatusBadge status={insp.status} />
                </div>
                <p className="text-xs text-slate-500 mb-1">{insp.type}</p>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>{insp.date}</span>
                  <span>Insp: {insp.inspector}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Painel Central: Vistoria Ativa */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard>
            <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Em Andamento</span>
                  <h3 className="text-xl font-bold text-slate-800">Vistoria de Saída #9021</h3>
                </div>
                <p className="text-sm text-slate-500">Veículo: <strong>Scania R450 (XYZ-9876)</strong> • Contrato: CTR-002</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Data: 28/11/2024</p>
                <p className="text-xs text-slate-400">Hora: 14:35</p>
              </div>
            </div>

            {/* Dados Gerais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
              {/* Nível de Combustível */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-1">
                  <Fuel size={14} /> Nível de Combustível
                </label>
                <div className="relative pt-1">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    defaultValue="75" 
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                    <span>Reserva</span>
                    <span>1/4</span>
                    <span>1/2</span>
                    <span>3/4</span>
                    <span>Cheio</span>
                  </div>
                </div>
              </div>
              {/* Odômetro */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2 flex items-center gap-1">
                  <Gauge size={14} /> Odômetro Atual (km)
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="215.405" 
                    className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-bold text-slate-700 focus:outline-none focus:border-indigo-500" 
                  />
                  <span className="absolute right-3 top-1.5 text-xs text-slate-400 font-medium">km</span>
                </div>
              </div>
            </div>

            {/* Checklist Rápido */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-indigo-600"/> Itens Obrigatórios & Segurança
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['Documentos', 'Estepe/Macaco', 'Extintor', 'Triângulo', 'Chave de Roda', 'Luzes/Sinalização', 'Limpeza Interna', 'Nível de Óleo'].map(item => (
                  <label key={item} className="flex items-center gap-2 p-2 border border-slate-100 rounded-lg bg-white hover:border-indigo-200 cursor-pointer transition-colors select-none">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" />
                    <span className="text-xs font-medium text-slate-600">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {zones.map(zone => (
                <button 
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                    selectedZone?.id === zone.id 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                      : zone.status === 'avaria' 
                        ? 'border-red-200 bg-red-50 text-red-600'
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-200'
                  }`}
                >
                  {zone.status === 'avaria' ? <AlertTriangle size={24} /> : <CheckCircle2 size={24} />}
                  <span className="font-bold text-sm">{zone.label}</span>
                  {zone.status === 'avaria' && <span className="text-[10px] bg-red-100 text-red-700 px-1.5 rounded">Avaria Detectada</span>}
                </button>
              ))}
            </div>

            {selectedZone && (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 animate-in slide-in-from-top-2">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    Detalhes: {selectedZone.label}
                  </h4>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-xs font-bold bg-green-100 text-green-700 rounded-lg border border-green-200 hover:bg-green-200">Marcar OK</button>
                    <button className="px-3 py-1.5 text-xs font-bold bg-red-100 text-red-700 rounded-lg border border-red-200 hover:bg-red-200">Reportar Avaria</button>
                  </div>
                </div>
                {selectedZone.status === 'avaria' && (
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-32 h-32 bg-slate-200 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400 cursor-pointer hover:bg-slate-100 hover:border-indigo-400 hover:text-indigo-500 transition-colors">
                        <div className="text-center">
                          <Camera size={24} className="mx-auto mb-1"/>
                          <span className="text-xs">Add Foto</span>
                        </div>
                      </div>
                      <div className="w-32 h-32 bg-slate-800 rounded-lg overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                          <p className="text-white text-[10px]">avaria_lat_01.jpg</p>
                        </div>
                        <div className="w-full h-full bg-slate-700 flex items-center justify-center text-slate-500">
                          <ImageIcon />
                        </div>
                      </div>
                    </div>
                    <textarea 
                      className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
                      rows={3}
                      placeholder="Descreva a avaria encontrada (ex: arranhão profundo na porta, amassado no para-choque...)"
                      defaultValue="Arranhão profundo na porta do motorista, aproximadamente 10cm."
                    ></textarea>
                  </div>
                )}
              </div>
            )}

            <div className="mt-8 border-t border-slate-100 pt-6">
              <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <PenTool size={16} /> Assinatura Digital do Cliente
              </h4>
              <div className="h-32 bg-white border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center cursor-crosshair hover:bg-slate-50 transition-colors mb-4 relative">
                <p className="text-slate-300 text-sm select-none">Área de Assinatura (Toque ou Mouse)</p>
                <button 
                  className="absolute bottom-2 right-2 text-slate-300 hover:text-red-400 cursor-pointer"
                  aria-label="Limpar"
                >
                  <XCircle size={20} />
                </button>
              </div>

              <div className="flex justify-end gap-3">
                <button className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-50">Salvar Rascunho</button>
                <button className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200">Finalizar Vistoria</button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

