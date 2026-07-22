import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import clsx from 'clsx';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'light' }) => {
  const { language } = useLanguage();
  
  const textClasses = clsx(
    'font-bold flex flex-col justify-center',
    variant === 'light' ? 'text-white' : 'text-graphite-950'
  );

  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <div className="relative h-full aspect-square flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Circle */}
          <path d="M50 95C25.147 95 5 74.853 5 50C5 25.147 25.147 5 50 5C74.853 5 95 25.147 95 50" stroke="#ca8c35" strokeWidth="3" strokeLinecap="round" />
          
          {/* Tallest Center Building */}
          <path d="M42 95V15L56 10V95" stroke="#ca8c35" strokeWidth="2" fill="transparent" />
          
          {/* Right Building (Filled gold accent) */}
          <path d="M56 30L68 40V95H56V30Z" fill="#ca8c35" />
          
          {/* Left Building */}
          <path d="M30 95V55L42 45" stroke="#ca8c35" strokeWidth="2" fill="transparent" />
        </svg>
      </div>
      <div className={textClasses}>
        <span className="text-xl sm:text-2xl lg:text-3xl leading-none tracking-wide font-sans">
          {language === 'ar' ? 'تكامل الذهبية' : 'TAKAMUL ALDAHBIA'}
        </span>
        <span className="text-xs sm:text-sm lg:text-base tracking-wider text-primary-500 uppercase font-sans font-medium mt-1">
          {language === 'ar' ? 'للمقاولات العامة' : 'GENERAL CONTRACTING'}
        </span>
      </div>
    </div>
  );
};
