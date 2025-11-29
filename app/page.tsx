'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { LoginView } from '@/components/auth/LoginView';
import { DashboardBento } from '@/components/views/DashboardBento';
import { MonitoringView } from '@/components/views/MonitoringView';
import { CommunicationView } from '@/components/views/CommunicationView';
import { FleetView } from '@/components/views/FleetView';
import { ContractsView } from '@/components/views/ContractsView';
import { InspectionView } from '@/components/views/InspectionView';
import { ClientDashboard } from '@/components/views/client/ClientDashboard';
import { ClientOrdersView } from '@/components/views/client/ClientOrdersView';
import { ClientFinancialView } from '@/components/views/client/ClientFinancialView';
import { ClientInspectionsView } from '@/components/views/client/ClientInspectionsView';
import { ClientSupportView } from '@/components/views/client/ClientSupportView';
import { ReportModal } from '@/components/modals/ReportModal';
import { VehicleModal } from '@/components/modals/VehicleModal';
import { ContractModal } from '@/components/modals/ContractModal';
import { WhatsAppModal } from '@/components/modals/WhatsAppModal';
import { InspectionModal } from '@/components/modals/InspectionModal';
import { 
  ArrowUpRight, 
  MapPin, 
  MessageSquare, 
  Truck, 
  Users, 
  ClipboardCheck,
  Package,
  DollarSign,
  FileCheck,
  Headphones,
  Wrench
} from 'lucide-react';

const adminTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: ArrowUpRight },
  { id: 'monitor', label: 'Monitoramento', icon: MapPin },
  { id: 'whatsapp', label: 'Comunicação', icon: MessageSquare },
  { id: 'fleet', label: 'Gestão de Frota', icon: Truck },
  { id: 'inspection', label: 'Vistoria Digital', icon: ClipboardCheck },
  { id: 'clients', label: 'Contratos', icon: Users },
];

const clientTabs = [
  { id: 'dashboard', label: 'Visão Geral', icon: ArrowUpRight },
  { id: 'orders', label: 'Meus Pedidos', icon: Package },
  { id: 'financial', label: 'Financeiro', icon: DollarSign },
  { id: 'inspections_client', label: 'Vistorias', icon: FileCheck },
  { id: 'support', label: 'Suporte', icon: Headphones },
];

export default function TransvelocPremium() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'client'>('admin');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [inspectionType, setInspectionType] = useState<'saida' | 'entrada'>('saida');

  const handleLogin = (role: 'admin' | 'client') => {
    setUserRole(role);
    setIsLoggedIn(true);
    setActiveTab('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginView onLogin={handleLogin} />;
  }

  const closeModal = () => setActiveModal(null);
  const openModal = (modal: string) => setActiveModal(modal);
  const tabs = userRole === 'admin' ? adminTabs : clientTabs;

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      {/* Modals - Admin Only */}
      {userRole === 'admin' && (
        <>
          <ReportModal isOpen={activeModal === 'report'} onClose={closeModal} />
          <VehicleModal isOpen={activeModal === 'vehicle'} onClose={closeModal} />
          <ContractModal isOpen={activeModal === 'contract'} onClose={closeModal} />
          <WhatsAppModal isOpen={activeModal === 'whatsapp'} onClose={closeModal} />
          <InspectionModal isOpen={activeModal === 'inspection'} onClose={closeModal} />
        </>
      )}

      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isSidebarOpen={isSidebarOpen}
        onLogout={() => setIsLoggedIn(false)}
        userRole={userRole}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
        <Header 
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          tabs={tabs}
          onLogout={() => setIsLoggedIn(false)}
          userRole={userRole}
        />

        <div className="flex-1 overflow-auto p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
            {/* Admin Routes */}
            {userRole === 'admin' && (
              <>
                {activeTab === 'dashboard' && <DashboardBento onOpenModal={openModal} />}
                {activeTab === 'monitor' && <MonitoringView />}
                {activeTab === 'whatsapp' && <CommunicationView onOpenModal={openModal} />}
                {activeTab === 'fleet' && <FleetView onOpenModal={openModal} />}
                {activeTab === 'inspection' && <InspectionView onOpenModal={openModal} />}
                {activeTab === 'clients' && <ContractsView onOpenModal={openModal} />}
              </>
            )}

            {/* Client Routes */}
            {userRole === 'client' && (
              <>
                {activeTab === 'dashboard' && <ClientDashboard />}
                {activeTab === 'orders' && <ClientOrdersView />}
                {activeTab === 'financial' && <ClientFinancialView />}
                {activeTab === 'inspections_client' && <ClientInspectionsView />}
                {activeTab === 'support' && <ClientSupportView />}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

