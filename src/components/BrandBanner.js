// components/BrandBanner.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../animation.mp4.lottie.json';

const BrandBanner = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const lottieRef = useRef(null);
  const backgroundLottieRef = useRef(null);

  // Настройки для Lottie анимации
  const lottieOptions = {
    animationData: animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
      clearCanvas: false,
    },
    style: {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      margin: '0 auto',
    }
  };

  useEffect(() => {
    setIsInitialLoad(false);

    // Функция для синхронизации анимаций
    const syncAnimations = () => {
      if (lottieRef.current && backgroundLottieRef.current) {
        const mainAnimation = lottieRef.current;
        const backgroundAnimation = backgroundLottieRef.current;

        mainAnimation.setSpeed(1);
        backgroundAnimation.setSpeed(1);

        mainAnimation.goToAndPlay(0);
        backgroundAnimation.goToAndPlay(0);
      }
    };

    syncAnimations();

    const brandInterval = setInterval(() => {
      setCurrentBrandIndex(prev => (prev + 1) % 3); // Предполагаем 3 бренда
    }, 10000);

    return () => {
      clearInterval(brandInterval);
    };
  }, []);

  const handleFrame = () => {
    if (lottieRef.current && backgroundLottieRef.current) {
      const currentFrame = lottieRef.current.getDuration(true);
      backgroundLottieRef.current.goToAndStop(currentFrame, true);
    }
  };

  if (isInitialLoad) {
    return (
      <div className="w-full banner-height relative overflow-hidden bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full banner-height relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100/30 via-transparent to-slate-100/30 pointer-events-none" />
      
      <div className="w-full h-full max-w-[2000px] mx-auto px-0 relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentBrandIndex}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: 'easeInOut',
            }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 filter blur-xl opacity-50 scale-110">
                <Lottie
                  {...lottieOptions}
                  lottieRef={backgroundLottieRef}
                  style={{
                    ...lottieOptions.style,
                    filter: 'blur(20px)',
                  }}
                />
              </div>
              
              <div className="relative z-10 w-auto h-full mx-auto">
                <Lottie
                  {...lottieOptions}
                  lottieRef={lottieRef}
                  onEnterFrame={handleFrame}
                  style={{
                    ...lottieOptions.style,
                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                  }}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentBrandIndex === index ? 'bg-slate-600' : 'bg-slate-300'
            }`}
            initial={false}
            animate={{
              scale: currentBrandIndex === index ? 1.2 : 1,
              opacity: currentBrandIndex === index ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <style jsx>{`
        .banner-height {
          height: 88px;
        }
        
        @media (min-width: 768px) {
          .banner-height {
            height: 332px;
          }
        }
        
        @media (min-width: 1080px) {
          .banner-height {
            height: 365px;
          }
        }
        
        @media (min-width: 1800px) {
          .banner-height {
            height: 485px;
          }
        }
      `}</style>
    </div>
  );
};

export default BrandBanner;