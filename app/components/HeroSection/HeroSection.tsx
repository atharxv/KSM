'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const mediaFullyExpanded = useRef(false);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);
  const [scrollTrapEnabled, setScrollTrapEnabled] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScrollTrapEnabled(true);
    }, 10 * 40 + 600); // 1000ms (10 chars * 40ms stagger + 600ms transition duration)
    return () => clearTimeout(timer);
  }, []);
  
  // Track raw progress
  const scrollProgressRef = useRef(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Create a spring for perfectly smooth interpolation without React state lag
  const springProgress = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transforms mapping spring value [0, 1] to CSS values
  const bgOpacity = useTransform(springProgress, [0, 1], [1, 1]);
  const overlayOpacity = useTransform(springProgress, [0, 1], [0.3, 0.3]);
  
  // Dimensions (Use consistent units for proper framer-motion interpolation)
  // MOBILE: Keep static to prevent jarring expansion on phones
  const mediaWidthMobile = useTransform(springProgress, [0, 1], ['80vw', '80vw']); 
  const mediaHeightMobile = useTransform(springProgress, [0, 1], ['60vw', '60vw']); 
  
  const mediaWidthDesktop = useTransform(springProgress, [0, 1], ['32vw', '58vw']);
  const mediaHeightDesktop = useTransform(springProgress, [0, 1], ['24vw', '33vw']); // Subtler expansion as requested
  
  // Border radius: stays round for a more premium feel
  const borderRadius = useTransform(springProgress, [0, 1], ['12px', '12px']);

  // Title splits
  const titleLeftMobile = useTransform(springProgress, [0, 1], ['0vw', '-100vw']);
  const titleRightMobile = useTransform(springProgress, [0, 1], ['0vw', '100vw']);
  
  const titleLeftDesktop = useTransform(springProgress, [0, 1], ['0vw', '-18vw']);
  const titleRightDesktop = useTransform(springProgress, [0, 1], ['0vw', '18vw']);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollTrapEnabled) return;

    const handleWheel = (e: globalThis.WheelEvent) => {
      // Skip if a panel/overlay is open (body scroll locked) or if event originated from a panel
      const target = e.target as HTMLElement;
      if (
        document.body.style.overflow === 'hidden' || 
        (target.closest && (target.closest('[class*="slidePanel"]') || target.closest('[class*="floatingMobileNav"]')))
      ) {
        return;
      }

      // If expanded and scrolling up at top of page, un-expand
      if (mediaFullyExpanded.current && e.deltaY < 0 && window.scrollY <= 5) {
        mediaFullyExpanded.current = false;
        e.preventDefault();
      } else if (!mediaFullyExpanded.current) {
        // If not expanded, trap scroll and animate expansion
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0015; // Increased sensitivity for better feel
        
        let newProgress = scrollProgressRef.current + scrollDelta;
        newProgress = Math.min(Math.max(newProgress, 0), 1);
        
        scrollProgressRef.current = newProgress;
        springProgress.set(newProgress);

        if (newProgress >= 1) {
          mediaFullyExpanded.current = true;
        }
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e: globalThis.TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: globalThis.TouchEvent) => {
      if (!touchStartY) return;

      // Skip if a panel/overlay is open (body scroll locked) or if event originated from a panel
      const target = e.target as HTMLElement;
      if (
        document.body.style.overflow === 'hidden' || 
        (target.closest && (target.closest('[class*="slidePanel"]') || target.closest('[class*="floatingMobileNav"]')))
      ) {
        return;
      }

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded.current && deltaY < -20 && window.scrollY <= 5) {
        mediaFullyExpanded.current = false;
        e.preventDefault();
      } else if (!mediaFullyExpanded.current) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.012 : 0.008; 
        const scrollDelta = deltaY * scrollFactor;
        
        let newProgress = scrollProgressRef.current + scrollDelta;
        newProgress = Math.min(Math.max(newProgress, 0), 1);
        
        scrollProgressRef.current = newProgress;
        springProgress.set(newProgress);

        if (newProgress >= 1) {
          mediaFullyExpanded.current = true;
        }
        touchStartY = touchY;
      }
    };

    const handleTouchEnd = (): void => {
      touchStartY = 0;
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded.current) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollTrapEnabled, springProgress]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Explicitly trigger video playback for iOS Safari compatibility
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = async () => {
        try {
          await video.play();
        } catch (err) {
          console.warn("Autoplay failed, retrying on interaction:", err);
          // Some browsers require a user interaction to play, but muted/playsinline usually bypasses this.
        }
      };
      
      handlePlay();
    }
  }, []);

  return (
    <div ref={sectionRef} className={styles.container} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          
          {/* Background: Skyscraper */}
          <motion.div
            className={styles.background}
            style={{ opacity: bgOpacity }}
          >
            <img
              src="/images/Midderianwater.jpg"
              alt=""
              role="presentation"
              className={styles.backgroundImage}
              loading="eager"
            />
            <div className={styles.backgroundOverlay} />
          </motion.div>

          <div className={styles.contentLayer}>
            <div className={styles.centerStage}>
              
              <motion.div
                className={styles.videoBox}
                style={{
                  width: isMobileState ? mediaWidthMobile : mediaWidthDesktop,
                  height: isMobileState ? mediaHeightMobile : mediaHeightDesktop,
                  borderRadius: borderRadius,
                }}
              >
                <video
                  ref={videoRef}
                  className={styles.videoElement}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/images/hero-poster.jpg"
                >
                  <source src="/videos/HeroBG1.webm" type="video/webm" />
                  <source src="/videos/HeroBG1.mp4" type="video/mp4" />
                </video>
                
                <motion.div
                  className={styles.videoOverlay}
                  style={{ opacity: overlayOpacity }}
                />
              </motion.div>

              {/* Title Split Effect */}
              <div className={styles.titleContainer}>
                <motion.h2
                  className={styles.titleText}
                  style={{ x: isMobileState ? titleLeftMobile : titleLeftDesktop }}
                >
                  <span className={styles.srOnly}>KSM</span>
                  {"KSM".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      style={{ display: "inline-block" }}
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.04
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
                <motion.h2
                  className={styles.titleText}
                  style={{ x: isMobileState ? titleRightMobile : titleRightDesktop }}
                >
                  <span className={styles.srOnly}>ATELIER</span>
                  {"ATELIER".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      style={{ display: "inline-block" }}
                      aria-hidden="true"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: (3 * 0.04) + (index * 0.04) + 0.1
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
