import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import BrandBanner from './components/BrandBanner';

const directorData = {
  name: "Юлдашев Мансур Шавкатович",
  position: "Генеральный директор",
  image: "./images/team/Damir.jpg", // Замените на реальный путь к фото директора
  description: "Основатель и генеральный директор компании с более чем 15-летним опытом в сфере дистрибуции. Под его руководством компания стала одним из ведущих дистрибьюторов в Хорезмской области.",
  achievements: [
    "Построение эффективной системы дистрибуции в регионе",
    "Развитие партнерских отношений с ведущими брендами",
    "Создание профессиональной команды из более 50 сотрудников",
    "Организация современного складского комплекса площадью 1600м²"
  ],
  quote: "Наша миссия - обеспечивать качественными товарами каждый уголок Хорезмской области, создавая ценность для наших партнеров и клиентов."
};

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
  { id: 1, name: 'Садыков Дамир', position: 'CEO', image: './images/team/Damir.jpg' },
  { id: 2, name: 'Садыков Дамир', position: 'Sales Director', image: './images/team/Damir.jpg' },
  { id: 3, name: 'Садыков Дамир', position: 'Sales Director', image: './images/team/Damir.jpg' },
];

const warehousesData = [
  {
    id: 1,
    name: 'Центральный склад',
    area: '400м²',
    features: ['Температурный контроль', 'Современная система вентиляции', 'Круглосуточная охрана'],
    image: './images/warehouses/warehouse1.jpg'
  },
  {
    id: 2,
    name: 'Склад косметической продукции',
    area: '300м²',
    features: ['Специальные условия хранения', 'Контроль влажности', 'Система учета товаров'],
    image: './images/warehouses/warehouse3.jpg'
  },
  {
    id: 3,
    name: 'Продуктовый склад',
    area: '350м²',
    features: ['Холодильные камеры', 'Система FIFO', 'Строгий температурный режим'],
    image: './images/warehouses/warehouse2.jpg'
  },
  {
    id: 4,
    name: 'Распределительный центр',
    area: '250м²',
    features: ['Погрузочная зона', 'Автоматизированная сортировка', 'Экспресс-доставка'],
    image: './images/warehouses/warehouse6.jpg'
  },
  {
    id: 5,
    name: 'Транзитный склад',
    area: '150м²',
    features: ['Кросс-докинг', 'Быстрая обработка грузов', 'Электронный документооборот'],
    image: './images/warehouses/warehouse4.jpg'
  },
  {
    id: 6,
    name: 'Резервный склад',
    area: '150м²',
    features: ['Резервные мощности', 'Гибкое использование', 'Система резервирования'],
    image: './images/warehouses/warehouse5.jpg'
  }
];

const deliveryData = {
  title: 'Наша доставка',
  description: 'Мы осуществляем доставку по всей Хорезмской области, у нас имеется 11 доставщиков',
  methods: [
    {
      id: 1,
      name: 'Курьерская доставка',
      // description: 'Быстрая и надежная доставка до двери',
      image: './images/delivery/damas.png'
    },
    {
      id: 2,
      name: 'Почта BTS',
      // description: 'Доставка через надежного партнера',
      image: './images/delivery/cargo.png'
    }
  ]
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
  const [activeTab, setActiveTab] = useState('Главная');
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
      case 'Главная':
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12 py-8"
      >
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            Добро пожаловать в{' '}
          </span>
          <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
            Global Foods Center
          </span>
        </h2>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto">
            Мы - ведущая дистрибьюторская компания в Хорезмской области, специализирующаяся на поставках косметической продукции и продуктов питания.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
                    <img 
                      src={directorData.image}
                      alt={directorData.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">{directorData.name}</h3>
                    <p className="text-xl text-slate-600 mb-6">{directorData.position}</p>
                    <p className="text-slate-600 mb-8 text-lg">{directorData.description}</p>
                    
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8">
                      <h4 className="text-xl font-semibold text-slate-800 mb-4">Достижения:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {directorData.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-slate-800 rounded-full"></div>
                            <p className="text-slate-600">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg italic text-slate-700 border-l-4 border-slate-300 pl-4">
                      {directorData.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );

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
                <p className="mt-4 text-slate-600 max-w-4xl mx-auto">
                  Наша команда — это профессиональные торговые представители, которые воплощают ценности нашего бизнеса. Каждый из них обладает глубоким знанием продукции, индивидуальным подходом к клиентам и стремлением к достижению результатов. Узнайте больше о людях, которые стоят за нашим успехом, и доверьтесь профессионалам, которые помогут вам найти оптимальные решения для вашего бизнеса.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="mb-12">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-6 text-center">
                    Наши Складские Помещения
                  </h2>
                  <div className="text-slate-600 max-w-4xl mx-auto space-y-4 text-center">
                    <p>
                      Наша компания располагает современным складским комплексом общей площадью 1600м², оборудованным по последним стандартам логистики и хранения. Складские помещения оснащены современными системами климат-контроля, вентиляции и безопасности, что гарантирует сохранность всех типов продукции.
                    </p>
                    <div>
                      <p className="mb-2">Особенности наших складов:</p>
                      <ul className="list-none space-y-2">
                        <li>Специализированные зоны хранения для различных категорий товаров</li>
                        <li>Автоматизированная система учета и контроля товарных запасов</li>
                        <li>Профессиональное складское оборудование и техника</li>
                        <li>Строгое соблюдение температурного режима и влажности</li>
                        <li>Круглосуточная охрана и видеонаблюдение</li>
                        <li>Удобные подъездные пути и зоны погрузки-разгрузки</li>
                      </ul>
                    </div>
                  </div>
                </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {warehousesData.map((warehouse) => (
          <motion.div
            key={warehouse.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: warehouse.id * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100"
          >
            <img
              src={warehouse.image}
              alt={warehouse.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">
                  {warehouse.name}
                </p>
                <p className="text-white/80 text-xs">
                  {warehouse.area}
                </p>
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
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          {deliveryData.description}
        </p>
        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
          Наша компания предлагает несколько удобных способов доставки товаров. Мы работаем с надежными партнерами и собственной службой доставки, чтобы обеспечить быструю и безопасную транспортировку вашего заказа.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {deliveryData.methods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="aspect-[16/9] md:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-xl mb-6">
                  <img
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{method.name}</h3>
                {method.description && (
                  <p className="mt-2 text-slate-600">{method.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
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
          ? 'bg-white/90 backdrop-blur-lg shadow-lg'
          : 'bg-gradient-to-r from-slate-100 to-white'
        }`}
      >
        <div className="w-full px-6 py-4 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex items-center justify-between w-full">
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
                {['Главная', 'Бренды', 'Команда', 'Склад', 'Доставка'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300
                      ${activeTab === tab 
                        ? 'bg-slate-800 text-white shadow-md transform hover:scale-105 text-lg' 
                        : 'text-slate-700 hover:bg-slate-100 text-lg'
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
                {['Главная', 'Бренды', 'Команда', 'Склад', 'Доставка'].map((tab) => (
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
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    color: white;
    filter: drop-shadow(0 0 8px rgba(30, 41, 59, 0.3));
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