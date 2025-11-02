'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Phone Frame */}
        <div className="relative bg-dark-navy rounded-[3rem] p-3 shadow-2xl border-2 border-cosmic-purple/40">
          {/* Screen */}
          <div className="bg-gradient-to-b from-dark-card to-dark-navy rounded-[2.5rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-dark-navy rounded-b-3xl z-10" />
            
            {/* App Content */}
            <div className="relative pt-10 pb-8 px-4 h-[600px] bg-gradient-to-b from-[#0a0614] via-[#1a1229] to-[#0a0614]">
              {/* App Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between mb-6"
              >
                <h1 className="text-xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent">Viral</h1>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cosmic-purple/40 to-cosmic-magenta/40 cosmic-pulse" />
              </motion.div>

              {/* Trend Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-magenta/20 rounded-2xl p-4 mb-4 border border-cosmic-purple/30 cosmic-pulse"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-cosmic-magenta rounded-full animate-pulse" />
                  <span className="text-sm text-gray-400">Trending Now</span>
                </div>
                <h3 className="text-foreground font-semibold mb-2">#CosmicVibes</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cosmic-purple">+247% growth</span>
                  <span className="text-gray-500">2h ago</span>
                </div>
              </motion.div>

              {/* Analytics Chart */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-cyan/20 rounded-2xl p-4 border border-cosmic-cyan/30"
              >
                <h3 className="text-sm text-gray-400 mb-3">This Week</h3>
                <div className="flex items-end gap-2 h-24">
                  {[45, 70, 55, 85, 60, 90, 75].map((height, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-cosmic-purple via-cosmic-magenta to-cosmic-cyan rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.9 + idx * 0.1 }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Engagement</span>
                  <span className="text-cosmic-purple font-bold">+24%</span>
                </div>
              </motion.div>

              {/* Bottom Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-4 left-4 right-4 bg-dark-navy/80 backdrop-blur-lg rounded-2xl p-3 border border-cosmic-purple/30"
              >
                <div className="flex items-center justify-around">
                  {['Home', 'Trends', 'Create', 'Analytics', 'Profile'].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`w-8 h-8 mx-auto rounded-lg ${idx === 0 ? 'bg-cosmic-purple/30' : 'bg-transparent'} flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-cosmic-purple' : 'bg-gray-600'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Power Button */}
          <div className="absolute -right-1 top-24 w-1 h-12 bg-dark-border rounded-l" />
          
          {/* Volume Buttons */}
          <div className="absolute -left-1 top-24 w-1 h-8 bg-dark-border rounded-r" />
          <div className="absolute -left-1 top-36 w-1 h-8 bg-dark-border rounded-r" />
        </div>

        {/* Floating Glow */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -inset-6 rounded-[4rem] blur-3xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(217, 70, 239, 0.4), transparent)',
          }}
        />
      </motion.div>
    </div>
  );
};

