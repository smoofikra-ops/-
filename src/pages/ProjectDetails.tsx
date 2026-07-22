import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowLeft, Calendar, Building2, Target } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;
  
  const project = projects.find(p => p.slug === slug);
  const relatedProjects = projects.filter(p => p.id !== project?.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="bg-graphite-50 min-h-screen font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{`${project.title[language]} | Takamul Aldahbia`}</title>
      </Helmet>

      {/* Premium Edge-to-Edge Hero */}
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-end">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title[language]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent opacity-90"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-graphite-300 hover:text-white font-medium mb-8 transition-colors group text-sm uppercase tracking-wider"
            >
              <Arrow className="w-4 h-4 group-hover:-translate-x-1 transition-transform rtl:group-hover:translate-x-1 rotate-180" />
              <span>{t('allProjects')}</span>
            </Link>

            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight">
              {project.title[language]}
            </h1>
            
            <p className="text-xl md:text-2xl text-graphite-300 font-light leading-relaxed max-w-2xl text-balance">
              {project.shortDescription[language]}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Facts Strip */}
      <section className="bg-white border-b border-graphite-100 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-8 rounded-t-2xl shadow-sm">
        <div className="max-w-7xl mx-auto py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-graphite-100 rtl:divide-x-reverse px-8">
            <div className="px-4">
              <span className="block text-xs font-bold text-graphite-400 uppercase tracking-wider mb-2">{t('projectType')}</span>
              <span className="flex items-center gap-2 text-lg font-semibold text-graphite-900">
                <Building2 className="w-5 h-5 text-primary-500" />
                {project.type[language]}
              </span>
            </div>
            {project.location && (
              <div className="px-4">
                <span className="block text-xs font-bold text-graphite-400 uppercase tracking-wider mb-2">{t('projectLocation')}</span>
                <span className="flex items-center gap-2 text-lg font-semibold text-graphite-900">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  {project.location[language]}
                </span>
              </div>
            )}
            <div className="px-4">
              <span className="block text-xs font-bold text-graphite-400 uppercase tracking-wider mb-2">{language === 'ar' ? 'القطاع' : 'Sector'}</span>
              <span className="flex items-center gap-2 text-lg font-semibold text-graphite-900">
                <Target className="w-5 h-5 text-primary-500" />
                {language === 'ar' ? 'محطات الوقود' : 'Fuel Stations'}
              </span>
            </div>
            <div className="px-4">
              <span className="block text-xs font-bold text-graphite-400 uppercase tracking-wider mb-2">{language === 'ar' ? 'سنة الإنجاز' : 'Year'}</span>
              <span className="flex items-center gap-2 text-lg font-semibold text-graphite-900">
                <Calendar className="w-5 h-5 text-primary-500" />
                2023 - 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-20">
              
              <div className="prose prose-lg max-w-none text-graphite-600">
                <h2 className="text-3xl md:text-4xl font-bold text-graphite-900 mb-8 tracking-tight">
                  {language === 'ar' ? 'نظرة عامة على المشروع' : 'Project Overview'}
                </h2>
                <p className="text-xl leading-relaxed text-graphite-500 font-light text-balance mb-8">
                  {language === 'ar' 
                    ? 'تم تنفيذ هذا المشروع وفق أعلى المعايير الفنية والتقنية التي تلبي متطلبات قطاع محطات الوقود. اعتمد فريق تكامل الذهبية على التخطيط الدقيق والإدارة المتكاملة لضمان التسليم في الوقت المحدد وبجودة استثنائية تعكس التزامنا بالتميز.'
                    : 'This project was executed according to the highest technical standards meeting the fuel station sector requirements. Takamul Aldahbia’s team relied on precise planning and integrated management to ensure timely delivery with exceptional quality.'}
                </p>
                <p>
                  {language === 'ar'
                    ? 'تعتبر محطات الوقود الحديثة أكثر من مجرد نقطة تعبئة، بل هي مراكز خدمة متكاملة تتطلب بنية تحتية قوية، وأنظمة سلامة متطورة، وتصميم يحقق انسيابية الحركة. حرصنا في هذا المشروع على توفير بيئة متكاملة تخدم رواد المحطة بكفاءة وأمان تام.'
                    : 'Modern fuel stations are more than just filling points; they are integrated service centers requiring robust infrastructure, advanced safety systems, and traffic flow design. In this project, we ensured a complete environment that serves station visitors with efficiency and total safety.'}
                </p>
              </div>

              <div className="relative pl-8 rtl:pl-0 rtl:pr-8 py-4">
                <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-1 h-full bg-primary-500"></div>
                <h3 className="text-2xl font-bold text-graphite-900 mb-4">{language === 'ar' ? 'التحدي والتنفيذ' : 'Challenge & Execution'}</h3>
                <p className="text-lg text-graphite-600 font-light leading-relaxed">
                  {language === 'ar'
                    ? 'تطلب المشروع الالتزام بجداول زمنية صارمة مع الحفاظ على أعلى معايير الجودة، خاصة في الأنظمة الكهروميكانيكية المتكاملة وتمديدات الوقود. تم التغلب على التحديات عبر توفير فرق عمل متخصصة تعمل بتناغم وبإشراف هندسي دقيق طوال فترة المشروع.'
                    : 'The project required strict adherence to tight schedules while maintaining the highest quality standards, especially in integrated electromechanical systems and fuel pipelines. Challenges were overcome by deploying specialized teams working in harmony under precise engineering supervision throughout the project.'}
                </p>
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="text-3xl font-bold text-graphite-900 mb-10 tracking-tight">
                    {language === 'ar' ? 'معرض الصور' : 'Gallery'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((img, idx) => (
                      <motion.div 
                        key={idx} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="rounded-2xl overflow-hidden aspect-[4/3] bg-graphite-100 group"
                      >
                        <img 
                          src={img} 
                          alt={`${project.title[language]} - Image ${idx + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.04)] sticky top-32 border border-graphite-100">
                <h3 className="text-xl font-bold text-graphite-900 mb-8">
                  {language === 'ar' ? 'نطاق العمل الرئيسي' : 'Main Scope of Work'}
                </h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-graphite-50 flex items-center justify-center shrink-0 border border-graphite-100">
                      <span className="text-primary-600 font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'الأعمال المدنية' : 'Civil Works'}</h4>
                      <p className="text-sm text-graphite-500 leading-relaxed">{language === 'ar' ? 'تخطيط وتجهيز الموقع والأعمال الإنشائية.' : 'Site planning, preparation, and structural works.'}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-graphite-50 flex items-center justify-center shrink-0 border border-graphite-100">
                      <span className="text-primary-600 font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'الأنظمة الكهروميكانيكية' : 'MEP Systems'}</h4>
                      <p className="text-sm text-graphite-500 leading-relaxed">{language === 'ar' ? 'تركيب البنية التحتية والأنظمة المتكاملة.' : 'Installation of infrastructure and integrated systems.'}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-graphite-50 flex items-center justify-center shrink-0 border border-graphite-100">
                      <span className="text-primary-600 font-bold">03</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'التشطيبات والهوية' : 'Finishes & Identity'}</h4>
                      <p className="text-sm text-graphite-500 leading-relaxed">{language === 'ar' ? 'التشطيبات المعمارية وتنفيذ الهوية البصرية.' : 'Architectural finishes and visual identity execution.'}</p>
                    </div>
                  </li>
                </ul>

                <hr className="my-10 border-graphite-100" />
                
                <div className="text-center">
                  <h4 className="font-bold text-graphite-900 mb-2">
                    {language === 'ar' ? 'هل لديك مشروع مشابه؟' : 'Have a similar project?'}
                  </h4>
                  <p className="text-graphite-500 text-sm mb-6">
                    {language === 'ar' ? 'فريقنا الهندسي جاهز لدراسة مشروعك.' : 'Our engineering team is ready to study your project.'}
                  </p>
                  <Link 
                    to="/quote"
                    className="inline-flex w-full items-center justify-center gap-3 bg-graphite-950 hover:bg-primary-600 text-white px-6 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <span>{t('requestQuote')}</span>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-24 bg-graphite-950 text-white border-t border-graphite-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-950/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {language === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'}
              </h2>
              <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors group">
                <span>{t('allProjects')}</span>
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((rp, idx) => (
                <Link 
                  key={rp.id} 
                  to={`/projects/${rp.slug}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[4/3] bg-graphite-900 border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <img src={rp.image} alt={rp.title[language]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{rp.title[language]}</h3>
                    <p className="text-graphite-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">{rp.shortDescription[language]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
};
