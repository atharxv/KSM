'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StackCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
}

function StackCard({ children, index, total }: StackCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(800);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Only scale/fade at the very end (last 15%) of the section's visibility
  // to ensure content remains readable while it's in focus.
  // A more gradual transition creates a smoother "stacking" feel.
  const scale = useTransform(scrollYProgress, [0.6, 1], [1, 0.94]);

  useEffect(() => {
    setViewportHeight(window.innerHeight);

    const handleResize = () => setViewportHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!container.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setSectionHeight(entry.contentRect.height);
      }
    });

    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  // Calculate top: if section is taller than viewport, it needs to be 
  // negative so we scroll to the bottom of it before it "sticks" 
  // for the next card to cover it.
  const stickyTop = Math.min(0, viewportHeight - sectionHeight);

  return (
    <div 
      ref={container} 
      style={{ 
        position: 'relative', // Ensure container has non-static position for useScroll
        zIndex: index,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        backgroundColor: 'var(--color-black)', // Moved from parent
      }}
    >
      <div 
        style={{ 
          position: 'sticky', 
          top: stickyTop, 
          isolation: 'isolate',
        }}
      >
        <motion.div
          style={{
            scale: index === total - 1 ? 1 : scale,
            transformOrigin: 'top center',
            willChange: 'transform',
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}

export default function MobileStackWrapper({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const isLocked = useRef(false);

  // Removed manual wheel/touch handlers as they conflict with CSS Scroll Snap
  // and the HeroSection's own scroll trapping logic.

  return (
    <div 
      ref={containerRef}
      style={{ 
        display: 'contents', // Allow children to be direct snap points for the body/html container
      }}
    >
      {children.map((child, index) => (
        <StackCard 
          key={index} 
          index={index} 
          total={children.length}
        >
          {child}
        </StackCard>
      ))}
    </div>
  );
}
