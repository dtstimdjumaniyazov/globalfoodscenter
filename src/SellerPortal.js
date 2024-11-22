import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import BrandBanner from './components/BrandBanner';

const brandsData = [
  { 
    id: 1, 
    name: 'Avon', 
    image: './images/brands/avon.svg',
    description: 'Международная косметическая компания с широким ассортиментом средств для красоты и ухода.'
  },
  { 
    id: 2, 
    name: 'Compliment Skin Care Professional', 
    image: './images/brands/compliment.svg',
    description: 'Высококачественные средства для салонного ухода и домашнего использования, сохраняющие здоровье волос.'
  },
  { 
    id: 3, 
    name: 'Natura Siberica', 
    image: './images/brands/NaturaSiberica.svg',
    description: 'Натуральная косметика, вдохновленная сибирской природой, сочетает уникальные растительные ингредиенты и современные технологии.'
  },
  {
    id: 4,
    name: 'ICON SKIN',
    image: './images/brands/iconskin.svg',
    description: 'Профессиональная косметика для красивой кожи с инновационными формулами и активными компонентами.'
  },
  {
    id: 5,
    name: 'Café mimi',
    image: './images/brands/cafemimi.svg',
    description: 'Инновационные средства для красоты, сочетающие качество, стиль и экологичность.'
  },
  {
    id: 6,
    name: 'ARAVIA PROFESSIONAL',
    image: './images/brands/aravia.svg',
    description: 'Профессиональная косметика для ухода за кожей лица и тела в салонах красоты.'
  },
  {
    id: 7,
    name: 'ESTEL Professional',
    image: './images/brands/EstelProfessional.svg',
    description: 'Профессиональная косметика для волос премиум-класса, созданная российскими экспертами индустрии красоты.'
  },
  {
    id: 8,
    name: 'Horse Force',
    image: './images/brands/HorseForce.svg',
    description: 'Профессиональная косметика для волос и тела премиум-класса, разработанная российскими экспертами здоровья и красоты.'
  },
  {
    id: 9,
    name: 'LIKATO PROFESSIONAL',
    image: 'https://royalsamples.ru/upload/medialibrary/31c/log-chern.png',
    description: 'Профессиональная косметика для волос и ногтей с инновационными формулами из Италии.'
  },
  {
    id: 10,
    name: 'Русское море',
    image: 'https://www.russiansea.ru/images/header/logo_1.svg',
    description: 'Крупнейший российский производитель рыбы и морепродуктов с собственным рыболовным флотом.'
  },
  {
    id: 11,
    name: 'Азовская кондитерская фабрика',
    image: './images/brands/azov.svg',
    description: 'Производство кондитерских изделий и шоколадной продукции высокого качества с 1992 года.'
  },
  {
    id: 12,
    name: 'BARS',
    image: './images/brands/bars.svg',
    description: 'Натуральные батончики и снеки для здорового питания и активного образа жизни.'
  },
  {
    id: 13,
    name: 'Belfood',
    image: './images/brands/belfood-logo2.png',
    description: 'Натуральные продукты питания высокого качества для здорового образа жизни.'
  },
  {
    id: 14,
    name: 'Hochland',
    image: './images/brands/hochland.svg',
    description: 'Натуральные сыры и молочные продукты высокого качества для всей семьи, сочетающими традиции и инновации в производстве.'
  },

];

const teamData = [
  { id: 1, name: 'Садыков Дамир', position: 'CEO', image: './images/avon.jpg' },
  { id: 2, name: 'Садыков Дамир', position: 'Sales Director', image: '/api/placeholder/150/150' },
];

const warehousesData = [
  { id: 1, name: 'Центральный склад', address: 'ул. Примерная, 1', image: '/api/placeholder/300/200' },
  { id: 2, name: 'Северный склад', address: 'ул. Складская, 5', image: '/api/placeholder/300/200' },
];

const deliveryData = {
  title: 'Наша доставка',
  description: 'Мы осуществляем доставку по всей Хорезмской области',
  methods: ['Курьерская доставка', 'Почта BTS', 'Пункты выдачи']
};

const BackgroundDecorator = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-slate-200/40 to-slate-300/40 rounded-full blur-3xl" />
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-slate-100/30 to-slate-200/30 rounded-full blur-3xl" />
    <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-gradient-to-tr from-slate-200/40 to-slate-300/40 rounded-full blur-3xl" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-100/20 to-slate-200/20 rounded-full blur-3xl" />
  </div>
);

const DynamicPatternOverlay = () => (
  <div className="fixed inset-0 opacity-[0.015] pointer-events-none">
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23475569' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }} />
  </div>
);

