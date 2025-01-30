import { useLayoutEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, ChevronDown, ArrowRight, Star, Timer, Award, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const shoeRef = useRef(null);
  const detailsRef = useRef(null);
  const splineContainerRef = useRef(null);

  // Prevent scroll zoom on Spline container
  useLayoutEffect(() => {
    const container = splineContainerRef.current;
    if (container) {
      const preventScroll = (e) => {
        e.preventDefault();
      };
      container.addEventListener('wheel', preventScroll, { passive: false });
      return () => container.removeEventListener('wheel', preventScroll);
    }
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      if (shoeRef.current) {
        gsap.from(shoeRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        });
      }

      // Scroll animations for all sections with 'animate-on-scroll' class
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element, index) => {
        gsap.from(element, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        });
      });
    });

    return () => ctx.revert();
  }, [currentPage]);

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
          <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
            <Spline scene="https://prod.spline.design/GaogfGcpEA79Smq6/scene.splinecode" />
          </div>
            <section ref={contentRef} className="relative z-10 bg-gradient-to-b from-transparent to-[#0a0a0a]">
              {/* Original SB Dunk content */}
              <div ref={detailsRef} className="max-w-7xl mx-auto px-6 py-32">
                <div className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll">
                  <div>
                    <h2 className="text-5xl font-bold mb-6">Nike SB Dunk Low</h2>
                    <p className="text-gray-400 text-lg mb-8">
                      The Nike SB Dunk Low continues to be a symbol of street culture and skateboarding heritage. 
                      With its iconic design and superior comfort, it's the perfect blend of style and functionality.
                    </p>
                    {/* Original specs and button */}
                  </div>
                  {/* Original features */}
                </div>
              </div>
            </section>
          </>
        );

      case 'running':
        return (
          <>
            <section className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] pt-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="animate-on-scroll">
                  <h1 className="text-7xl font-bold mb-8">Run Without Limits</h1>
                  <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                    Experience revolutionary cushioning and responsive performance with our latest running collection.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-16 mt-24 animate-on-scroll">
                  <div className="bg-black/30 rounded-3xl p-12 transform hover:scale-105 transition-transform">
                    <h3 className="text-3xl font-bold mb-6">ZoomX Collection</h3>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <Timer className="w-6 h-6 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">Speed Technology</h4>
                          <p className="text-gray-400">Advanced ZoomX foam delivers unmatched energy return</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Award className="w-6 h-6 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-2">Race Day Ready</h4>
                          <p className="text-gray-400">Engineered for peak performance in competition</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-2xl p-8 animate-on-scroll">
                      <h4 className="text-xl font-semibold mb-4">Featured: Alphafly 3</h4>
                      <p className="text-gray-400 mb-6">Our most advanced marathon racing shoe, now even more responsive.</p>
                      <button className="text-sm font-semibold text-white hover:text-gray-200 transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'basketball':
        return (
          <>
            <section className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] pt-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 animate-on-scroll">
                  <h1 className="text-7xl font-bold mb-8">Dominate The Game</h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    From the court to the streets, our basketball collection delivers unmatched performance and style.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 animate-on-scroll">
                  <div className="bg-black/30 rounded-3xl p-8 hover:bg-black/40 transition-colors">
                    <h3 className="text-2xl font-bold mb-4">LeBron XXI</h3>
                    <p className="text-gray-400 mb-8">Built for power and precision</p>
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/3FlxNdaOTDFmZEiu/scene.splinecode" />
                    </div>
                    <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                  
                  <div className="bg-black/30 rounded-3xl p-8 hover:bg-black/40 transition-colors">
                    <h3 className="text-2xl font-bold mb-4">KD 16</h3>
                    <p className="text-gray-400 mb-8">Engineered for versatility</p>
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/GaogfGcpEA79Smq6/scene.splinecode" />
                    </div>
                    <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                  
                  <div className="bg-black/30 rounded-3xl p-8 hover:bg-black/40 transition-colors">
                    <h3 className="text-2xl font-bold mb-4">Kyrie 8</h3>
                    <p className="text-gray-400 mb-8">Made for quick cuts and control</p>
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/Jv5qmJB48KXI0W0s/scene.splinecode" />
                    </div>
                    
                    <button className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'soccer':
        return (
          <>
            <section className="min-h-screen bg-[#0a0a0a] pt-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll">
                  <div>
                    <h1 className="text-6xl font-bold mb-8">Mercurial Superfly</h1>
                    <p className="text-xl text-gray-400 mb-12">
                      Speed reimagined for the beautiful game. Built for the fastest players on the planet.
                    </p>
                    <div className="grid grid-cols-3 gap-8 mb-12">
                      <div>
                        <div className="text-3xl font-bold mb-2">360°</div>
                        <div className="text-gray-400">Fit</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Ultra</div>
                        <div className="text-gray-400">Light</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-2">Elite</div>
                        <div className="text-gray-400">Touch</div>
                      </div>
                    </div>
                    <button className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                  <div className="bg-gradient-to-b from-purple-500/10 to-blue-500/10 rounded-3xl p-12">
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/Jv5qmJB48KXI0W0s/scene.splinecode" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'training':
        return (
          <>
            <section className="min-h-screen bg-[#0a0a0a] pt-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center animate-on-scroll">
                  <h1 className="text-7xl font-bold mb-8">Train Like a Pro</h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    From HIIT to heavy lifts, our training gear is built for every workout.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-16 animate-on-scroll">
                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-4">Metcon Series</h3>
                      <p className="text-gray-400">The ultimate cross-training shoe, ready for anything.</p>
                      <div className="mt-8 grid grid-cols-3 gap-4">
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Stability</div>
                          <div className="text-gray-400">Maximum</div>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Weight</div>
                          <div className="text-gray-400">11.2 oz</div>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Drop</div>
                          <div className="text-gray-400">4mm</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-4">Free Series</h3>
                      <p className="text-gray-400">Natural movement meets versatile training.</p>
                      <div className="mt-8 grid grid-cols-3 gap-4">
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Flexibility</div>
                          <div className="text-gray-400">Maximum</div>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Weight</div>
                          <div className="text-gray-400">8.2 oz</div>
                        </div>
                        <div className="bg-black/30 rounded-xl p-4">
                          <div className="text-sm font-semibold mb-1">Drop</div>
                          <div className="text-gray-400">0mm</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-b from-red-500/10 to-orange-500/10 rounded-3xl p-12">
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/Jv5qmJB48KXI0W0s/scene.splinecode" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'lifestyle':
        return (
          <>
            <section className="min-h-screen bg-[#0a0a0a] pt-32">
              <div className="max-w-7xl mx-auto px-6">
                <div className="animate-on-scroll mb-24">
                  <h1 className="text-7xl font-bold mb-8">Street Style Essentials</h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Discover our curated selection of lifestyle sneakers, designed for ultimate comfort and standout style.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-16 items-center animate-on-scroll">
                  <div>
                    <h2 className="text-5xl font-bold mb-6">Air Max 270</h2>
                    <p className="text-gray-400 text-lg mb-8">
                      Experience the comfort with our Air Max 270, perfect for the daily grind and weekend adventures alike.
                    </p>
                    <button className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                      Shop Now
                    </button>
                  </div>
                  <div className="bg-gradient-to-b from-gray-500/10 to-gray-900/10 rounded-3xl p-12">
                    <div ref={splineContainerRef} style={{ height: '100vh', width: '100%', backgroundColor: '#000' }}>  
                      <Spline scene="https://prod.spline.design/Jv5qmJB48KXI0W0s/scene.splinecode" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-16 mt-24 animate-on-scroll">
                  <div className="bg-black/30 rounded-3xl p-12 transform hover:scale-105 transition-transform">
                    <h3 className="text-3xl font-bold mb-6">Blazer Mid '77</h3>
                    <p className="text-gray-400">Classic courtside nostalgia combined with modern design.</p>
                    <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Explore
                    </button>
                  </div>
                  <div className="bg-black/30 rounded-3xl p-12 transform hover:scale-105 transition-transform">
                    <h3 className="text-3xl font-bold mb-6">Air Force 1 Pixel</h3>
                    <p className="text-gray-400">A fresh angle on a favorite, with distorted outsole and midsole for a modern look.</p>
                    <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Explore
                    </button>
                  </div>
                  <div className="bg-black/30 rounded-3xl p-12 transform hover:scale-105 transition-transform">
                    <h3 className="text-3xl font-bold mb-6">Waffle One</h3>
                    <p className="text-gray-400">Staying true to the original while adding a touch of modern flair.</p>
                    <button className="mt-8 bg-white text-black py-3 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
        
      default:
        return (
          <div className="text-center mt-32">
            <h1 className="text-6xl font-bold">Page Not Found</h1>
            <p className="text-gray-400 mt-4">Sorry, the page you are looking for does not exist.</p>
            <button onClick={() => setCurrentPage('home')} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Go Home
            </button>
          </div>
        );
    }
  };

  return (
    <div>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg py-4 px-6 w-full">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setCurrentPage('home')}>NIKE SD </h1>
          <div>
            <button onClick={() => setCurrentPage('running')} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Timer className="w-6 h-6" /></button>
            <button onClick={() => setCurrentPage('basketball')} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Award className="w-6 h-6" /></button>
            <button onClick={() => setCurrentPage('soccer')} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Star className="w-6 h-6" /></button>
            <button onClick={() => setCurrentPage('training')} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><Heart className="w-6 h-6" /></button>
            <button onClick={() => setCurrentPage('lifestyle')} className="p-2 hover:bg-gray-700 rounded-full transition-colors"><ArrowRight className="w-6 h-6" /></button>
          </div>
        </div>
      </header>

      {renderContent()}
    </div>
  );
}

export default App;
