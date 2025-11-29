# Transveloc - Sistema de Gestão de Frota

Sistema de mockup completo para gestão de frota e logística, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Lucide React** - Ícones modernos

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
transveloc/
├── app/
│   ├── globals.css          # Estilos globais e Tailwind
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Página principal
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx      # Barra lateral de navegação
│   │   └── Header.tsx       # Cabeçalho superior
│   ├── ui/
│   │   ├── GlassCard.tsx    # Componente de card com efeito glass
│   │   ├── IconButton.tsx   # Botão com ícone
│   │   └── StatusBadge.tsx  # Badge de status
│   └── views/
│       ├── DashboardBento.tsx    # Dashboard principal
│       ├── MonitoringView.tsx    # Monitoramento de veículos
│       ├── CommunicationView.tsx # Central de notificações
│       ├── FleetView.tsx         # Gestão de frota
│       ├── ContractsView.tsx    # Contratos e clientes
│       └── InspectionView.tsx    # Vistoria digital
├── lib/
│   └── mockData.ts          # Dados mock e tipos
└── package.json
```

## 🎨 Funcionalidades

### Dashboard
- Visão geral com estatísticas principais
- Mapa em tempo real da frota
- Atividades recentes

### Monitoramento
- Lista de veículos com status
- Rastreamento detalhado
- Busca de veículos

### Comunicação
- Histórico de mensagens automáticas
- Notificações via WhatsApp
- Disparo manual de mensagens

### Gestão de Frota
- Controle de manutenções
- Consumo de combustível
- Disponibilidade da frota
- Detalhes de cada veículo

### Contratos
- Gestão de contratos ativos
- Controle de vencimentos
- Documentos por contrato
- Estatísticas financeiras

### Vistoria Digital
- Checklist de entrega/devolução
- Registro de avarias com fotos
- Assinatura digital
- Histórico de vistorias

## 🎯 Componentes Principais

### GlassCard
Componente de card com efeito glassmorphism:

```tsx
<GlassCard className="custom-class">
  Conteúdo do card
</GlassCard>
```

### StatusBadge
Badge de status com cores dinâmicas:

```tsx
<StatusBadge status="Movimento" />
```

### IconButton
Botão com ícone do Lucide:

```tsx
<IconButton icon={Bell} onClick={handleClick} />
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

## 🔧 Customização

Os dados mock estão em `lib/mockData.ts`. Você pode modificar os arrays de dados para testar diferentes cenários.

As cores e estilos podem ser ajustados através das classes Tailwind ou modificando o arquivo `tailwind.config.js`.

## 📄 Licença

Este é um projeto de mockup para demonstração.

