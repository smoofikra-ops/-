import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { services } from '../data';
import { Fuel, RefreshCw, HardHat, Map, Zap, Paintbrush, Layers, ClipboardList, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = {
  Fuel, RefreshCw, HardHat, Map, Zap, Paintbrush, Layers, ClipboardList
};

export const Services: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-graphite-50 min-h-screen font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'ar' ? 'خدماتنا | تكامل الذهبية' : 'Our Services | Takamul Aldahbia'}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-graphite-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">
                {language === 'ar' ? 'حلول هندسية متكاملة' : 'Integrated Engineering Solutions'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {t('servicesTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-graphite-300 font-light leading-relaxed text-balance">
              {t('servicesSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || HardHat;
              return (
                <motion.div
                  key={service.id}
                  id={service.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-white rounded-2xl p-10 border border-graphite-100 hover:border-primary-500/30 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col h-full scroll-mt-32 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="w-16 h-16 bg-graphite-50 rounded-2xl border border-graphite-200 flex items-center justify-center mb-8 group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors duration-500">
                    <Icon className="w-7 h-7 text-graphite-700 group-hover:text-primary-600 transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-graphite-900 mb-5 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title[language]}
                  </h3>
                  
                  <p className="text-graphite-500 text-lg font-light leading-relaxed flex-grow text-balance">
                    {service.description[language]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA section inside Services */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-graphite-950 rounded-3xl p-12 lg:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {language === 'ar' ? 'هل لديك مشروع في الاعتبار؟' : 'Have a project in mind?'}
              </h2>
              <p className="text-xl text-graphite-300 font-light leading-relaxed">
                {language === 'ar' 
                  ? 'دعنا نناقش متطلباتك ونقدم لك الحلول الهندسية الأمثل التي تلبي تطلعاتك.' 
                  : 'Let\'s discuss your requirements and provide you with optimal engineering solutions that meet your expectations.'}
              </p>
            </div>
            
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <Link 
                to="/quote"
                className="group flex items-center justify-center gap-3 w-full md:w-auto px-10 py-5 bg-primary-500 hover:bg-primary-400 text-white rounded-full font-bold text-lg transition-all shadow-[0_10px_20px_rgba(202,140,53,0.3)] hover:shadow-[0_15px_30px_rgba(202,140,53,0.4)]"
              >
                <span>{t('requestQuote')}</span>
                <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
