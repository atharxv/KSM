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
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  if (!isMobile) {
    return <div ref={container}>{children}</div>;
  }

  return (
    <div 
      ref={container} 
      style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: index,
        // Ensure each card has its own "space" to scroll through
        // but it will be covered by the next one.
      }}
    >
      <motion.div
        style={{
          scale: index === total - 1 ? 1 : scale,
          opacity: index === total - 1 ? 1 : opacity,
          transformOrigin: 'top center',
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

