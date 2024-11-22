// pages/compliment.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../shared/Navigation';
import { teamData, warehousesData, deliveryData } from '../shared/data';
import BrandBanner from '../components/BrandBanner';

// Данные о подбрендах Compliment
const complimentBrands = [
  { 
    name: 'Nature SIBERICA',
    logo: '/brands/logos/nature-siberica.svg',
    description: 'Натуральная косметика на основе сибирских трав'
  },
  { 
    name: 'ICON SKIN',
    logo: '/brands/logos/icon-skin.svg',
    description: 'Профессиональный уход за кожей'
  },
  { 
    name: 'Cafe mimi',
    logo: '/brands/logos/cafe-mimi.svg',
    description: 'Органическая косметика'
  },
  { 
    name: 'ARAVIA PROFESSIONAL',
    logo: '/brands/logos/aravia.svg',
    description: 'Профессиональная косметика для ухода'
  },
  { 
    name: 'ESTEL',
    logo: '/brands/logos/estel.svg',
    description: 'Профессиональная косметика для волос'
  },
  { 
    name: 'HORSE FORCE',
    logo: '/brands/logos/horse-force.svg',
    description: 'Инновационная косметика с коллагеном'
  },
  { 
    name: 'likato PROFESSIONAL',
    logo: '/brands/logos/likato.svg',
    description: 'Профессиональные средства для волос'
  }
];

const ComplimentPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('Бренды');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderTeam = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
    >
      {teamData.map((member) => (
        <div key={member.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-center">{member.name}</h3>
          <p className="text-center text-slate-600">{member.position}</p>
        </div>
      ))}
    </motion.div>
  );

  const renderWarehouses = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {warehousesData.map((warehouse) => (
        <div key={warehouse.id} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
          <img
            src={warehouse.image}
            alt={warehouse.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold">{warehouse.name}</h3>
            <p className="text-slate-600">{warehouse.address}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );

  const renderDelivery = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-bold text-center mb-6">{deliveryData.title}</h2>
      <p className="text-center text-slate-600 mb-8">{deliveryData.description}</p>
      <div className="space-y-4">
        {deliveryData.methods.map((method, index) => (
          <div
            key={index}
            className="bg-white/60 rounded-lg p-4 flex items-center"
          >
            <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mr-4">
              {index + 1}
            </span>
            <span className="text-lg">{method}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderBrands = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      <div className="flex justify-center mb-12">
        <svg viewBox="0 0 400 150" className="w-full max-w-2xl">
          <defs>
            <linearGradient id="complimentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#2E8B57', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#3CB371', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="40%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="url(#complimentGrad)"
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '64px',
              fontWeight: 'bold'
            }}
          >
            COMPLIMENT
          </text>
          <text
            x="50%"
            y="65%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#666"
            style={{ 
              fontFamily: 'Arial, sans-serif',
              fontSize: '24px'
            }}
          >
            ECO BEST
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {complimentBrands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="h-32 flex items-center justify-center mb-6">
                  <img 
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-slate-800 mb-2">{brand.name}</h3>
                <p className="text-center text-slate-600 text-sm">{brand.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Команда':
        return renderTeam();
      case 'Склад':
        return renderWarehouses();
      case 'Доставка':
        return renderDelivery();
      default:
        return renderBrands();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrolled={scrolled}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme="compliment"
      />

      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-lg z-40"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <BrandBanner />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default ComplimentPage;