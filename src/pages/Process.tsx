import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { processSteps } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-graphite-50 min-h-screen font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'ar' ? 'منهجية العمل | تكامل الذهبية' : 'Our Process | Takamul Aldahbia'}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-graphite-900 via-graphite-950 to-graphite-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">
                {language === 'ar' ? 'طريقة عملنا' : 'How We Work'}
              </span>
              <div className="w-12 h-px bg-primary-500"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {t('processTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-graphite-300 font-light leading-relaxed max-w-3xl mx-auto text-balance">
              {t('processSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-graphite-200 transform md:-translate-x-1/2">
            <div className="absolute top-0 left-0 w-full bg-primary-500 origin-top animate-[fillLine_3s_ease-out_forwards]"></div>
          </div>

          <div className="space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center justify-between md:justify-normal gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-graphite-100 flex items-center justify-center transform -translate-x-1/2 shadow-sm z-10 group-hover:border-primary-500 transition-colors duration-300">
                    <span className="text-xl font-bold text-graphite-900">0{step.id}</span>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12 pl-20 md:pl-0">
                    <div className={`bg-white p-8 rounded-2xl border border-graphite-100 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 ${isEven ? 'md:mr-12 rtl:md:ml-12 rtl:md:mr-0' : 'md:ml-12 rtl:md:mr-12 rtl:md:ml-0'}`}>
                      <h3 className="text-2xl font-bold text-graphite-900 mb-4">{step.title[language]}</h3>
                      <p className="text-graphite-500 font-light leading-relaxed text-lg mb-6">
                        {step.description[language]}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-primary-600">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{language === 'ar' ? 'مرحلة أساسية' : 'Key Phase'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/quote"
            className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-graphite-950 hover:bg-graphite-900 text-white rounded-full font-bold text-lg transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1"
          >
            <span>{language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}</span>
            <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
      
    </div>
  );
};
