'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StackCardProps {
  children: React.ReactNode;
  index: number;
  total: number;
  isMobile: boolean;
}

function StackCard({ children, index, total, isMobile }: StackCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  // Only scale/fade at the very end (last 15%) of the section's visibility
  // to ensure content remains readable while it's in focus.
  const scale = useTransform(scrollYProgress, [0.85, 1], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.7]);

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

  if (!isMobile) {
    return <div ref={container} style={{ position: 'relative' }}>{children}</div>;
  }

  // Calculate top: if section is taller than viewport, it needs to be 
  // negative so we scroll to the bottom of it before it "sticks" 
  // for the next card to cover it.
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const stickyTop = Math.min(0, viewportHeight - sectionHeight);

  return (
    <div 
      ref={container} 
      style={{ 
        position: 'sticky', 
        top: stickyTop, 
        zIndex: index,
        backgroundColor: 'var(--color-off-white)', // Ensure solid background to prevent bleed
      }}
    >
      <motion.div
        style={{
          scale: index === total - 1 ? 1 : scale,
          opacity: index === total - 1 ? 1 : opacity,
          transformOrigin: 'top center',
          backgroundColor: 'inherit',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function MobileStackWrapper({ children }: { children: React.ReactNode[] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      backgroundColor: 'var(--color-black)',
      position: 'relative'
    }}>
      {children.map((child, index) => (
        <StackCard 
          key={index} 
          index={index} 
          total={children.length} 
          isMobile={isMobile}
        >
          {child}
        </StackCard>
      ))}
    </div>
  );
}

