'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { DashboardBento } from '@/components/views/DashboardBento';
import { MonitoringView } from '@/components/views/MonitoringView';
import { CommunicationView } from '@/components/views/CommunicationView';
import { FleetView } from '@/components/views/FleetView';
import { ContractsView } from '@/components/views/ContractsView';
import { InspectionView } from '@/components/views/InspectionView';
import { 
  ArrowUpRight, 
  MapPin, 
  MessageSquare, 
  Truck, 
  Users, 
  ClipboardCheck 
} from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: ArrowUpRight },
  { id: 'monitor', label: 'Monitoramento', icon: MapPin },
  { id: 'whatsapp', label: 'Comunicação', icon: MessageSquare },
  { id: 'fleet', label: 'Gestão de Frota', icon: Truck },
  { id: 'inspection', label: 'Vistoria Digital', icon: ClipboardCheck },
  { id: 'clients', label: 'Contratos', icon: Users },
];

export default function TransvelocPremium() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isSidebarOpen={isSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
        <Header 
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          tabs={tabs}
        />

        <div className="flex-1 overflow-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'dashboard' && <DashboardBento />}
            {activeTab === 'monitor' && <MonitoringView />}
            {activeTab === 'whatsapp' && <CommunicationView />}
            {activeTab === 'fleet' && <FleetView />}
            {activeTab === 'inspection' && <InspectionView />}
            {activeTab === 'clients' && <ContractsView />}
          </div>
        </div>
      </main>
    </div>
  );
}

