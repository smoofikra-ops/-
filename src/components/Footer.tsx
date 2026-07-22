import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const Arrow = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <footer className="bg-gradient-to-b from-graphite-950/0 via-graphite-950/90 to-graphite-950 text-white pt-24 pb-10 relative overflow-hidden group border-t-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          
          {/* Brand & Brief */}
          <div className="space-y-6 hover:-translate-y-1 transition-transform duration-500">
            <Link to="/" className="inline-block mb-4">
              <Logo variant="light" className="h-12" />
            </Link>
            <p className="text-white/80 leading-relaxed text-base">
              {t('companyBrief')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="hover:-translate-y-1 transition-transform duration-500">
            <h3 className="text-lg font-bold tracking-wider mb-6 text-white">{t('quickLinks')}</h3>
            <ul className="space-y-4">
              {['about', 'services', 'projects', 'process', 'quality'].map((item) => (
                <li key={item}>
                  <Link to={`/${item}`} className="group/link inline-flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors text-base font-medium">
                    <Arrow className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 rtl:-translate-x-0 rtl:translate-x-2 rtl:group-hover/link:translate-x-0 transition-all duration-300" />
                    <span>{t(item)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="hover:-translate-y-1 transition-transform duration-500">
            <h3 className="text-lg font-bold tracking-wider mb-6 text-white">{t('services')}</h3>
            <ul className="space-y-4">
              <li className="text-white/70 text-base font-medium hover:text-primary-400 transition-colors cursor-default">{language === 'ar' ? 'إنشاء محطات الوقود' : 'Fuel Station Construction'}</li>
              <li className="text-white/70 text-base font-medium hover:text-primary-400 transition-colors cursor-default">{language === 'ar' ? 'تطوير المحطات' : 'Station Development'}</li>
              <li className="text-white/70 text-base font-medium hover:text-primary-400 transition-colors cursor-default">{language === 'ar' ? 'الأعمال الإنشائية' : 'Structural Works'}</li>
              <li className="text-white/70 text-base font-medium hover:text-primary-400 transition-colors cursor-default">{language === 'ar' ? 'البنية التحتية' : 'Infrastructure'}</li>
              <li className="text-white/70 text-base font-medium hover:text-primary-400 transition-colors cursor-default">{language === 'ar' ? 'الأعمال الكهروميكانيكية' : 'MEP Works'}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="hover:-translate-y-1 transition-transform duration-500">
            <h3 className="text-lg font-bold tracking-wider mb-6 text-white">{t('contactInfo')}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/70 font-medium text-base hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{language === 'ar' ? 'المملكة العربية السعودية، الرياض' : 'Saudi Arabia, Riyadh'}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors text-base font-medium">
                <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="tel:+966541254650" dir="ltr" className="tracking-widest">054 125 4650</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors text-base font-medium">
                <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="mailto:ayman@takamull.com" dir="ltr">ayman@takamull.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/70 hover:text-primary-400 transition-colors text-base font-medium">
                <Globe className="w-5 h-5 text-primary-500 shrink-0" />
                <a href="https://www.takamull.com" target="_blank" rel="noopener noreferrer" dir="ltr">www.takamull.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 hover:-translate-y-1 transition-transform duration-500">
          <p className="text-white/60 text-sm tracking-wider font-medium">
            &copy; {new Date().getFullYear()} Takamul Aldahbia. {t('allRightsReserved')}
          </p>
          <div className="flex gap-8 text-sm tracking-wider font-medium">
            <Link to="/privacy" className="text-white/60 hover:text-primary-400 transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms" className="text-white/60 hover:text-primary-400 transition-colors">{t('terms')}</Link>
          </div>
          <p className="text-white/50 text-xs tracking-widest uppercase font-semibold">
            {t('designBy')}
          </p>
        </div>
      </div>
    </footer>
  );
};
