import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;
  
  // Animated text loop
  const arPhrases = ['نخطط بدقة', 'نبني بثقة', 'نسلّم بجودة'];
  const enPhrases = ['We plan with precision', 'We build with confidence', 'We deliver with quality'];
  
  const phrases = language === 'ar' ? arPhrases : enPhrases;
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000); // 4 seconds per phrase
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative w-full h-[100svh] min-h-[700px] max-h-[1200px] overflow-hidden flex items-center bg-graphite-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-graphite-950">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-bg.jpg"
          className="w-full h-full object-cover opacity-60 scale-105 transform motion-safe:animate-[slowZoom_40s_ease-in-out_infinite_alternate]"
        >
          <source src="https://c.top4top.io/m_3855a65sq1.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <img 
            src="/assets/hero-bg.jpg" 
            alt="Fuel Station Construction" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/90 via-graphite-950/30 to-transparent rtl:from-transparent rtl:via-graphite-950/30 rtl:to-graphite-950/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <div className="h-8 flex items-center mb-4">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-3 text-primary-400 font-semibold tracking-widest uppercase text-xs md:text-sm"
                >
                  <span className="w-8 h-[1px] bg-primary-400"></span>
                  {phrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              <span className="block mb-2">{t('heroTitleLine1')}</span>
              <span className="block text-primary-400 drop-shadow-lg">{t('heroTitleLine2')}</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-graphite-200 text-lg md:text-2xl max-w-2xl leading-relaxed mb-8 font-light"
          >
            {t('heroDescription')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Link 
              to="/projects" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-9 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold text-lg transition-all shadow-[0_0_20px_rgba(202,140,53,0.3)] hover:shadow-[0_0_30px_rgba(202,140,53,0.5)]"
            >
              <span>{t('exploreProjects')}</span>
              <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/quote" 
              className="flex items-center justify-center w-full sm:w-auto px-9 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/10 font-semibold text-lg transition-colors"
            >
              {t('requestQuote')}
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
