import React from 'react';
import { motion } from 'framer-motion';
import { Download, Apple } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[3rem] overflow-hidden bg-slate-900 px-6 py-16 md:py-24 text-center z-10"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-slate-900" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0]
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -top-24 -left-24 w-96 h-96 bg-primary-600 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [0, -40, 0],
                y: [0, 40, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]" 
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Toma el control de tus impulsos hoy
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10">
              Únete a miles de personas que ya están ahorrando y comprando con más intención. Empieza tu primera pausa gratis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl bg-white px-8 text-base font-bold text-slate-900 transition-transform hover:scale-105 active:scale-95 shadow-xl">
                <Apple size={20} fill="currentColor" />
                Descargar en App Store
              </button>
              <button className="flex items-center justify-center gap-3 h-14 rounded-2xl bg-slate-800 border border-slate-700 px-8 text-base font-bold text-white transition-all hover:bg-slate-700 hover:scale-105 active:scale-95">
                <Download size={20} />
                Obtener para Android
              </button>
            </div>
            
            <p className="text-slate-400 text-sm mt-8">Gratis para descargar. Sin anuncios.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
