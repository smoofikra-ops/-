import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { translations } from '../../i18n/translations';

export const WhyUs: React.FC = () => {
  const { language, t } = useLanguage();
  
  // Need to safely cast as string[] to map over it
  const points = translations[language].whyUsPoints as string[];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">{language === 'ar' ? 'لماذا تكامل؟' : 'Why Takamul?'}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-graphite-950 mb-8 leading-[1.1] tracking-tight">
              {t('whyUsTitle')}
            </h2>
            
            <p className="text-graphite-500 text-xl font-light leading-relaxed mb-8 text-balance max-w-lg">
              {t('whyUsSubtitle')}
            </p>
            
            <div className="space-y-6">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full border border-graphite-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-primary-500 group-hover:bg-primary-50 transition-colors duration-300">
                    <Check className="w-4 h-4 text-graphite-400 group-hover:text-primary-600 transition-colors duration-300" strokeWidth={2.5} />
                  </div>
                  <span className="text-graphite-800 text-lg font-medium leading-relaxed group-hover:text-graphite-950 transition-colors duration-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden relative shadow-[0_20px_40px_rgb(0,0,0,0.08)] bg-graphite-100">
              <img 
                src="/assets/project-4.jpg" 
                alt="Why choose us" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-graphite-950/10 mix-blend-multiply"></div>
            </div>
            
            {/* Overlay Stats/Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 -left-10 rtl:left-auto rtl:-right-10 bg-graphite-950 p-10 rounded-lg shadow-2xl max-w-[320px] hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <p className="text-white text-xl font-bold leading-tight">
                  {language === 'ar' ? 'اعتماد وجودة' : 'Certified Quality'}
                </p>
              </div>
              <p className="text-graphite-300 text-base font-light leading-relaxed">
                {language === 'ar' ? 'التزام تام بأعلى معايير الأمن والسلامة في جميع مشاريعنا.' : 'Total commitment to the highest security and safety standards in all our projects.'}
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
