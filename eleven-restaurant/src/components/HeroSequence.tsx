import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSequence: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  
  const frameCount = 192;
  const currentFrame = (index: number) => 
    `/hero-sequence/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`; 
  // -------------------------

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const images: HTMLImageElement[] = [];
    const airplay = { frame: 0 };

    let loadedCount = 0;
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoading(false);
          render();
        }
      };
      images.push(img);
    }

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[airplay.frame];
      if (img) {
        const scale = 1.1; 
        const width = canvas.width * scale;
        const height = canvas.height * scale;
        const x = (canvas.width - width) / 2;
        const y = (canvas.height - height) / 2;
        context.drawImage(img, x, y, width, height);
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    gsap.to(airplay, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", 
        scrub: 0.5,
        pin: true,
      },
      onUpdate: render,
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white">
          <p className="text-xl font-light tracking-widest animate-pulse">LOADING EXPERIENCE...</p>
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="block w-full h-screen object-cover" 
        style={{ imageRendering: 'auto' as any }} 
      />
      
      {!isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-white text-6xl md:text-9xl font-serif opacity-80">Eleven</h1>
          <p className="text-white/50 tracking-[0.5em] uppercase mt-4">Scroll to Enter</p>
        </div>
      )}
    </div>
  );
};

export default HeroSequence;