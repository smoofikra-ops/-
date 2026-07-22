import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';
import { translations } from '../../i18n/translations';

export const QualityPreview: React.FC = () => {
  const { language, t } = useLanguage();
  const points = translations[language].qualityPoints as string[];

  return (
    <section className="py-12 bg-graphite-950 text-white relative overflow-hidden ">
      
      {/* Structural Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-10">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">{language === 'ar' ? 'الجودة والسلامة' : 'Quality & Safety'}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold leading-[1.1] tracking-tight"
            >
              {t('qualityTitle')}
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:flex w-24 h-24 rounded-full border border-white/10 items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm"
          >
            <Shield className="w-10 h-10 text-primary-400" strokeWidth={1.5} />
          </motion.div>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 flex flex-col h-full rounded-lg"
            >
              <div className="mb-6">
                <CheckCircle className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <p className="text-white/80 font-light text-xl leading-relaxed flex-grow">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
