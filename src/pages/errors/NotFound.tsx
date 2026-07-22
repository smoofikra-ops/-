import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { SEO } from '../../components/seo/SEO';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, ArrowRight } from 'lucide-react';

export const NotFound: React.FC = () => {
  const { language } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-graphite-50 flex items-center justify-center p-4">
      <SEO 
        fallbackTitle={language === 'ar' ? 'الصفحة غير موجودة | تكامل الذهبية' : 'Page Not Found | Takamul Aldahbia'}
        fallbackDescription={language === 'ar' ? 'الصفحة التي تبحث عنها غير موجودة' : 'The page you are looking for does not exist'}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-graphite-100"
      >
        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        
        <h1 className="text-6xl font-bold text-graphite-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-graphite-800 mb-4">
          {language === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-graphite-500 mb-8">
          {language === 'ar' 
            ? 'عذراً، الصفحة التي تحاول الوصول إليها غير موجودة أو تم نقلها.' 
            : 'Sorry, the page you are trying to access does not exist or has been moved.'}
        </p>
        
        <Link 
          to="/"
          className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
        >
          <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
          <Arrow className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
};
