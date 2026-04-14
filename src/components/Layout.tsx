import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Cpu, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo.png';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500/30 flex flex-col">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md py-2' : 'bg-transparent py-5'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-0 group">
              <div className={`overflow-hidden flex items-center justify-center transition-all duration-500 translate-y-3 ${scrolled ? 'w-24 h-24' : 'w-48 h-48'}`}>
                <img src={logo} alt={t('app.name')} className="w-full h-full object-contain" />
              </div>
              <span className={`font-black bg-clip-text text-transparent bg-linear-to-r from-blue-800 to-blue-500 tracking-tight transition-all duration-500 -ms-12 ${scrolled ? 'text-2xl' : 'text-4xl'}`}>
                {t('app.name')}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium text-lg transition-colors hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div layoutId="underline" className="absolute -bottom-2 inset-x-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </Link>
              ))}
              <div className="flex items-center gap-4 border-s border-slate-200 ps-4">
                <button
                  onClick={toggleLang}
                  className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  <Globe className="w-5 h-5" />
                  <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
                </button>
                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
                  {t('nav.startProject')}
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleLang}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium flex items-center gap-1"
              >
                <Globe className="w-5 h-5" />
                <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-blue-600 transition-colors p-2">
                {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="block w-full text-center mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold transition-colors">
                  {t('nav.startProject')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="grow pt-24">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-0 mb-6">
                <div className="w-48 h-48 overflow-hidden flex items-center justify-center translate-y-3">
                  <img src={logo} alt={t('app.name')} className="w-full h-full object-contain filter brightness-0 invert opacity-90" />
                </div>
                <span className="text-4xl font-bold text-white tracking-tight -ms-12">{t('app.name')}</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                {t('footer.desc')}
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">{t('nav.home')}</Link></li>
                <li><Link to="/services" className="hover:text-blue-400 transition-colors">{t('nav.services')}</Link></li>
                <li><Link to="/about" className="hover:text-blue-400 transition-colors">{t('nav.about')}</Link></li>
                <li><Link to="/contact" className="hover:text-blue-400 transition-colors">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-6">{t('footer.contactUs')}</h4>
              <ul className="space-y-3 text-slate-400">
                <li>{t('contact.phone.title')}: <span dir="ltr" className="inline-block">{t('contact.phone.value')}</span></li>
                <li>{t('contact.email.value')}</li>
                <li>{t('footer.address')}</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
