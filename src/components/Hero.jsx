import React from 'react';
import { motion } from 'framer-motion';
import { Play, ShieldCheck, ChevronRight, Pause } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/30 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-primary-200">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-ping" />
              <span className="text-sm font-medium text-primary-800">La nueva forma de comprar con cabeza</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Pausa una compra en <span className="text-gradient">segundos</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Añade el producto, elige un plazo de reflexión y deja que el impulso se enfríe. Cuando llegue el momento, toma una decisión más consciente.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 rounded-2xl bg-primary-600 px-8 text-base font-semibold text-white shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-1 hover:bg-primary-500 active:translate-y-0">
                Comienza a ahorrar
                <ChevronRight size={20} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 rounded-2xl bg-white px-8 text-base font-semibold text-slate-700 shadow-md border border-slate-200 transition-all hover:bg-slate-50 hover:-translate-y-1 active:translate-y-0">
                <Play fill="currentColor" size={16} />
                Ver cómo funciona
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-1">
                <ShieldCheck className="text-success" size={18} />
                <span>Sin conexión bancaria</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1">
                <ShieldCheck className="text-success" size={18} />
                <span>100% Privado</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Visual Showcase (Mockup) */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none relative z-10 perspective-1000"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] xl:aspect-square flex justify-center items-center"
            >
              {/* Phone Mockup Frame */}
              <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-900 rounded-b-3xl z-20" /> {/* Notch */}
                
                {/* App Screen */}
                <div className="w-full h-full bg-slate-50 rounded-[2.25rem] overflow-hidden relative flex flex-col pt-12 pb-6 px-5 border border-slate-200">
                  
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-2">
                        <div className="bg-primary-600 rounded-lg p-1.5 text-white">
                          <Pause size={14} fill="currentColor" />
                        </div>
                        <span className="font-bold text-slate-800 text-sm">Pausa</span>
                     </div>
                     <div className="w-8 h-8 rounded-full bg-slate-200" />
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-2xl text-slate-800 leading-tight">Tu yo de mañana te lo agradecerá.</h3>
                  </div>
                  
                  {/* Savings Card */}
                  <div className="bg-gradient-to-br from-primary-600 to-accent text-white p-5 rounded-2xl mb-6 shadow-lg shadow-primary-500/20 relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                    <p className="text-white/80 text-xs font-medium mb-1 relative z-10">Has evitado gastar este mes</p>
                    <p className="text-3xl font-bold relative z-10">187,00 €</p>
                  </div>
                  
                  <p className="text-xs font-semibold text-slate-500 mb-3 uppercase tracking-wider">En pausa</p>
                  
                  {/* List items */}
                  <div className="space-y-3 flex-1 overflow-hidden">
                    {[
                      { name: 'Cámara Sony', price: '700,00 €', time: '23h', icon: '📷', color: 'bg-blue-100' },
                      { name: 'Monitor 4K', price: '399,00 €', time: '6 días', icon: '🖥️', color: 'bg-indigo-100' },
                      { name: 'Juego Switch', price: '59,00 €', time: '14 días', icon: '🎮', color: 'bg-green-100' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
                         <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center text-lg`}>
                             {item.icon}
                           </div>
                           <div>
                             <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                             <p className="text-slate-500 text-xs font-medium">{item.price}</p>
                           </div>
                         </div>
                         <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-primary-100 text-primary-600 text-xs font-bold bg-primary-50/50">
                           {item.time.replace('días','d')}
                         </div>
                      </div>
                    ))}
                  </div>

                  {/* App Tab Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-4">
                     <div className="flex flex-col items-center gap-1 text-slate-400">
                       <div className="w-6 h-6 rounded bg-slate-200" />
                     </div>
                     <div className="flex flex-col items-center -mt-6">
                       <div className="w-14 h-14 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 border-4 border-slate-50">
                         <span className="text-2xl font-light">+</span>
                       </div>
                     </div>
                     <div className="flex flex-col items-center gap-1 text-slate-400">
                       <div className="w-6 h-6 rounded bg-slate-200" />
                     </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Floating Cards Details */}
              <motion.div 
                className="absolute -right-8 top-1/4 glass-dark rounded-2xl p-4 flex items-center gap-3 hidden md:flex"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                  <span className="font-bold">?</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Decide luego</p>
                  <p className="text-xs text-slate-500">Sin arrepentimientos</p>
                </div>
              </motion.div>
              
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
