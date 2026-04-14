import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Code, Server, Sun, ArrowLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t, lang } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 start-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] start-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] mix-blend-multiply animate-blob"></div>
          <div className="absolute top-[20%] end-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-300/20 blur-[120px] mix-blend-multiply animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] start-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[120px] mix-blend-multiply animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.02]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-start"
            >
              <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm">
                {t('home.badge')}
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black leading-tight mb-6 text-slate-900">
                {t('home.title1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  {t('home.title2')}
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                {t('home.desc')}
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/services" className="group relative overflow-hidden bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center gap-2">
                  <span className="relative z-10">{t('home.explore')}</span>
                  {lang === 'ar' ? (
                    <ChevronLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link to="/contact" className="bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-blue-300 hover:text-blue-600">
                  {t('home.contact')}
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/50 bg-white p-2">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Technology Solutions"
                  className="rounded-2xl w-full object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-6 -start-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">{t('home.projects')}</p>
                    <p className="text-2xl font-black text-slate-900">{t('home.projectsCount')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl font-bold mb-4">{t('home.solutionsTitle')}</h2>
              <p className="text-slate-400 text-lg">{t('home.solutionsDesc')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: lang === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg group">
                {t('home.viewAll')}
                {lang === 'ar' ? (
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                ) : (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                )}
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code />, title: t('home.feat1.title'), desc: t('home.feat1.desc') },
              { icon: <Server />, title: t('home.feat2.title'), desc: t('home.feat2.desc') },
              { icon: <Sun />, title: t('home.feat3.title'), desc: t('home.feat3.desc') }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors group"
              >
                <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
