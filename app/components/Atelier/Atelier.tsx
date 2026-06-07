'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Atelier.module.css';

export default function Atelier() {
  const [activatedSteps, setActivatedSteps] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleStepActivation = (index: number) => {
    setActivatedSteps(prev => {
      if (prev.has(index)) return prev;
      // Sequential: can only activate if previous step is already active (or it's the first)
      if (index > 0 && !prev.has(index - 1)) return prev;
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const steps = [
    {
      number: '01',
      title: 'Conception',
      desc: 'Every silhouette begins as a study in architecture — sketched with the discipline of a blueprint, not a doodle.'
    },
    {
      number: '02',
      title: 'Sourcing',
      desc: 'We travel to the mills of Como, the ateliers of Portugal, and the linen fields of Normandy to select only what meets our standard.'
    },
    {
      number: '03',
      title: 'Construction',
      desc: 'Cut by hand, assembled with precision. Every seam is reinforced, every button anchored — built to outlast the season.'
    },
    {
      number: '04',
      title: 'Refinement',
      desc: 'The final garment is pressed, inspected, and approved only when it carries the unmistakable weight of distinction.'
    }
  ];

  return (
    <div>
      {/* ============================
          SECTION 1: IMMERSIVE HERO
          ============================ */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <img
            src="/images/atelier.jpeg"
            alt="KSM Atelier — Behind the craft"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
          />
        </div>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>The KSM Atelier</p>
          <h1 className={styles.heroTitle}>
            Where Legacy<br />
            Is Forged
          </h1>
          <p className={styles.heroSubtitle}>
            Step behind the curtain. Every stitch, every fold, every fibre — 
            an act of deliberate distinction. This is where status is crafted, 
            not inherited.
          </p>
        </div>
      </section>

      {/* ============================
          SECTION 2: PHILOSOPHY SPLIT
          ============================ */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyText}>
          <p className={styles.philosophyEyebrow}>Our Philosophy</p>
          <h2 className={styles.philosophyHeadline}>
            Crafted for those<br />
            who refuse to blend in
          </h2>
          <p className={styles.philosophyBody}>
            Some people walk into a room and others adjust. KSM is a symbol of
            status for a generation that moves fast and understands that status
            is visible, a cultural reference, the name people read as ambition
            and taste before anyone speaks.
          </p>
        </div>
        <div className={styles.philosophyImage}>
          <img
            src="/images/atelier/atelier%202.png"
            alt="KSM creative process"
            loading="lazy"
            decoding="async"
            width="800"
            height="1067"
          />
        </div>
      </section>

      {/* ============================
          SECTION 3: PROCESS TIMELINE
          ============================ */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <p className={styles.processEyebrow}>The Making</p>
          <h2 className={styles.processTitle}>From Vision to Vessel</h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineStep}
              onMouseEnter={() => handleStepActivation(index)}
              onViewportEnter={isMobile ? () => handleStepActivation(index) : undefined}
              viewport={isMobile ? { once: true, amount: 0.8 } : undefined}
            >
              <div className={`${styles.stepNumber} ${activatedSteps.has(index) ? styles.stepNumberActive : ''}`}>
                {step.number}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          SECTION 4: MATERIALS SHOWCASE
          ============================ */}
      <section className={styles.materialsSection}>
        <div className={styles.materialsInner}>
          <div className={styles.materialsHeader}>
            <div>
              <p className={styles.materialsEyebrow}>Materiality</p>
              <h2 className={styles.materialsTitle}>
                The Fabric of<br />
                Distinction
              </h2>
            </div>
            <p className={styles.materialsSubtitle}>
              We source only what speaks to our standard — textiles that carry 
              history, texture, and unmistakable presence.
            </p>
          </div>

          <div className={styles.materialsGrid}>
            <div className={styles.materialCard}>
              <img
                src="/images/cafeoldmoney.jpeg"
                alt="Italian Linen"
                loading="lazy"
                decoding="async"
                width="800"
                height="1067"
              />
              <div className={styles.materialOverlay}>
                <span className={styles.materialName}>Italian Linen</span>
                <span className={styles.materialOrigin}>Como, Italy</span>
              </div>
            </div>

            <div className={styles.materialCard}>
              <img
                src="/images/Old money.jpeg"
                alt="Portuguese Cotton"
                loading="lazy"
                decoding="async"
                width="800"
                height="1067"
              />
              <div className={styles.materialOverlay}>
                <span className={styles.materialName}>Portuguese Cotton</span>
                <span className={styles.materialOrigin}>Porto, Portugal</span>
              </div>
            </div>

            <div className={styles.materialCard}>
              <img
                src="/images/Outfit Playa Hombre.jpeg"
                alt="Normandy Linen"
                loading="lazy"
                decoding="async"
                width="800"
                height="1067"
              />
              <div className={styles.materialOverlay}>
                <span className={styles.materialName}>French Cashmere</span>
                <span className={styles.materialOrigin}>Normandy, France</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 5: MOOD BOARD
          ============================ */}
      <section className={styles.moodSection}>
        <div className={styles.moodHeader}>
          <p className={styles.moodEyebrow}>Inspirations</p>
          <h2 className={styles.moodTitle}>The World of KSM</h2>
        </div>

        <div className={styles.moodGrid}>
          <div className={styles.moodItem}>
            <img
              src="/images/atelier/atl%20page%20img%20.png"
              alt="Mediterranean yachting"
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
            <span className={styles.moodCaption}>Mediterranean Coast</span>
          </div>

          <div className={styles.moodItem}>
            <img
              src="/images/Midderianwater.jpg"
              alt="Coastal heritage"
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
            <span className={styles.moodCaption}>Coastal Heritage</span>
          </div>

          <div className={styles.moodItem}>
            <img
              src="/images/atelier/ksm%202.png"
              alt="Editorial fashion"
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
            <span className={styles.moodCaption}>Editorial Presence</span>
          </div>

          <div className={styles.moodItem}>
            <img
              src="/images/bluehorn.jpeg"
              alt="Architectural inspiration"
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
            <span className={styles.moodCaption}>Architectural Precision</span>
          </div>
        </div>
      </section>

      {/* ============================
          SECTION 6: CLOSING STATEMENT
          ============================ */}
      <section className={styles.closingSection}>
        <blockquote className={styles.closingQuote}>
          "We don't dress people. We arm them with the confidence 
          that comes from knowing every detail was considered, every choice 
          deliberate, every thread justified."
        </blockquote>
        <p className={styles.closingAttribution}>— The House of KSM</p>
        <a href="/products" className={styles.closingCta}>
          Explore the Collection
        </a>
      </section>
    </div>
  );
}
