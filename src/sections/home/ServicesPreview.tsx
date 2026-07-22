import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Fuel, RefreshCw, HardHat, Map, Zap, Paintbrush, Layers, ClipboardList, ArrowRight, ArrowLeft } from 'lucide-react';
import { services } from '../../data';

const iconMap: Record<string, React.ElementType> = {
  Fuel, RefreshCw, HardHat, Map, Zap, Paintbrush, Layers, ClipboardList
};

export const ServicesPreview: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;
  
  const displayedServices = services.slice(0, 6); // Show top 6

  return (
    <section className="py-12 bg-graphite-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-graphite-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">{t('services')}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-graphite-950 leading-tight mb-6"
            >
              {t('servicesTitle')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-graphite-500 text-lg md:text-xl font-light leading-relaxed text-balance"
            >
              {t('servicesSubtitle')}
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
              to="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white border border-graphite-200 hover:border-primary-500 text-graphite-900 rounded-full font-medium transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <span>{language === 'ar' ? 'استكشف جميع الخدمات' : 'Explore All Services'}</span>
              <Arrow className="w-4 h-4 text-primary-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service, index) => {
            const Icon = iconMap[service.icon] || HardHat;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-graphite-100 hover:border-transparent flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-graphite-50 flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-500 ease-out">
                  <Icon className="w-7 h-7 text-graphite-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold text-graphite-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title[language]}
                </h3>
                
                <p className="text-graphite-500 text-base leading-relaxed mb-8 flex-grow font-light text-balance">
                  {service.description[language]}
                </p>
                
                <Link 
                  to={`/services#${service.slug}`} 
                  className="inline-flex items-center gap-2 text-graphite-900 font-semibold group/link mt-auto"
                >
                  <span className="text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary-500 after:scale-x-0 group-hover/link:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left rtl:after:origin-right">
                    {t('viewDetails')}
                  </span>
                  <Arrow className="w-4 h-4 text-primary-500 group-hover/link:translate-x-1 transition-transform rtl:group-hover/link:-translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            to="/services"
            className="group inline-flex items-center justify-center w-full gap-3 px-8 py-4 bg-white border border-graphite-200 hover:border-primary-500 text-graphite-900 rounded-full font-medium transition-all"
          >
            <span>{language === 'ar' ? 'استكشف جميع الخدمات' : 'Explore All Services'}</span>
            <Arrow className="w-4 h-4 text-primary-500 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
