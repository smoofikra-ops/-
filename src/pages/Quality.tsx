import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { translations } from '../i18n/translations';
import { Shield, CheckCircle, Award, HardHat, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Quality: React.FC = () => {
  const { language, t } = useLanguage();
  const points = translations[language].qualityPoints as string[];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-graphite-950 min-h-screen font-sans text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'ar' ? 'الجودة والسلامة | تكامل الذهبية' : 'Quality & Safety | Takamul Aldahbia'}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-950/40 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary-500"></div>
                <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">
                  {language === 'ar' ? 'معاييرنا' : 'Our Standards'}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
                {t('qualityTitle')}
              </h1>
              <p className="text-xl md:text-2xl text-graphite-300 font-light leading-relaxed text-balance">
                {language === 'ar' 
                  ? 'نتبنى أعلى المعايير العالمية لضمان سلامة الأرواح، استدامة المشاريع، وتجاوز توقعات عملائنا.'
                  : 'We adopt the highest global standards to ensure life safety, project sustainability, and exceeding client expectations.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex w-32 h-32 rounded-full border border-white/10 items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(202,140,53,0.1)]"
            >
              <Shield className="w-14 h-14 text-primary-400" strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Points Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 rounded-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="mt-1">
                    <CheckCircle className="w-8 h-8 text-primary-400 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                  </div>
                  <p className="text-white/80 font-light text-xl leading-relaxed">{point}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-24 border-t border-white/5 bg-graphite-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              {language === 'ar' ? 'الاعتمادات والتسجيل الرسمي' : 'Documentation & Registration'}
            </h2>
            <p className="text-graphite-400 font-light text-lg">
              {language === 'ar' 
                ? 'نعمل وفق الأنظمة والقوانين التجارية المعتمدة في المملكة ونلتزم بكافة المتطلبات الرسمية.'
                : 'We operate according to approved commercial laws in the Kingdom and commit to all official requirements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center"
            >
              <Award className="w-12 h-12 text-primary-500 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'منشأة مسجلة رسمياً' : 'Officially Registered'}</h3>
              <p className="text-graphite-400 font-light">{language === 'ar' ? 'نعمل تحت مظلة قانونية وتجارية موثقة ومعتمدة من وزارة التجارة.' : 'Operating under a documented legal framework approved by the Ministry of Commerce.'}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center"
            >
              <FileCheck className="w-12 h-12 text-primary-500 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'تسجيل القيمة المضافة' : 'VAT Registered'}</h3>
              <p className="text-graphite-400 font-light">{language === 'ar' ? 'نلتزم بالمتطلبات الضريبية وفق اشتراطات هيئة الزكاة والضريبة.' : 'Committed to tax requirements set by the Zakat and Tax Authority.'}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center"
            >
              <HardHat className="w-12 h-12 text-primary-500 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">{language === 'ar' ? 'تصنيف المقاولين' : 'Contractors Classification'}</h3>
              <p className="text-graphite-400 font-light">{language === 'ar' ? 'نحمل التراخيص والاعتمادات اللازمة لتنفيذ مشاريع محطات الوقود.' : 'Holding necessary licenses and approvals to execute fuel station projects.'}</p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};
