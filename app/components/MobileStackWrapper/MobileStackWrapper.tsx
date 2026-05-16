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
        position: 'sticky', 
        top: stickyTop, 
        zIndex: index,
        isolation: 'isolate',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
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
  );
}

export default function MobileStackWrapper({ children }: { children: React.ReactNode[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef(0);
  const isLocked = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Allow small scrolls for natural feel, but trap strong "flicks"
      if (Math.abs(e.deltaY) < 20) return;

      const now = Date.now();
      // If we scrolled less than 1.2s ago, ignore further strong scrolls
      // to prevent "skipping" sections.
      if (now - lastScrollTime.current < 1200) {
        e.preventDefault();
        return;
      }

      lastScrollTime.current = now;
      // The browser's native snapping will now handle the "one page" move 
      // without being overwhelmed by subsequent wheel events.
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: 'var(--color-black)',
        position: 'relative'
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
