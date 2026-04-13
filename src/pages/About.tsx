import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Users, Award, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full pb-24"
    >
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-slate-900"
          >
            {t('about.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100px" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1.5 bg-blue-600 mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('about.desc1')}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-6"
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
              className="text-3xl font-bold text-slate-900"
            >
              {t('about.visionTitle')}
            </motion.h2>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
              className="text-lg text-slate-600 leading-relaxed"
            >
              {t('about.vision1')}
            </motion.p>
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
              className="text-lg text-slate-600 leading-relaxed"
            >
              {t('about.vision2')}
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t('about.val1.title')}</h4>
                <p className="text-slate-600 text-sm">{t('about.val1.desc')}</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100">
                <Lightbulb className="w-10 h-10 text-cyan-600 mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">{t('about.val2.title')}</h4>
                <p className="text-slate-600 text-sm">{t('about.val2.desc')}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
            <motion.img 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="فريق العمل" 
              className="rounded-3xl shadow-2xl relative z-10 border-4 border-white"
              referrerPolicy="no-referrer"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -end-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20 hidden md:block"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <span className="block text-4xl font-black text-blue-600 mb-1">+50</span>
                  <span className="text-slate-500 font-medium">{t('about.stats.projects')}</span>
                </div>
                <div className="w-px h-16 bg-slate-200"></div>
                <div className="text-center">
                  <span className="block text-4xl font-black text-blue-600 mb-1">%100</span>
                  <span className="text-slate-500 font-medium">{t('about.stats.satisfaction')}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t('about.why.title')}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t('about.why.desc')}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Users />, title: t('about.why1.title'), desc: t('about.why1.desc') },
            { icon: <Award />, title: t('about.why2.title'), desc: t('about.why2.desc') },
            { icon: <Server />, title: t('about.why3.title'), desc: t('about.why3.desc') }
          ].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                {React.cloneElement(val.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
