import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../src/assets/css/Startup.css';

const Startup = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="ss-wrapper">
      {/* Background Ambient Glows */}
      <div className="ss-glow ss-glow-1"></div>
      <div className="ss-glow ss-glow-2"></div>

      <div className="ss-container">
        {/* HERO SECTION */}
        <header className="ss-hero">
          <motion.div {...fadeIn}>
            <span className="ss-badge">Building the Future</span>
            <h1 className="ss-title">
              We fuel the <span className="ss-gradient-text">ambitious</span>, <br />
              not just the funded.
            </h1>
            <p className="ss-subtitle">
              Ikartandco is a strategic partner for early-stage founders. We provide the capital, 
              network, and operational muscle to turn raw ideas into scalable market leaders.
            </p>
            <div className="ss-hero-btns">
              <a href="/#contact" className="ss-btn-primary">Pitch Your Idea</a>
              <a href="#approach" className="ss-btn-secondary">Our Philosophy</a>
            </div>
          </motion.div>
        </header>

        {/* BENTO GRID - WHO & WHAT */}
        <section className="ss-section">
          <div className="ss-section-header">
            <h2 className="ss-section-title">The Thesis</h2>
            <p>Our focus is on high-leverage innovation and sustainable growth.</p>
          </div>

          <div className="ss-bento-grid">
            <motion.div className="ss-bento-item tall" {...fadeIn}>
              <div className="ss-card-content">
                <span className="ss-icon">🚀</span>
                <h3>Early Stage</h3>
                <p>From back-of-the-napkin ideas to MVP-ready prototypes. We step in when the vision is clear but the path is just beginning.</p>
              </div>
            </motion.div>

            <motion.div className="ss-bento-item wide" {...fadeIn}>
              <div className="ss-card-content">
                <span className="ss-icon">💡</span>
                <h3>Innovation Driven</h3>
                <p>We look for founders building unique platforms that solve real-world friction, not just another "copy-paste" business model.</p>
              </div>
            </motion.div>

            <motion.div className="ss-bento-item" {...fadeIn}>
              <div className="ss-card-content">
                <span className="ss-icon">💰</span>
                <h3>Direct Capital</h3>
                <p>Seed investments aligned with long-term value creation.</p>
              </div>
            </motion.div>

            <motion.div className="ss-bento-item" {...fadeIn}>
              <div className="ss-card-content">
                <span className="ss-icon">🧠</span>
                <h3>Strategic Edge</h3>
                <p>Access to veteran operators who have scaled before.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* APPROACH SECTION - MINIMALIST LIST */}
        <section className="ss-section ss-approach-box" id="approach">
          <div className="ss-approach-content">
            <h2 className="ss-section-title">The Approach</h2>
            <div className="ss-approach-grid">
              <div className="ss-approach-card">
                <div className="ss-num">01</div>
                <h4>Founder First</h4>
                <p>We start with a conversation, not a pitch deck. Relationships drive our decisions.</p>
              </div>
              <div className="ss-approach-card">
                <div className="ss-num">02</div>
                <h4>Operational Skin</h4>
                <p>We don't just advise; we help build your initial business structure and processes.</p>
              </div>
              <div className="ss-approach-card">
                <div className="ss-num">03</div>
                <h4>Network Access</h4>
                <p>Instantly tap into a global network of professionals, operators, and early adopters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="ss-cta-section">
          <motion.div className="ss-cta-inner" {...fadeIn}>
            <h2>Ready to build something <span className="ss-gradient-text">meaningful?</span></h2>
            <p>If you have an execution mindset and a clear vision, we want to hear from you.</p>
            <a href="/#contact" className="ss-btn-glow">
              Start the Conversation
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Startup;