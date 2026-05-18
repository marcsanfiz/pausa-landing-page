import React from 'react';
import { Pause, Globe, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Pause fill="currentColor" size={16} />
              </div>
              <span className="text-xl font-bold text-slate-900">Pausa</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              La app que te ayuda a frenar las compras impulsivas, ahorrar dinero y tomar decisiones financieras con más calma.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-primary-600 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-primary-600 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Producto</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-slate-500 hover:text-primary-600 transition-colors">Beneficios</a></li>
              <li><a href="#how-it-works" className="text-slate-500 hover:text-primary-600 transition-colors">Cómo funciona</a></li>
              <li><a href="#testimonials" className="text-slate-500 hover:text-primary-600 transition-colors">Testimonios</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Términos</a></li>
              <li><a href="#" className="text-slate-500 hover:text-primary-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Pausa App. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span>Hecho con ❤️ para gastar menos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
