import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { ShieldCheck, Clock, Settings, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();
  
  const trustPoints = [
    { icon: Settings, label: t('trustIntegrated') },
    { icon: HardHat, label: t('trustQuality') },
    { icon: Clock, label: t('trustTime') },
    { icon: ShieldCheck, label: t('trustSafety') },
  ];

  return (
    <div className="bg-graphite-950 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/5 rtl:divide-x-reverse">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={index} 
                className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-white/50 hover:text-white transition-colors group px-4 text-center md:text-start"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary-500 group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-semibold text-xs tracking-wider uppercase md:text-sm">{point.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
