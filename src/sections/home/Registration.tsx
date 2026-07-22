import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { FileCheck, ShieldAlert, Award } from 'lucide-react';

export const Registration: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Award,
      title: language === 'ar' ? 'منشأة مسجلة رسمياً' : 'Officially Registered Establishment',
      desc: language === 'ar' ? 'نعمل وفق الأنظمة والقوانين التجارية المعتمدة في المملكة.' : 'Operating under the approved commercial laws and regulations in the Kingdom.'
    },
    {
      icon: FileCheck,
      title: language === 'ar' ? 'تسجيل ضريبة القيمة المضافة' : 'VAT Registered',
      desc: language === 'ar' ? 'ملتزمون بكافة المتطلبات الضريبية والمالية الرسمية.' : 'Committed to all official financial and tax requirements.'
    },
    {
      icon: ShieldAlert,
      title: language === 'ar' ? 'بيانات تجارية موثقة' : 'Documented Commercial Data',
      desc: language === 'ar' ? 'نتعامل بشفافية وموثوقية مع كافة عملائنا وشركائنا.' : 'We operate with transparency and reliability with all our clients and partners.'
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden border-t border-graphite-100" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-10">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-px bg-primary-500"></div>
              <span className="text-primary-600 font-semibold tracking-wider text-xs uppercase">{language === 'ar' ? 'الاعتمادات' : 'Credentials'}</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-graphite-950 mb-4 leading-tight tracking-tight"
            >
              {language === 'ar' ? 'الاعتمادات والتسجيل الرسمي' : 'Documentation & Registration'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-graphite-500 text-lg font-light leading-relaxed"
            >
              {language === 'ar' 
                ? 'نحرص في تكامل الذهبية على الالتزام الكامل بكافة المعايير والمتطلبات الرسمية لضمان الثقة والشفافية التامة.'
                : 'At Takamul Aldahbia, we ensure full compliance with all official standards and requirements to guarantee complete trust and transparency.'}
            </motion.p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-graphite-50 p-8 rounded-2xl hover:bg-white border border-transparent hover:border-graphite-200 transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.04)] group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-graphite-100 group-hover:border-primary-200 group-hover:bg-primary-50 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-graphite-900 mb-3 leading-tight">{feature.title}</h3>
                <p className="text-graphite-500 font-light text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