const SellerWebsite = () => {
  const [activeTab, setActiveTab] = useState('Бренды');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('cosmetics');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Бренды':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Наши Бренды
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveCategory('cosmetics')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === 'cosmetics'
                    ? 'bg-gradient-to-r from-pink-600 to-rose-700 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Косметика и уход
              </button>
              <button
                onClick={() => setActiveCategory('food')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === 'food'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Продукты питания
              </button>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {brandsData
                    .filter(brand => 
                      activeCategory === 'cosmetics' 
                        ? [1,2,3,4,5,6,7,8,9].includes(brand.id)
                        : [10,11,12,13,14].includes(brand.id)
                    )
                    .map((brand, index) => (
                      <motion.div
                        key={brand.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="relative overflow-hidden rounded-xl bg-slate-50/80 p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${
                          activeCategory === 'cosmetics'
                            ? 'from-pink-200/50 to-rose-300/50'
                            : 'from-emerald-200/50 to-teal-300/50'
                        } opacity-0 group-hover:opacity-100 transition-opacity`} />
                          <div className="relative z-10">
                            <div className="h-48 flex items-center justify-center mb-6">
                              <img 
                                src={brand.image} 
                                alt={brand.name} 
                                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110 brand-image"
                              />
                            </div>
                          </div>
                          <p className="mt-2 text-slate-600 text-center text-sm">{brand.description}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        );

      case 'Команда':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Наша Команда
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Профессионалы, которые делают наш бизнес успешным
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamData.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                      <p className="mt-2 text-slate-600">{member.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'Склад':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Наши Склады
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                Современные складские помещения для хранения продукции
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {warehousesData.map((warehouse, index) => (
                <motion.div
                  key={warehouse.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="h-[300px] overflow-hidden">
                        <img 
                          src={warehouse.image} 
                          alt={warehouse.name} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-800">{warehouse.name}</h3>
                        <div className="mt-2 flex items-center text-slate-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{warehouse.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'Доставка':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                {deliveryData.title}
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                {deliveryData.description}
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg">
                <div className="grid gap-6">
                  {deliveryData.methods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-800rounded-full flex items-center justify-center text-white">
                        {index + 1}
                      </div>
                      <div className="flex-grow">
                        <span className="text-lg font-semibold text-slate-800">{method}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-50 via-gray-50 to-gray-100">
      <BackgroundDecorator />
      <DynamicPatternOverlay />

      {/* Header */}
      <header 
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-md' 
          : 'bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200'
        }`}
      >
        <div className="w-full px-4 py-4 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-start">
                <AnimatedLogo />
              </div>
              
              <button
                className="md:hidden p-2 rounded-lg bg-slate-300 hover:bg-slate-400 transition-colors absolute right-4 top-1/2 -translate-y-1/2"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} className="text-slate-700"/> : <Menu size={24} className="text-slate-700" />}
              </button>

              <nav className="hidden md:flex space-x-6 ml-8">
                {['Бренды', 'Команда', 'Склад', 'Доставка'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300
                      ${activeTab === tab 
                        ? 'style-active-tab transform hover:scale-105' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-400/20'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 border-b border-slate-200 shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-100 transition-all duration-300"
                aria-label="Close menu"
              >
                <X size={24} className="text-slate-700" />
              </button>

              <div className="flex flex-col space-y-2 mt-8">
                {['Бренды', 'Команда', 'Склад', 'Доставка'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 text-left
                      ${activeTab === tab 
                        ? 'style-active-tab' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Brand Animation Banner */}
      <BrandBanner brandsData={brandsData} />

      {/* Main Content */}
      <main className="relative w-full z-10">
        <div className="relative z-10 w-full max-w-[2000px] px-4 md:px-8 mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl" />
            <div className="relative z-10 p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative w-full bg-gradient-to-b from-gray-800 to-gray-900 text-white mt-12">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-sm bg-gray-800/20 rounded-lg p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <p className="text-sm md:text-base">yu_mansur77@mail.ru</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <p className="text-sm md:text-base">+998 (90) 559-39-99</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-sm bg-gray-800/20 rounded-lg p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4">Адрес</h3>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <p className="text-sm md:text-base">г.Ургенч ул.Хонкинская 43/1 <br />г.Ургенч ул.Янгиарык 11F</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx global>{`
        .style-active-tab {
          background: linear-gradient(135deg, #475569 0%, #64748b 100%);
          color: white;
          filter: drop-shadow(0 0 8px rgba(71, 85, 105, 0.3));
          transform: translateY(-1px);
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 6px;
          border: 3px solid #f1f5f9;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }
      `}</style>
    </div>
  );
};

export default SellerWebsite;