import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const styles: Record<string, string> = {
    ativo: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pendente: "bg-amber-50 text-amber-700 border-amber-200",
    inativo: "bg-slate-100 text-slate-600 border-slate-200",
    alerta: "bg-rose-100 text-rose-700 border-rose-200",
    manutencao: "bg-orange-100 text-orange-700 border-orange-200",
    movimento: "bg-blue-100 text-blue-700 border-blue-200",
    parado: "bg-slate-100 text-slate-600 border-slate-200",
    enviado: "bg-green-100 text-green-700 border-green-200",
    vencendo: "bg-yellow-100 text-yellow-700 border-yellow-200",
    aprovado: "bg-teal-100 text-teal-700 border-teal-200",
    com_avaria: "bg-red-100 text-red-700 border-red-200",
  };

  const normalizedStatus = status.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '_');
  const config = styles[normalizedStatus] || styles.inativo;
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${config} inline-flex items-center gap-1.5 whitespace-nowrap`}>
      {status === 'Movimento' && <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"/>}
      {status.toUpperCase()}
    </span>
  );
};

