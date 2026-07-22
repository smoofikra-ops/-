import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { processSteps } from '../../data';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessPreview: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-12 bg-graphite-50 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">{t('process')}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite-950 mb-6 leading-[1.1] tracking-tight"
            >
              {t('processTitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-graphite-500 text-lg md:text-xl font-light leading-relaxed text-balance"
            >
              {t('processSubtitle')}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <Link 
              to="/process"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-graphite-200 hover:border-primary-500 text-graphite-900 rounded-full font-medium transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <span>{language === 'ar' ? 'اكتشف منهجيتنا' : 'Discover Our Methodology'}</span>
              <Arrow className="w-4 h-4 text-primary-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[40px] left-8 right-8 h-[2px] bg-graphite-200 z-0">
            <div className="absolute top-0 left-0 h-full bg-primary-500 w-full origin-left rtl:origin-right scale-x-0 animate-[fillLine_2s_ease-out_forwards] animation-delay-[500ms]"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 relative z-10">
            {processSteps.slice(0, 4).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white lg:bg-transparent rounded-2xl lg:rounded-none p-8 lg:p-0 border border-graphite-100 lg:border-none shadow-sm lg:shadow-none hover:shadow-xl lg:hover:shadow-none transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 border-4 border-graphite-50 shadow-[0_10px_20px_rgba(0,0,0,0.05)] mx-auto lg:mx-0 group-hover:border-primary-500 group-hover:scale-110 transition-all duration-500">
                  <span className="text-graphite-900 font-bold text-2xl group-hover:text-primary-600 transition-colors duration-300">0{step.id}</span>
                </div>
                <div className="text-center lg:text-start lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8">
                  <h3 className="text-2xl font-bold text-graphite-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">{step.title[language]}</h3>
                  <p className="text-graphite-500 text-base font-light leading-relaxed">
                    {step.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link 
            to="/process"
            className="group inline-flex items-center justify-center w-full gap-3 px-8 py-4 bg-white border border-graphite-200 hover:border-primary-500 text-graphite-900 rounded-full font-medium transition-all"
          >
            <span>{language === 'ar' ? 'اكتشف منهجيتنا' : 'Discover Our Methodology'}</span>
            <Arrow className="w-4 h-4 text-primary-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
