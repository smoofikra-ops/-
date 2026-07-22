import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-graphite-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">{t('about')}</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-graphite-950 mb-8 leading-[1.1] tracking-tight">
              {t('aboutTitle')}
            </h2>
            
            <p className="text-graphite-500 text-xl font-light leading-relaxed mb-8 text-balance max-w-lg">
              {t('aboutSubtitle')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-14">
              <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
                <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[2px] h-full bg-graphite-100">
                  <div className="w-full h-1/2 bg-primary-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-graphite-900 mb-3">{t('visionTitle')}</h3>
                <p className="text-graphite-500 text-base font-light leading-relaxed">{t('visionDesc')}</p>
              </div>
              <div className="relative pl-6 rtl:pl-0 rtl:pr-6">
                <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-[2px] h-full bg-graphite-100">
                  <div className="w-full h-1/2 bg-primary-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-graphite-900 mb-3">{t('missionTitle')}</h3>
                <p className="text-graphite-500 text-base font-light leading-relaxed">{t('missionDesc')}</p>
              </div>
            </div>

            <Link 
              to="/about" 
              className="group inline-flex items-center gap-4 px-8 py-4 bg-graphite-950 hover:bg-graphite-900 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{t('viewDetails')}</span>
              <Arrow className="w-5 h-5 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.12)] bg-graphite-100"
          >
            <img 
              src="/assets/project-2.jpg" 
              alt="Engineering Construction" 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-graphite-950/20 to-transparent"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-2xl">
              <p className="text-white font-bold text-2xl mb-2">{language === 'ar' ? 'نفهم متطلبات السوق السعودي' : 'Understanding the Saudi Market'}</p>
              <p className="text-white/80 text-base font-light">{language === 'ar' ? 'نطبق أعلى معايير الجودة والسلامة في كل مشروع.' : 'Applying the highest quality and safety standards in every project.'}</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
