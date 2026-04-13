import React from 'react';
import { motion } from 'motion/react';
import { Code, Smartphone, Cloud, Sun, Server, Cpu, Shield, Database, Network } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: t('srv.1.title'),
      description: t('srv.1.desc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: t('srv.2.title'),
      description: t('srv.2.desc'),
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: t('srv.3.title'),
      description: t('srv.3.desc'),
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <Sun className="w-10 h-10" />,
      title: t('srv.4.title'),
      description: t('srv.4.desc'),
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: t('srv.5.title'),
      description: t('srv.5.desc'),
      color: 'from-sky-400 to-blue-500'
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: t('srv.6.title'),
      description: t('srv.6.desc'),
      color: 'from-slate-600 to-slate-800'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: t('srv.7.title'),
      description: t('srv.7.desc'),
      color: 'from-teal-400 to-emerald-500'
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: t('srv.8.title'),
      description: t('srv.8.desc'),
      color: 'from-blue-600 to-indigo-700'
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: t('srv.9.title'),
      description: t('srv.9.desc'),
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full pb-24"
    >
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            {t('services.title1')} <span className="text-blue-400">{t('services.title2')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            {t('services.desc')}
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden cursor-pointer"
            >
              <div className={`absolute top-0 end-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-5 rounded-es-full -z-10 group-hover:scale-150 transition-transform duration-500`}></div>
              
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-blue-600 font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <span>{t('services.order')}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
