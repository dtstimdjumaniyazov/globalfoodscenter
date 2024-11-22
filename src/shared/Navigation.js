// shared/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AnimatedLogo from '../AnimatedLogo';

export const Navigation = ({ isMobileMenuOpen, toggleMobileMenu, scrolled, activeTab, setActiveTab, theme = 'default' }) => {
  const tabs = ['Бренды', 'Команда', 'Склад', 'Доставка'];
  
  const getHeaderStyle = () => {
    if (scrolled) {
      return 'bg-white/80 backdrop-blur-lg shadow-md';
    }

    switch (theme) {
      case 'avon':
        return 'bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200';
      case 'compliment':
        return 'bg-gradient-to-r from-green-200 via-emerald-200 to-green-200';
      case 'ehrmann':
        return 'bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200';
      default:
        return 'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200';
    }
  };

  const getMobileButtonStyle = () => {
    switch (theme) {
      case 'avon':
        return 'bg-pink-300 hover:bg-pink-400';
      case 'compliment':
        return 'bg-green-300 hover:bg-green-400';
      case 'ehrmann':
        return 'bg-blue-300 hover:bg-blue-400';
      default:
        return 'bg-slate-300 hover:bg-slate-400';
    }
  };

  const getActiveTabStyle = () => {
    switch (theme) {
      case 'avon':
        return 'bg-gradient-to-r from-pink-500 to-rose-500';
      case 'compliment':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'ehrmann':
        return 'bg-gradient-to-r from-blue-500 to-sky-500';
      default:
        return 'bg-gradient-to-r from-slate-500 to-gray-500';
    }
  };

  return (
    <>
      <header 
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
      >
        <div className="w-full px-4 py-4 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center justify-start">
              <AnimatedLogo />
            </Link>
            
            <button
              className={`md:hidden p-2 rounded-lg transition-colors absolute right-4 top-1/2 -translate-y-1/2 ${getMobileButtonStyle()}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} className="text-slate-700"/> : <Menu size={24} className="text-slate-700" />}
            </button>

            <nav className="hidden md:flex space-x-6 ml-8">
              {tabs.map((tab) => (
                <Link
                  key={tab}
                  to="/"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? `${getActiveTabStyle()} text-white transform hover:scale-105` 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-400/20'
                  }`}
                >
                  {tab}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white/90 backdrop-blur-lg z-40 border-b border-slate-200 shadow-lg">
          <div className="p-4">
            {tabs.map((tab) => (
              <Link
                key={tab}
                to="/"
                onClick={() => {
                  setActiveTab(tab);
                  toggleMobileMenu();
                }}
                className={`block px-4 py-2 mb-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab 
                    ? `${getActiveTabStyle()} text-white` 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};