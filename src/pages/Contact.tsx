import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full pb-24"
    >
      {/* Header */}
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            {t('contact.desc')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">{t('contact.address.title')}</h4>
              <p className="text-slate-600 text-lg whitespace-pre-line">{t('contact.address.desc')}</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">{t('contact.phone.title')}</h4>
              <p className="text-slate-600 text-lg" dir="ltr">{t('contact.phone.value')}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-slate-900">{t('contact.email.title')}</h4>
              <p className="text-slate-600 text-lg">{t('contact.email.value')}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 space-y-8">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">{t('contact.form.title')}</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors rounded-t-lg placeholder-transparent" placeholder={t('contact.form.name')} />
                  <label htmlFor="name" className="absolute inset-e-4 -top-3 text-sm text-blue-600 bg-white px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white">{t('contact.form.name')}</label>
                </div>
                <div className="relative">
                  <input type="email" id="email" required value={formData.email} onChange={handleChange} className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors rounded-t-lg placeholder-transparent" placeholder={t('contact.form.email')} />
                  <label htmlFor="email" className="absolute inset-e-4 -top-3 text-sm text-blue-600 bg-white px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white">{t('contact.form.email')}</label>
                </div>
              </div>
              
              <div className="relative">
                <select id="service" required value={formData.service} onChange={handleChange} className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors rounded-t-lg appearance-none">
                  <option value="" disabled hidden>{t('contact.form.service.placeholder')}</option>
                  <option value={t('contact.form.service.opt1')}>{t('contact.form.service.opt1')}</option>
                  <option value={t('contact.form.service.opt2')}>{t('contact.form.service.opt2')}</option>
                  <option value={t('contact.form.service.opt3')}>{t('contact.form.service.opt3')}</option>
                  <option value={t('contact.form.service.opt4')}>{t('contact.form.service.opt4')}</option>
                  <option value={t('contact.form.service.opt5')}>{t('contact.form.service.opt5')}</option>
                </select>
                <label htmlFor="service" className="absolute inset-e-4 -top-3 text-sm text-blue-600 bg-white px-1">{t('contact.form.service')}</label>
              </div>
              
              <div className="relative">
                <textarea id="message" required value={formData.message} onChange={handleChange} rows={5} className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors rounded-t-lg placeholder-transparent resize-none" placeholder={t('contact.form.message')}></textarea>
                <label htmlFor="message" className="absolute inset-e-4 -top-3 text-sm text-blue-600 bg-white px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white">{t('contact.form.message')}</label>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full font-bold py-5 rounded-xl transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3 text-lg ${
                  status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 
                  status === 'error' ? 'bg-red-600 hover:bg-red-700 text-white' :
                  'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-500/30'
                }`}
              >
                {status === 'loading' ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <span>{lang === 'ar' ? 'تم الإرسال بنجاح' : 'Sent Successfully'}</span>
                    <CheckCircle2 className="w-6 h-6" />
                  </>
                ) : status === 'error' ? (
                  <span>{lang === 'ar' ? 'خطأ في الإرسال' : 'Error Sending'}</span>
                ) : (
                  <>
                    <span>{t('contact.form.send')}</span>
                    <Send className={`w-5 h-5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
