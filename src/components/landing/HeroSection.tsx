'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Button } from '@/components/ui/Button';
import { landingData } from '@/data/landing-data';

export const HeroSection: React.FC = () => {
  const { hero } = landingData;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Voice GIF Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Voice.gif"
          alt="Voice Background"
          fill
          priority
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Dark Overlay for Content Readability */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            >
              <span className="text-foreground">{hero.headline.split('. ')[0]}.</span>
              <br />
              <span className="bg-gradient-to-r from-cosmic-purple via-cosmic-magenta to-cosmic-pink bg-clip-text text-transparent">
                {hero.headline.split('. ').slice(1).join('. ')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" variant="primary" className="min-w-[200px]">
                {hero.cta}
              </Button>
              <Button size="lg" variant="outline" className="min-w-[200px]">
                See How It Works
              </Button>
            </motion.div>

            {/* Trust Indicators & Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-magenta border-2 border-dark-card"
                      style={{ zIndex: 5 - i }}
                    />
                  ))}
                </div>
                <span className="text-gray-400 ml-2">
                  {hero.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 fill-gold text-gold" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 App Store</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right: Multi-Phone Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end min-h-[750px]"
          >
            <div className="relative w-full max-w-2xl h-[750px]">
              {/* Stacked phone mockups */}
              <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
                {/* Phone 1 - Center, largest */}
                <div
                  className="absolute left-1/2 top-1/2 z-30 opacity-100 bg-black rounded-[3rem]"
                  style={{ width: '320px', transform: 'translate(-50%, -50%) rotateZ(-5deg)' }}
                >
                  <PhoneMockup />
                </div>

                {/* Phone 2 - Left, smaller, rotated */}
                <div
                  className="absolute left-0 top-1/2 z-20 opacity-90 bg-black rounded-[3rem]"
                  style={{ width: '280px', transform: 'translateY(-50%) rotateZ(-15deg) scale(0.9)' }}
                >
                  <PhoneMockup />
                </div>

                {/* Phone 3 - Right, smaller, rotated */}
                <div
                  className="absolute right-0 top-1/2 z-10 opacity-85 bg-black rounded-[3rem]"
                  style={{ width: '300px', transform: 'translateY(-50%) rotateZ(15deg) scale(0.95)' }}
                >
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

