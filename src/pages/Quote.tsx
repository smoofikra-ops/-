import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export const Quote: React.FC = () => {
  const { language, t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-graphite-50 min-h-screen font-sans" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
        <title>{language === 'ar' ? 'اطلب عرض سعر | تكامل الذهبية' : 'Request a Quote | Takamul Aldahbia'}</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Info Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-primary-500"></div>
                <span className="text-primary-600 font-semibold tracking-wider text-sm uppercase">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-graphite-950 mb-6 leading-tight tracking-tight">
                {t('requestQuote')}
              </h1>
              <p className="text-graphite-500 text-lg md:text-xl font-light leading-relaxed mb-8">
                {language === 'ar' 
                  ? 'املأ النموذج وسيقوم فريقنا الهندسي المختص بدراسة متطلبات مشروعك وتقديم عرض فني ومالي متكامل خلال 48 ساعة.' 
                  : 'Fill out the form and our specialized engineering team will study your requirements and provide a comprehensive technical and financial proposal within 48 hours.'}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-graphite-100 shadow-sm">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'استجابة سريعة' : 'Fast Response'}</h3>
                    <p className="text-sm text-graphite-500 font-light leading-relaxed">{language === 'ar' ? 'نقوم بالرد على طلبات التسعير خلال مدة أقصاها يومي عمل.' : 'We respond to quote requests within a maximum of two business days.'}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-graphite-100 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'سرية المعلومات' : 'Information Confidentiality'}</h3>
                    <p className="text-sm text-graphite-500 font-light leading-relaxed">{language === 'ar' ? 'كافة بياناتك وتفاصيل مشروعك تُعامل بسرية تامة ومحمية بموجب سياساتنا.' : 'All your data and project details are treated with strict confidentiality and protected by our policies.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-graphite-100 shadow-sm">
                    <Award className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-graphite-900 mb-1">{language === 'ar' ? 'دراسة متخصصة' : 'Specialized Study'}</h3>
                    <p className="text-sm text-graphite-500 font-light leading-relaxed">{language === 'ar' ? 'يتم تقييم طلبك من قبل مهندسين ذوي خبرة لضمان دقة التسعير.' : 'Your request is evaluated by experienced engineers to ensure accurate pricing.'}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right / Form Side */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-graphite-100 overflow-hidden relative"
            >
              {isSubmitted ? (
                <div className="p-16 text-center">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-green-50/50">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-bold text-graphite-900 mb-4 tracking-tight">
                    {language === 'ar' ? 'تم استلام طلبك بنجاح' : 'Request Received Successfully'}
                  </h2>
                  <p className="text-graphite-500 text-lg font-light mb-10 max-w-sm mx-auto leading-relaxed">
                    {language === 'ar' ? 'شكراً لثقتك بنا. سيقوم فريقنا بالتواصل معك قريباً لمناقشة التفاصيل.' : 'Thank you for trusting us. Our team will contact you shortly to discuss the details.'}
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-10 py-4 bg-graphite-950 text-white rounded-full font-semibold hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {language === 'ar' ? 'إرسال طلب جديد' : 'Submit New Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 md:p-12">
                  <div className="space-y-8">
                    
                    {/* Section 1 */}
                    <div>
                      <h3 className="text-lg font-bold text-graphite-900 mb-6 border-b border-graphite-100 pb-4">
                        {language === 'ar' ? 'المعلومات الشخصية' : 'Personal Information'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'الاسم الكامل' : 'Full Name'} *</label>
                          <input required type="text" className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900" placeholder={language === 'ar' ? 'محمد عبدالله' : 'John Doe'} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'اسم الشركة / الجهة' : 'Company Name'}</label>
                          <input type="text" className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900" placeholder={language === 'ar' ? 'شركة تطوير العقارية' : 'Real Estate Co.'} />
                        </div>
                      </div>
                    </div>

                    {/* Section 2 */}
                    <div>
                      <h3 className="text-lg font-bold text-graphite-900 mb-6 border-b border-graphite-100 pb-4">
                        {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'رقم الجوال' : 'Phone Number'} *</label>
                          <input required type="tel" dir="ltr" className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900" placeholder="+966 50 000 0000" />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'} *</label>
                          <input required type="email" dir="ltr" className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900" placeholder="email@example.com" />
                        </div>
                      </div>
                    </div>

                    {/* Section 3 */}
                    <div>
                      <h3 className="text-lg font-bold text-graphite-900 mb-6 border-b border-graphite-100 pb-4">
                        {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'المدينة' : 'City'} *</label>
                          <input required type="text" className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900" placeholder={language === 'ar' ? 'الرياض' : 'Riyadh'} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'نوع المشروع' : 'Project Type'} *</label>
                          <select required className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all text-graphite-900 appearance-none">
                            <option value="">{language === 'ar' ? 'اختر نوع المشروع' : 'Select Project Type'}</option>
                            <option value="new">{language === 'ar' ? 'محطة جديدة' : 'New Station'}</option>
                            <option value="dev">{language === 'ar' ? 'تطوير وتأهيل محطة' : 'Station Development'}</option>
                            <option value="other">{language === 'ar' ? 'أخرى' : 'Other'}</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-graphite-700 mb-2">{language === 'ar' ? 'وصف المشروع ونطاق العمل' : 'Project Description & Scope'} *</label>
                        <textarea required rows={4} className="w-full px-5 py-4 bg-graphite-50 border border-graphite-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder:text-graphite-400 text-graphite-900 resize-none" placeholder={language === 'ar' ? 'يرجى كتابة تفاصيل مشروعك هنا...' : 'Please write your project details here...'}></textarea>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-8 mt-8 border-t border-graphite-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <label className="flex items-start gap-3 text-sm text-graphite-500 cursor-pointer max-w-xs">
                        <input required type="checkbox" className="mt-1 w-4 h-4 text-primary-600 rounded border-graphite-300 focus:ring-primary-500" />
                        <span className="font-light leading-snug">{language === 'ar' ? 'أوافق على سياسة الخصوصية واستخدام بياناتي للتواصل معي' : 'I agree to the privacy policy and the use of my data to contact me'}</span>
                      </label>
                      
                      <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-graphite-950 hover:bg-primary-600 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group shrink-0">
                        <span>{language === 'ar' ? 'إرسال الطلب' : 'Submit Request'}</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
