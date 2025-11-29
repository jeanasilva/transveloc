'use client';

import React, { useState } from 'react';
import { Truck, Mail, Lock, ArrowRight } from 'lucide-react';

interface LoginViewProps {
  onLogin: (role: 'admin' | 'client') => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'admin' | 'client'>('admin');

  return (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
    {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Logistics Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-indigo-900/80"></div>
      </div>

    {/* Content Container */}
    <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center p-6 lg:p-12 gap-12 lg:gap-20">
      {/* Left Text Side */}
      <div className="text-white space-y-8 max-w-lg hidden lg:block animate-in slide-in-from-left duration-1000">
        <div>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-100">Sistema Operacional v2.0</span>
          </div>
            <h1 className="text-5xl font-bold tracking-tight leading-[1.15]">
              {role === 'admin' ? (
                <>Controle total da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">frota e logística</span>.</>
              ) : (
                <>Acompanhe suas <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">cargas e faturas</span> em tempo real.</>
              )}
            </h1>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed">
            {role === 'admin' 
              ? "Gerencie vistorias digitais, monitore entregas em tempo real e automatize contratos com a plataforma mais robusta do mercado."
              : "Tenha visibilidade total sobre seus pedidos, acesse comprovantes de vistoria e gerencie pagamentos de forma simples."}
          </p>
        <div className="flex gap-8 border-t border-white/10 pt-8">
          <div>
            <div className="text-3xl font-bold text-white mb-1">14k+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Veículos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">Suporte</div>
          </div>
        </div>
      </div>

      {/* Right Form Side - Glassmorphism Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl animate-in slide-in-from-bottom duration-1000 delay-200">
        {/* Role Switcher */}
        <div className="flex bg-slate-900/50 p-1 rounded-xl mb-8">
          <button 
            onClick={() => setRole('admin')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'admin' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Administrativo
          </button>
          <button 
            onClick={() => setRole('client')}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${role === 'client' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            Área do Cliente
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg mb-4 ${role === 'admin' ? 'bg-indigo-600 shadow-indigo-500/40' : 'bg-emerald-600 shadow-emerald-500/40'}`}>
            <Truck className="text-white" size={28} />
          </div>
          <h2 className="text-2xl font-bold text-white">Transveloc</h2>
          <p className="text-slate-300 text-sm">Acesse sua conta {role === 'admin' ? 'administrativa' : 'de cliente'}</p>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase ml-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-white transition-colors" size={18} />
              <input 
                type="email" 
                defaultValue={role === 'admin' ? "admin@transveloc.com" : "cliente@empresa.com"}
                className="block w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-current focus:border-transparent transition-all"
                style={{ color: role === 'admin' ? undefined : '#ecfdf5' }}
                placeholder="seu@email.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase ml-1">Senha</label>
            <div className="relative group">
              <Lock className="absolute left-3 top-3.5 text-slate-400 group-focus-within:text-white transition-colors" size={18} />
              <input 
                type="password" 
                defaultValue="12345678" 
                className="block w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-current focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="rounded border-slate-700 bg-slate-800 text-indigo-500 focus:ring-offset-slate-900" />
              Lembrar-me
            </label>
            <button className="hover:text-white hover:underline transition-colors">Esqueceu a senha?</button>
          </div>

          <button 
            onClick={() => onLogin(role)} 
            className={`w-full py-4 font-bold rounded-xl shadow-lg transform transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group text-white ${
              role === 'admin' 
                ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-indigo-900/50' 
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-emerald-900/50'
            }`}
          >
            {role === 'admin' ? 'Acessar Painel' : 'Acessar Área do Cliente'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

