import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

const KeyButton = ({ children, className }) => (
  <div className={`w-10 h-10 bg-gray-800 border-2 border-purple-500/50 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(139,92,246,0.3)] ${className}`}>
    {children}
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeKey, setActiveKey] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', ' ', 'shift'].includes(key)) {
        setActiveKey(key);
      }
      if (e.key === 'Escape') {
        setShowAbout(false);
      }
    };
    
    const handleKeyUp = () => setActiveKey(null);
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div>
      {/* Loading Screen */}
{loading && (
  <div className="fixed inset-0 bg-[#0F0A2A] z-50 flex flex-col items-center justify-center">
    {/* ASTRO Logo */}
    <div className="mb-8">
      <h1 className="text-8xl font-black tracking-tight flex">
      <span className="text-indigo-400">T</span>
        <span className="text-indigo-400">U</span>
        <span className="text-indigo-400">M</span>
        <span className="text-indigo-400">P</span>
      </h1>
    </div>
    
    {/* Loading Text and Bar */}
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl text-white/90 font-medium">Loading Game...</h2>
      <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 rounded-full animate-[loading_2s_ease-in-out]"></div>
      </div>
    </div>
  </div>
)}
      {/* HOPS Logo */}
      <div className="fixed top-10 left-10 z-40">
      <h1 className="text-8xl font-black tracking-tight flex">
        <span className="text-indigo-400">T</span>
        <span className="text-indigo-400">U</span>
        <span className="text-indigo-400">M</span>
        <span className="text-indigo-400">P</span>
      </h1>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/90 max-w-2xl rounded-2xl p-8 border border-[#65d6ad]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold" style={{ color: '#8B89FF' }}>About Tump</h2>
              <button 
                onClick={() => setShowAbout(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-gray-200">
              <p>Welcome to Tump - The first browser-based competitive platformer where speed, skill, and strategy collide in daily challenges!</p>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold" style={{ color: '#FF8A3D' }}>Daily Rush</h3>
                <p>Every 24 hours, a new challenge awaits! Race against the community, perfect your runs, and climb the leaderboard. Only the fastest astronaut wins the daily SOL prize pool! 🏆</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold" style={{ color: '#65d6ad' }}>Gameplay Revolution</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>One-click play - No downloads, just pure browser gaming</li>
                  <li>Perfect your speedrun with ghost replays</li>
                  <li>Daily & weekly tournaments</li>
                  <li>Real-time global leaderboard</li>
                  <li>Compete for SOL prizes</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold" style={{ color: '#FFD43B' }}>Roadmap</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2" style={{ color: '#8B89FF' }}>Phase 1: Launch</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Browser game release</li>
                      <li>✓ Daily challenges</li>
                      <li>✓ Basic leaderboard</li>
                      <li>→ SOL rewards system</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2" style={{ color: '#FF8A3D' }}>Phase 2: Evolution</h4>
                    <ul className="text-sm space-y-1">
                      <li>Custom character skins</li>
                      <li>Weekly tournaments</li>
                      <li>Ghost replays</li>
                      <li>Community levels</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2" style={{ color: '#65d6ad' }}>Phase 3: Expansion</h4>
                    <ul className="text-sm space-y-1">
                      <li>Multiplayer races</li>
                      <li>Custom level editor</li>
                      <li>Achievement system</li>
                      <li>Special events</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2" style={{ color: '#FFD43B' }}>Phase 4: Revolution</h4>
                    <ul className="text-sm space-y-1">
                      <li>Mobile version</li>
                      <li>NFT integration</li>
                      <li>eSports events</li>
                      <li>Cross-platform play</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#8B89FF]/20 to-[#65d6ad]/20 rounded-xl">
                <p className="text-center font-bold">Ready to hop in? Join the fastest-growing speedrunning community on Solana!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Controls Display */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-lg">
          {/* WASD Keys */}
          <div className="grid grid-cols-3 gap-2">
            <div></div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 transition-all duration-200 ${activeKey === 'w' ? 'bg-white/40' : ''}`}>
              <span className="text-white/90 font-medium text-lg">W</span>
            </div>
            <div></div>
            
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 transition-all duration-200 ${activeKey === 'a' ? 'bg-white/40' : ''}`}>
              <span className="text-white/90 font-medium text-lg">A</span>
            </div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 transition-all duration-200 ${activeKey === 's' ? 'bg-white/40' : ''}`}>
              <span className="text-white/90 font-medium text-lg">S</span>
            </div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 transition-all duration-200 ${activeKey === 'd' ? 'bg-white/40' : ''}`}>
              <span className="text-white/90 font-medium text-lg">D</span>
            </div>
          </div>

          {/* Spacebar and Shift */}
          <div className="mt-3 space-y-2">
            <div className={`h-12 w-48 flex items-center justify-center rounded-xl bg-white/20 border border-white/30 transition-all duration-200 ${activeKey === ' ' ? 'bg-white/40' : ''}`}>
              <span className="text-white/90 font-medium text-sm">SPACE</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="fixed top-0 w-full z-40 flex justify-center items-center p-4">
  <div className="flex gap-4">
    <a
      href="https://x.com/soltump"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-xl bg-indigo-500/20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)] min-w-[120px] text-center"
    >
      Twitter
    </a>

    <button
      onClick={() => setShowAbout(true)}
      className="px-8 py-3 rounded-xl bg-indigo-500/20 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.3)] min-w-[120px] text-center"
    >
      About
    </button>

    <a
      href="https://pump.fun"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-xl bg-violet-500/30 backdrop-blur-sm text-white font-medium transition-all duration-300 hover:scale-105 hover:bg-violet-500/40 shadow-[0_0_20px_rgba(139,92,246,0.4)] min-w-[120px] text-center"
    >
      Buy Now
    </a>
  </div>
</nav>

      {/* Spline Scene */}
      <div style={{ width: '100vw', height: '100vh' }}>
        <Spline scene="https://prod.spline.design/UgeH0tX3o6QrrJME/scene.splinecode" />
      </div>
    </div>
  );
}