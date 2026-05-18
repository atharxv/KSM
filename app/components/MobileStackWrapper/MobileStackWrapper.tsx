'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './MobileStackWrapper.module.css';

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

  // Smooth interpolation using a spring for that "silky" feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.005
  });

  // Calculate transformations based on the smoothed scroll progress
  // We start the transition earlier (0.1 instead of 0.6) for a more gradual feel
  const scale = useTransform(smoothProgress, [0.1, 1], [1, 0.85]);
  const opacity = useTransform(smoothProgress, [0.1, 1], [1, 0.5]);
  const vignetteOpacity = useTransform(smoothProgress, [0.1, 1], [0, 0.35]);

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
            opacity: index === total - 1 ? 1 : opacity,
            transformOrigin: 'top center',
            willChange: 'transform, opacity',
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className={styles.cardVignette}
          style={{ opacity: vignetteOpacity }}
        />
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
