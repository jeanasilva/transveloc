import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  onClick 
}) => (
  <div 
    onClick={onClick}
    className={`bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-slate-200/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

