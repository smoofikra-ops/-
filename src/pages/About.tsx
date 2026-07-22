import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Factory, Sparkles, Building, Briefcase, Activity } from 'lucide-react';
import { translations } from '../i18n/translations';

export const About: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-graphite-50 min-h-screen font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'ar' ? 'من نحن | تكامل الذهبية' : 'About Us | Takamul Aldahbia'}</title>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-graphite-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero-bg.jpg" alt="About Us" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-transparent"></div>
        </div>
        
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
                {language === 'ar' ? 'عن الشركة' : 'About Company'}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {language === 'ar' ? 'نصنع معايير جديدة في قطاع محطات الوقود' : 'Setting New Standards in Fuel Stations Sector'}
            </h1>
            <p className="text-xl md:text-2xl text-graphite-300 font-light leading-relaxed text-balance">
              {t('aboutSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-graphite-900 mb-8 tracking-tight">
                {t('aboutTitle')}
              </h2>
              <div className="prose prose-lg text-graphite-600 font-light leading-relaxed">
                <p>
                  {language === 'ar' 
                    ? 'تأسست شركة تكامل الذهبية للمقاولات برؤية طموحة تهدف إلى إحداث نقلة نوعية في قطاع بناء وتطوير محطات الوقود في المملكة العربية السعودية. منذ انطلاقتنا، كرسنا جهودنا لتقديم حلول هندسية متكاملة تجمع بين الجودة العالية، الأمان المطلق، والتصميم الحديث.'
                    : 'Takamul Aldahbia Contracting Company was established with an ambitious vision aiming to create a paradigm shift in the construction and development of fuel stations sector in Saudi Arabia. Since our inception, we have dedicated our efforts to providing integrated engineering solutions combining high quality, absolute safety, and modern design.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'نمتلك فريقاً من أمهر المهندسين والخبراء الذين يمتلكون فهماً عميقاً لمتطلبات السوق السعودي والأنظمة المحلية، مما يجعلنا الشريك الأمثل لكبرى العلامات التجارية في هذا القطاع الحيوي.'
                    : 'We possess a team of the most skilled engineers and experts with a deep understanding of the Saudi market requirements and local regulations, making us the ideal partner for major brands in this vital sector.'}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-graphite-200"
            >
              <img src="/assets/project-2.jpg" alt="Company overview" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-graphite-950/10 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-graphite-950 text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-primary-500/20 border border-primary-500/50 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6">{t('visionTitle')}</h3>
              <p className="text-xl text-graphite-300 font-light leading-relaxed">
                {t('visionDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-16 h-16 bg-primary-500/20 border border-primary-500/50 rounded-2xl flex items-center justify-center mb-8">
                <Trophy className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-3xl font-bold mb-6">{t('missionTitle')}</h3>
              <p className="text-xl text-graphite-300 font-light leading-relaxed">
                {t('missionDesc')}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats/Values Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-graphite-900 mb-6 tracking-tight">
              {language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h2>
            <p className="text-xl text-graphite-500 font-light leading-relaxed text-balance">
              {language === 'ar' 
                ? 'نستمد قوتنا من مجموعة مبادئ راسخة توجه كافة عملياتنا ومشاريعنا.'
                : 'We draw our strength from a set of solid principles that guide all our operations and projects.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: language === 'ar' ? 'الجودة' : 'Quality', desc: language === 'ar' ? 'الالتزام بأعلى المعايير العالمية في التنفيذ.' : 'Commitment to highest global execution standards.' },
              { icon: Users, title: language === 'ar' ? 'الشراكة' : 'Partnership', desc: language === 'ar' ? 'بناء علاقات طويلة الأمد مع عملائنا.' : 'Building long-term relationships with clients.' },
              { icon: Activity, title: language === 'ar' ? 'الابتكار' : 'Innovation', desc: language === 'ar' ? 'تبني أحدث التقنيات الهندسية وحلول الأمان.' : 'Adopting latest engineering tech and safety solutions.' },
              { icon: Building, title: language === 'ar' ? 'الاستدامة' : 'Sustainability', desc: language === 'ar' ? 'تنفيذ مشاريع تراعي المتطلبات البيئية الحديثة.' : 'Executing projects meeting modern environmental needs.' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-graphite-100 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow"
              >
                <div className="w-14 h-14 bg-graphite-50 rounded-xl flex items-center justify-center mb-6 border border-graphite-200">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-graphite-900 mb-3">{value.title}</h3>
                <p className="text-graphite-500 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
