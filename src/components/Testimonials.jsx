import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { text: "Me ha salvado de comprar 3 tonterías esta semana. Increíble.", author: "Carlos M." },
  { text: "La regla de las 24 horas automatizada. Brillante y muy bien diseñada.", author: "Laura G." },
  { text: "Al fin una app financiera que no te hace sentir culpable.", author: "David P." },
  { text: "Lanzar la moneda cuando no puedo decidir es sorprendentemente útil.", author: "Ana S." },
  { text: "He ahorrado más de 200€ este mes solo por esperar unos días.", author: "Miguel Ángel" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={24} className="text-accent fill-accent" />
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Miles de personas ya compran mejor y ahorran más
          </h2>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex whitespace-nowrap gap-6 px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* Duplicate array for seamless loop */}
          {[...testimonials, ...testimonials].map((t, index) => (
            <div 
              key={index}
              className="inline-flex flex-col justify-between w-[300px] h-[180px] p-6 rounded-2xl bg-slate-50 border border-slate-100 whitespace-normal shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <p className="text-slate-700 font-medium leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center justify-between mt-4">
                <span className="font-bold text-slate-900 text-sm">{t.author}</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
