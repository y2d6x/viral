'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AppStoreButtons } from '@/components/ui/AppStoreButtons';
import { landingData } from '@/data/landing-data';
import { QrCode, Smartphone } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { finalCta } = landingData;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-dark-navy to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/20 via-purple-accent/10 to-transparent" />
      
      {/* Animated background shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-semibold border border-gold/20 mb-6"
          >
            <Smartphone className="w-4 h-4" />
            <span>Available on iOS & Android</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gold via-purple-accent to-gold bg-clip-text text-transparent">
              {finalCta.headline}
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            {finalCta.copy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-8 mb-12"
          >
            <AppStoreButtons size="lg" layout="horizontal" />
            
            {/* QR Code Section */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="w-24 h-24 bg-white/10 rounded-xl flex items-center justify-center">
                <QrCode className="w-16 h-16 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground mb-1">Scan to Download</p>
                <p className="text-xs">Open your camera app and point at the QR code</p>
              </div>
            </div>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
              <span>Cancel from app anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

