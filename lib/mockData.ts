import { 
  Truck, 
  Users, 
  FileText, 
  MapPin, 
  Wrench 
} from 'lucide-react';

export interface Stat {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
  icon: typeof Truck;
  color: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  driver: string;
  model: string;
  status: string;
  speed: number;
  location: string;
  avatar: string;
  fuel: number;
  km: number;
  nextMaint: string;
}

export interface Contract {
  id: string;
  client: string;
  type: string;
  value: string;
  start: string;
  end: string;
  status: string;
  docs: number;
}

export interface Communication {
  id: number;
  client: string;
  contact: string;
  phone: string;
  vehicle: string;
  driver: string;
  type: string;
  message: string;
  time: string;
  status: string;
}

export interface Inspection {
  id: string;
  date: string;
  vehicle: string;
  type: string;
  status: string;
  inspector: string;
}

export const mockStats: Stat[] = [
  { label: "Receita Mensal", value: "R$ 482k", trend: "+12.5%", isPositive: true, icon: FileText, color: "text-indigo-600 bg-indigo-50" },
  { label: "Veículos Ativos", value: "142", trend: "+4", isPositive: true, icon: Truck, color: "text-emerald-600 bg-emerald-50" },
  { label: "Manutenções", value: "8", trend: "-2", isPositive: true, icon: Wrench, color: "text-orange-600 bg-orange-50" },
  { label: "Entregas Hoje", value: "89%", trend: "-1.2%", isPositive: false, icon: MapPin, color: "text-blue-600 bg-blue-50" },
];

export const mockVehicles: Vehicle[] = [
  { id: 'TR-001', plate: "ABC-1234", driver: "João Ferreira", model: "Volvo FH 540", status: "Movimento", speed: 85, location: "Rod. Bandeirantes, km 45", avatar: "JF", fuel: 75, km: 120500, nextMaint: "15/12/2024" },
  { id: 'TR-002', plate: "XYZ-9876", driver: "Maria Clara", model: "Scania R450", status: "Manutencao", speed: 0, location: "Oficina Central", avatar: "MC", fuel: 20, km: 215000, nextMaint: "Hoje" },
  { id: 'TR-003', plate: "DEF-5678", driver: "Pedro Santos", model: "Mercedes Actros", status: "Alerta", speed: 110, location: "Av. Brasil, RJ", avatar: "PS", fuel: 45, km: 89000, nextMaint: "20/01/2025" },
  { id: 'TR-004', plate: "GHI-9012", driver: "Lucas Lima", model: "Iveco Stralis", status: "Movimento", speed: 60, location: "Marginal Tietê", avatar: "LL", fuel: 90, km: 45000, nextMaint: "10/02/2025" },
  { id: 'TR-005', plate: "JKL-3456", driver: "Roberto Dias", model: "DAF XF", status: "Parado", speed: 0, location: "CD Cajamar", avatar: "RD", fuel: 60, km: 150200, nextMaint: "05/12/2024" },
];

export const mockContracts: Contract[] = [
  { id: 'CTR-001', client: "Logística Express Ltda", type: "Transporte Dedicado", value: "R$ 45.000/mês", start: "01/01/2024", end: "31/12/2025", status: "Ativo", docs: 12 },
  { id: 'CTR-002', client: "Supermercados Ideal", type: "Distribuição Fracionada", value: "R$ 12.500/mês", start: "15/03/2024", end: "15/03/2025", status: "Vencendo", docs: 8 },
  { id: 'CTR-003', client: "Indústria Metalúrgica SA", type: "Carga Pesada", value: "R$ 88.000/projeto", start: "01/06/2024", end: "30/09/2024", status: "Pendente", docs: 5 },
  { id: 'CTR-004', client: "E-commerce Fast", type: "Last Mile", value: "R$ 32.000/mês", start: "10/02/2024", end: "Indeterminado", status: "Ativo", docs: 15 },
];

export const mockCommunications: Communication[] = [
  { id: 101, client: "Logística Express Ltda", contact: "Carlos Silva", phone: "(11) 99876-5432", vehicle: "ABC-1234", driver: "João Ferreira", type: "Atualização de Posição", message: "Olá Carlos! O veículo Volvo FH (ABC-1234) acabou de passar pelo pedágio de Limeira. Previsão de chegada atualizada para as 14:30.", time: "Hoje, 10:45", status: "Enviado" },
  { id: 102, client: "Supermercados Ideal", contact: "Gerência CD", phone: "(11) 98888-1111", vehicle: "GHI-9012", driver: "Lucas Lima", type: "Aviso de Chegada", message: "Atenção: O veículo GHI-9012 está a 5km do destino. Por favor, preparar doca para recebimento.", time: "Hoje, 10:12", status: "Enviado" },
  { id: 103, client: "Construtora Forte", contact: "Eng. Roberto", phone: "(21) 97777-2222", vehicle: "DEF-5678", driver: "Pedro Santos", type: "Alerta de Atraso", message: "Prezado Roberto, informamos que o veículo DEF-5678 está parado devido a trânsito intenso na Av. Brasil. Nova previsão: 16:00.", time: "Hoje, 09:30", status: "Enviado" },
];

export const mockInspections: Inspection[] = [
  { id: 'VST-2024-88', date: '25/11/2024', vehicle: 'ABC-1234', type: 'Entrega (Saída)', status: 'Aprovado', inspector: 'M. Souza' },
  { id: 'VST-2024-89', date: '25/11/2024', vehicle: 'XYZ-9876', type: 'Devolução (Chegada)', status: 'Com Avaria', inspector: 'R. Lima' },
];

