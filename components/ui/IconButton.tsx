import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ 
  icon: Icon, 
  onClick, 
  active, 
  className = "" 
}) => (
  <button 
    onClick={onClick}
    className={`p-2.5 rounded-xl transition-all duration-200 ${
      active 
        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' 
        : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
    } ${className}`}
  >
    <Icon size={22} strokeWidth={2} />
  </button>
);

