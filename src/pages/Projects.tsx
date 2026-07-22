import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

export const Projects: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <Helmet>
        <title>{language === 'ar' ? 'مشاريعنا | تكامل الذهبية' : 'Our Projects | Takamul Aldahbia'}</title>
      </Helmet>

      <div className="pt-32 pb-16 bg-graphite-950 text-white min-h-screen relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary-950 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-primary-500"></div>
              <span className="text-primary-400 font-semibold tracking-wider text-sm uppercase">{language === 'ar' ? 'محفظة الأعمال' : 'Portfolio'}</span>
              <div className="w-12 h-px bg-primary-500"></div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[4rem] font-bold mb-6 tracking-tight leading-tight"
            >
              {t('projectsTitle')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-graphite-300 text-lg md:text-xl font-light leading-relaxed text-balance"
            >
              {t('projectsSubtitle')}
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-lg overflow-hidden bg-graphite-900 border border-white/5 hover:border-white/10 transition-all duration-500"
              >
                <Link to={`/projects/${project.slug}`} className="block aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title[language]} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6">
                    <span className="px-4 py-1.5 bg-graphite-950/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold tracking-wider text-white">
                      {project.type[language]}
                    </span>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {project.location && (
                      <div className="flex items-center gap-2 text-primary-400 mb-3 text-sm font-medium tracking-wide">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location[language]}</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                      {project.title[language]}
                    </h3>
                    
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-graphite-300 text-base font-light mb-6 line-clamp-2 leading-relaxed">
                        {project.shortDescription[language]}
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-semibold text-sm tracking-wide">
                        <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:origin-left rtl:after:origin-right">
                          {t('viewDetails')}
                        </span>
                        <Arrow className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};
