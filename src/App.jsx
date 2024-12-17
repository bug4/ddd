import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeKey, setActiveKey] = useState(null);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  useEffect(() => {
    const loadingDuration = 2000; // 2 seconds
    const intervalTime = 20; // Update every 20ms for smooth animation
    const steps = loadingDuration / intervalTime;
    const incrementValue = 100 / steps;

    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = Math.min(prev + incrementValue, 100);
        if (newProgress === 100) {
          setTimeout(() => setLoading(false), 200);
          clearInterval(loadingInterval);
        }
        return newProgress;
      });
    }, intervalTime);

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(key)) {
        e.preventDefault();
        setActiveKey(key);
      }
    };
    
    const handleKeyUp = () => setActiveKey(null);
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      clearInterval(loadingInterval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const isKeyActive = (key) => activeKey === key;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
        <div className="text-9xl font-black tracking-wider mb-12">
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500"
            style={{ 
              WebkitTextStroke: '2px rgba(0,0,0,0.3)',
              textShadow: '0 4px 12px rgba(234,179,8,0.3)'
            }}
          >
            RAMY
          </span>
        </div>
        
        <div className="w-96 flex flex-col items-center gap-4">
          <div className="w-full h-4 bg-yellow-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-100 ease-out rounded-full"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="text-yellow-400 font-bold text-xl">
            {Math.round(loadingProgress)}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Yellow Background with Loading Text */}
      <div className="fixed inset-0 bg-yellow-400 flex items-center justify-center">
        {!sceneLoaded && (
          <div className="text-4xl font-bold text-yellow-700 animate-pulse">
            Loading Ramy's Valley
          </div>
        )}
      </div>

      {/* RAMY Logo */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 z-40">
        <h1 className="text-9xl font-black tracking-wider">
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500"
            style={{ 
              WebkitTextStroke: '2px rgba(0,0,0,0.3)',
              textShadow: '0 4px 12px rgba(234,179,8,0.3)'
            }}
          >
            RAMY
          </span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40 flex gap-6">
        <a
          href="https://x.com/RemyValley"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(252,211,77,0.5)] shadow-lg transform hover:-translate-y-1"
        >
          Twitter
        </a>

        <a
          href="https://pump.fun/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 text-white text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(252,211,77,0.5)] shadow-lg transform hover:-translate-y-1"
        >
          Buy Now
        </a>
      </nav>

      {/* Game Controller */}
      <div className="fixed left-12 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-yellow-900/30 p-8 rounded-3xl backdrop-blur-md border border-yellow-500/30 shadow-[0_0_30px_rgba(252,211,77,0.15)]">
          <div className="flex flex-col items-center gap-3">
            <div 
              className={`w-14 h-14 ${isKeyActive('arrowup') 
                ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-inner' 
                : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
              } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-150 ${
                isKeyActive('arrowup') ? 'scale-95' : 'hover:scale-105'
              }`}
            >
              <span className="text-2xl text-white font-bold">↑</span>
            </div>
            
            <div className="flex gap-3 items-center">
              <div 
                className={`w-14 h-14 ${isKeyActive('arrowleft')
                  ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-inner'
                  : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
                } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-150 ${
                  isKeyActive('arrowleft') ? 'scale-95' : 'hover:scale-105'
                }`}
              >
                <span className="text-2xl text-white font-bold">←</span>
              </div>
              
              <div 
                className={`w-28 h-14 ${isKeyActive(' ')
                  ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-inner'
                  : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
                } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-150 ${
                  isKeyActive(' ') ? 'scale-95' : 'hover:scale-105'
                }`}
              >
                <span className="text-lg text-white font-bold">SPACE</span>
              </div>
              
              <div 
                className={`w-14 h-14 ${isKeyActive('arrowright')
                  ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-inner'
                  : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
                } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-150 ${
                  isKeyActive('arrowright') ? 'scale-95' : 'hover:scale-105'
                }`}
              >
                <span className="text-2xl text-white font-bold">→</span>
              </div>
            </div>
            
            <div 
              className={`w-14 h-14 ${isKeyActive('arrowdown')
                ? 'bg-gradient-to-b from-yellow-300 to-yellow-400 shadow-inner'
                : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500'
                } rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-150 ${
                  isKeyActive('arrowdown') ? 'scale-95' : 'hover:scale-105'
              }`}
            >
              <span className="text-2xl text-white font-bold">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spline Scene */}
      <div className="relative z-10" style={{ width: '100vw', height: '100vh' }}>
        <Spline 
          scene="https://prod.spline.design/NktxLAt1ObMGlUju/scene.splinecode" 
          onLoad={() => setSceneLoaded(true)}
        />
      </div>
    </div>
  );
}