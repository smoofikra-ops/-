import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';

export const Partners: React.FC = () => {
  const { t, language } = useLanguage();
  
  const partners = [
    { id: 'joil', name: 'J-OIL', logo: '/assets/partner-joil.png' },
    { id: 'gostation', name: 'GO Station', logo: '/assets/partner-go.png' },
  ];

  return (
    <section className="py-12 bg-white  overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm md:text-base font-bold text-graphite-400 tracking-[0.2em] uppercase mb-4"
          >
            {t('partnersTitle')}
          </motion.h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-32">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-50 hover:opacity-100 scale-95 hover:scale-100"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-20 md:h-28 object-contain mix-blend-multiply"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
