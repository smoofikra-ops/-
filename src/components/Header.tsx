import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Home, Info, Briefcase, Grid, Settings, ShieldCheck, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('home'), path: '/', icon: Home },
    { name: t('about'), path: '/about', icon: Info },
    { name: t('services'), path: '/services', icon: Briefcase },
    { name: t('projects'), path: '/projects', icon: Grid },
    { name: t('process'), path: '/process', icon: Settings },
    { name: t('quality'), path: '/quality', icon: ShieldCheck },
    { name: t('contact'), path: '/contact', icon: Phone },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const headerClasses = clsx(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent',
    {
      'bg-graphite-950/80 backdrop-blur-xl border-white/5 shadow-2xl py-3': isScrolled || !isHome,
      'bg-transparent py-6': !isScrolled && isHome,
    }
  );

  const textClasses = clsx(
    'relative py-2 px-4 transition-colors duration-300 font-medium text-sm tracking-wide flex items-center gap-2 rounded-full z-10',
    {
      'text-white/80 hover:text-white': true,
    }
  );

  return (
    <header className={headerClasses} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0 ml-3.5">
            <Link to="/" className="inline-block transition-transform duration-300 hover:scale-105">
              {/* Enlarge logo on desktop */}
              <Logo variant="light" className="h-8 sm:h-10 lg:h-16 w-auto origin-left rtl:origin-right" />
            </Link>
          </div>

          {/* Desktop Nav - Glass Pill Container */}
          <nav 
            className="hidden lg:flex items-center gap-1 bg-white/10 border border-white/20 backdrop-blur-2xl rounded-full p-1.5 shadow-[0_4_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4_25px_rgba(255,255,255,0.05)] hover:border-white/30 transition-all duration-300"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={clsx(
                    textClasses,
                    isActive && '!text-primary-400 font-semibold'
                  )}
                >
                  <Icon className="w-4 h-4 opacity-70 shrink-0" />
                  <span className="whitespace-nowrap">{link.name}</span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="header-active-indicator"
                      className="absolute -bottom-1 left-4 right-4 h-0.5 bg-primary-400 rounded-t-full shadow-[0_0_8px_rgba(202,140,53,0.6)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  {/* Hover Background Effect */}
                  {hoveredPath === link.path && (
                    <motion.div
                      layoutId="header-hover-bg"
                      className="absolute inset-0 bg-white/15 rounded-full -z-10 shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
              aria-label="Toggle Language"
            >
              <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-semibold text-xs tracking-wider uppercase">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
            <Link
              to="/quote"
              className="px-7 py-2.5 bg-primary-500 hover:bg-primary-400 text-white text-sm tracking-wide font-semibold rounded-full transition-all shadow-[0_4_15px_rgba(202,140,53,0.2)] hover:shadow-[0_0_25px_rgba(202,140,53,0.5)]"
            >
              {t('requestQuote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-5">
            <button
              onClick={toggleLanguage}
              className="text-white/80"
            >
              <span className="font-semibold text-xs uppercase">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-1 hover:text-primary-400 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-graphite-950/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={clsx(
                      "flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-lg transition-colors",
                      isActive ? "bg-white/5 text-primary-400" : "text-white/80 hover:text-white hover:bg-white/5"
                    )}
                  >
                    <Icon className="w-5 h-5 opacity-70" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              <div className="pt-6 mt-6 border-t border-white/10">
                <Link
                  to="/quote"
                  className="block w-full text-center px-6 py-4 bg-primary-500 hover:bg-primary-400 text-white font-semibold rounded-full transition-colors"
                >
                  {t('requestQuote')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
