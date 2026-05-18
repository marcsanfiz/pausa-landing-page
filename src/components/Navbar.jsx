import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Pause } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
          isScrolled ? 'glass-dark' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg">
              <Pause fill="currentColor" size={20} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Pausa</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Beneficios</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Cómo funciona</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">Testimonios</a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-slate-800 active:scale-95 shadow-md">
              Descargar App
            </button>
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2"
          >
            <div className="glass-dark rounded-2xl p-4 flex flex-col gap-4">
              <a href="#features" className="text-base font-medium text-slate-700 p-2" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
              <a href="#how-it-works" className="text-base font-medium text-slate-700 p-2" onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
              <a href="#testimonials" className="text-base font-medium text-slate-700 p-2" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
              <button className="mt-2 w-full h-12 items-center justify-center rounded-xl bg-primary-600 text-white font-medium shadow-lg shadow-primary-500/30">
                Descargar App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
