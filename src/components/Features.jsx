import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ShieldCheck, ShoppingBag, Coins } from 'lucide-react';

const features = [
  {
    title: 'Menos arrepentimiento',
    description: 'Evita compras que haces en caliente y luego te lamentas. El tiempo lo cura todo, incluso las ganas de comprar.',
    icon: <BrainCircuit size={24} className="text-primary-600" />,
    color: 'bg-primary-50',
    className: 'md:col-span-2 md:row-span-1'
  },
  {
    title: 'Más control',
    description: 'Tú decides cuándo romper la pausa y actuar. Recupera el mando de tus finanzas.',
    icon: <ShieldCheck size={24} className="text-success" />,
    color: 'bg-emerald-50',
    className: 'md:col-span-1 md:row-span-2'
  },
  {
    title: 'Compra mejor',
    description: 'Elige lo que realmente necesitas y te hace la vida mejor, descartando lo supérfluo.',
    icon: <ShoppingBag size={24} className="text-accent" />,
    color: 'bg-purple-50',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Que decida la suerte',
    description: '¿No puedes esperar? Lanza la moneda virtual. Si sale cruz, descartas la compra y el dinero va a tus ahorros.',
    icon: <Coins size={24} className="text-amber-500" />,
    color: 'bg-amber-50',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Decide con <span className="text-primary-600">cabeza</span>, <br className="hidden sm:block" /> no por impulso
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Pausa no es solo una app para controlar gastos. Su filosofía es ayudarte a crear un pequeño espacio entre el deseo y la decisión.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[250px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${feature.color} ${feature.className} relative overflow-hidden group`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">{feature.description}</p>
              
              {/* Background gradient effect on hover */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/40 rounded-full blur-2xl group-hover:bg-white/60 transition-all duration-500 z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
