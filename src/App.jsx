import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';

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
      if (e.key === 'escape') {
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
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A2A0F] p-8">
    <div className="mb-8">
      <h1 className="text-8xl font-black tracking-tight flex">
        {/* Green gradient text for the logo */}
        <span 
          className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400 animate-pulse"
          style={{ WebkitTextStroke: '1px #000' }}
        >
          FLYN
        </span>
      </h1>
    </div>
    <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
      <h2 className="text-2xl text-lime-200 font-bold">Loading Game...</h2>
      <div className="w-full h-3 bg-lime-900 rounded-full overflow-hidden relative">
        {/* A greenish loading gradient bar that slides */}
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-lime-500 to-green-500 animate-[progress_2s_linear_infinite]" />
      </div>
    </div>
  </div>
)}


      {/* Game Logo (Updated with Manual Font Size) */}
<div className="fixed top-10 left-10 z-40">
  <h1 className="text-8xl font-black tracking-tight flex flex-col items-center">
    <span 
      className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 via-lime-500 to-lime-400"
      style={{ WebkitTextStroke: '1px #000' }}
    >
      FLYN
    </span>
    <span 
      className="font-medium text-white mt-2"
      style={{ fontSize: '30px' }} // Adjust the size here
    >
      Built on Solana
    </span>
  </h1>
</div>






      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900/90 max-w-2xl rounded-2xl p-8 border border-[#65d6ad]/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B89FF] to-[#FFD43B]">About FLYN</h2>
              <button 
                onClick={() => setShowAbout(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-gray-200">
              <p>Welcome to FLYN - The first browser-based competitive platformer where speed, skill, and strategy collide in daily challenges!</p>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#FF8A3D]">Daily Rush</h3>
                <p>Every 24 hours, a new challenge awaits! Race against the community, perfect your runs, and climb the leaderboard. Only the fastest astronaut wins the daily SOL prize pool! 🏆</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#65d6ad]">Gameplay Revolution</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>One-click play - No downloads, just pure browser gaming</li>
                  <li>Perfect your speedrun with ghost replays</li>
                  <li>Daily & weekly tournaments</li>
                  <li>Real-time global leaderboard</li>
                  <li>Compete for SOL prizes</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#FFD43B]">Roadmap</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#8B89FF]">Phase 1: Launch</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Browser game release</li>
                      <li>✓ Daily challenges</li>
                      <li>✓ Basic leaderboard</li>
                      <li>→ SOL rewards system</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#FF8A3D]">Phase 2: Evolution</h4>
                    <ul className="text-sm space-y-1">
                      <li>Custom character skins</li>
                      <li>Weekly tournaments</li>
                      <li>Ghost replays</li>
                      <li>Community levels</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#65d6ad]">Phase 3: Expansion</h4>
                    <ul className="text-sm space-y-1">
                      <li>Multiplayer races</li>
                      <li>Custom level editor</li>
                      <li>Achievement system</li>
                      <li>Special events</li>
                    </ul>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl">
                    <h4 className="font-bold mb-2 text-[#FFD43B]">Phase 4: Revolution</h4>
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

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 flex justify-center items-center p-4">
        <div className="flex gap-4">
          <a
            href="https://x.com/FlynGame"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FFD43B] text-white font-bold transition-transform duration-300 hover:scale-110 shadow-[0_0_20px_rgba(255,138,61,0.5)] min-w-[120px] text-center"
          >
            Twitter
          </a>

          <button
            onClick={() => setShowAbout(true)}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FFD43B] text-white font-bold transition-transform duration-300 hover:scale-110 shadow-[0_0_20px_rgba(255,138,61,0.5)] min-w-[120px] text-center"
          >
            About
          </button>

          <a
            href="https://pump.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF8A3D] to-[#FFD43B] text-white font-bold transition-transform duration-300 hover:scale-110 shadow-[0_0_20px_rgba(255,138,61,0.5)] min-w-[120px] text-center"
          >
            Buy Now
          </a>
        </div>
      </nav>

      {/* Spline Scene */}
      <div style={{ width: '100vw', height: '100vh' }}>
        <Spline scene="https://prod.spline.design/cgB-VQw3t6VT2NVr/scene.splinecode" />
      </div>
    </div>
  );
}
