import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const CTASection: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-12 bg-primary-600 overflow-hidden">
      {/* Decorative architectural background */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 100 L100 0 M50 100 L100 50 M0 50 L50 0 M25 100 L100 25 M0 75 L75 0" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-pattern)" />
        </svg>
      </div>
      
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-700/80 to-transparent mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/40 via-transparent to-graphite-950/40 mix-blend-overlay"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-1 bg-white/30 mx-auto mb-10"
        ></motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight"
        >
          {t('ctaTitle')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-14 max-w-3xl mx-auto text-balance"
        >
          {t('ctaDesc')}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link 
            to="/quote" 
            className="group flex items-center justify-center gap-4 w-full sm:w-auto px-10 py-5 bg-graphite-950 hover:bg-graphite-900 text-white rounded-full font-semibold text-lg transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
          >
            <span>{t('requestQuote')}</span>
            <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
          <a 
            href="#" 
            className="group flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg transition-all hover:-translate-y-1"
          >
            {t('contactWhatsApp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
