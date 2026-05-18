import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, PieChart, Filter } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/50 via-transparent to-transparent opacity-70" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Visualiza tu <span className="text-primary-600">progreso</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Descubre cuánto has ahorrado, cuánto has gastado y cada decisión que has tomado. Con la pantalla de Balance, el control total es tuyo.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: 'Balance claro',
                    description: 'Entiende tu dinero de un vistazo con resúmenes simples y precisos.',
                    icon: <Wallet size={24} className="text-success" />,
                    color: 'bg-emerald-100'
                  },
                  {
                    title: 'Actividad ordenada',
                    description: 'Todos tus movimientos organizados para que seas más consciente y tomes mejores decisiones.',
                    icon: <PieChart size={24} className="text-orange-500" />,
                    color: 'bg-orange-100'
                  },
                  {
                    title: 'Filtros útiles',
                    description: 'Filtra por periodo y categoría para ver lo que realmente importa.',
                    icon: <Filter size={24} className="text-primary-600" />,
                    color: 'bg-primary-100'
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="flex gap-5"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Balance Mockup */}
          <motion.div 
            className="flex-1 w-full max-w-md lg:max-w-none perspective-1000"
            initial={{ opacity: 0, x: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-[340px] mx-auto h-[700px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-3xl z-20" />
              
              <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative flex flex-col pt-12 pb-6">
                
                {/* Header */}
                <div className="px-5 mb-6">
                  <h3 className="font-bold text-2xl text-slate-800">Balance</h3>
                  <p className="text-sm text-slate-500">Tu progreso de compra consciente.</p>
                </div>

                {/* Filters */}
                <div className="px-5 flex gap-3 mb-6">
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-2.5 flex justify-between items-center shadow-sm">
                    <span className="text-xs font-semibold text-slate-700">Todo el tiempo</span>
                    <Filter size={14} className="text-slate-400" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-xl p-2.5 flex justify-between items-center shadow-sm">
                    <span className="text-xs font-semibold text-slate-700">Categorías</span>
                    <Filter size={14} className="text-slate-400" />
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="px-5 grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                      <Wallet size={16} />
                    </div>
                    <p className="text-xl font-bold text-emerald-700">187,00 €</p>
                    <p className="text-xs font-medium text-emerald-600/70">Ahorrado</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2">
                      <PieChart size={16} />
                    </div>
                    <p className="text-xl font-bold text-orange-700">1264,00 €</p>
                    <p className="text-xs font-medium text-orange-600/70">Gastado</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="px-5 mb-6">
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-emerald-600">Ahorrado</span>
                    <span className="text-slate-800">187,00 €</span>
                  </div>
                  <div className="h-3 w-full bg-emerald-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[15%]" />
                  </div>
                  
                  <div className="flex justify-between text-xs font-bold mt-4 mb-2">
                    <span className="text-orange-600">Gastado</span>
                    <span className="text-slate-800">1264,00 €</span>
                  </div>
                  <div className="h-3 w-full bg-orange-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-[85%]" />
                  </div>
                </div>

                {/* Activity List */}
                <div className="px-5 flex-1 overflow-hidden flex flex-col">
                  <div className="flex justify-between items-end mb-3">
                    <h4 className="font-bold text-slate-800">Actividad</h4>
                    <span className="text-xs text-slate-500 font-medium">6 items</span>
                  </div>
                  
                  <div className="space-y-3 overflow-hidden">
                    {[
                      { name: 'Pantalones nuevos', type: 'Ahorrado', amount: '+35,00 €', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                      { name: 'El código Davinci', type: 'Comprado', amount: '-19,00 €', color: 'text-orange-600', bg: 'bg-orange-50' },
                      { name: 'Zapatillas Nike', type: 'Ahorrado', amount: '+120,00 €', color: 'text-emerald-600', bg: 'bg-emerald-50' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                            <div className={`w-3 h-3 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{item.name}</p>
                            <p className={`text-xs font-bold ${item.color}`}>{item.type}</p>
                          </div>
                        </div>
                        <span className={`font-bold text-sm ${item.color}`}>{item.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>

                 {/* App Tab Bar */}
                 <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-100 flex items-center justify-around px-4">
                     <div className="flex flex-col items-center gap-1 text-slate-400">
                       <div className="w-6 h-6 rounded bg-slate-200" />
                     </div>
                     <div className="flex flex-col items-center -mt-6">
                       <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 border-4 border-slate-50">
                         <span className="text-2xl font-light">+</span>
                       </div>
                     </div>
                     <div className="flex flex-col items-center gap-1 text-primary-600">
                       <Wallet size={24} fill="currentColor" className="opacity-20" />
                     </div>
                  </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
