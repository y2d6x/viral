'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PhoneMockupProps {
  variant?: 'trends' | 'analytics' | 'create';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ variant = 'trends' }) => {
  return (
    <div className="relative w-full max-w-md mx-auto">
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
            <div className="relative pt-10 pb-8 px-4 h-[550px] bg-gradient-to-b from-[#0a0614] via-[#1a1229] to-[#0a0614]">
              {/* App Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between mb-4"
              >
                <h1 className="text-sm font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-magenta bg-clip-text text-transparent">Viral</h1>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cosmic-purple/40 to-cosmic-magenta/40 cosmic-pulse" />
              </motion.div>

              {/* Different Content Based on Variant */}
              {variant === 'trends' && (
                <>
                  {/* Trend Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-magenta/20 rounded-xl p-3 mb-3 border border-cosmic-purple/30 cosmic-pulse"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className="w-1 h-1 bg-cosmic-magenta rounded-full animate-pulse" />
                      <span className="text-[10px] text-gray-400">Trending Now</span>
                    </div>
                    <h3 className="text-xs text-foreground font-semibold mb-1">#CosmicVibes</h3>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-cosmic-purple">+247% growth</span>
                      <span className="text-gray-500">2h ago</span>
                    </div>
                  </motion.div>

                  {/* Trending List */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-dark-card/50 rounded-xl p-3 border border-dark-border mb-3"
                  >
                    <h3 className="text-[10px] text-gray-400 mb-1.5">Top Trends</h3>
                    <div className="space-y-1.5">
                      {[
                        { tag: '#AIArt', growth: '247%' },
                        { tag: '#CreatorLife', growth: '189%' },
                        { tag: '#ViralContent', growth: '156%' },
                        { tag: '#TechTrends', growth: '134%' },
                        { tag: '#DigitalArt', growth: '112%' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-[10px] text-foreground">{item.tag}</span>
                          <span className="text-[10px] text-cosmic-purple">↑ {item.growth}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}

              {variant === 'analytics' && (
                <>
                  {/* Analytics Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-cosmic-purple/20 to-cosmic-cyan/20 rounded-xl p-3 mb-3 border border-cosmic-cyan/30"
                  >
                    <h3 className="text-[10px] text-gray-400 mb-1.5">This Week</h3>
                    <div className="flex items-end gap-1 h-16">
                      {[45, 70, 55, 85, 60, 90, 75].map((height, idx) => (
                        <motion.div
                          key={idx}
                          className="flex-1 bg-gradient-to-t from-cosmic-purple via-cosmic-magenta to-cosmic-cyan rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                        />
                      ))}
                    </div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">Engagement</span>
                      <span className="text-cosmic-purple font-bold text-[10px]">+24%</span>
                    </div>
                  </motion.div>

                  {/* Stats Grid */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 gap-1.5 mb-3"
                  >
                    <div className="bg-dark-card/50 rounded-lg p-1.5 border border-dark-border">
                      <p className="text-[10px] text-gray-400 mb-0.5">Followers</p>
                      <p className="text-xs font-bold text-foreground">12.5K</p>
                      <p className="text-[10px] text-cosmic-purple">+18%</p>
                    </div>
                    <div className="bg-dark-card/50 rounded-lg p-1.5 border border-dark-border">
                      <p className="text-[10px] text-gray-400 mb-0.5">Reach</p>
                      <p className="text-xs font-bold text-foreground">45K</p>
                      <p className="text-[10px] text-cosmic-cyan">+32%</p>
                    </div>
                    <div className="bg-dark-card/50 rounded-lg p-1.5 border border-dark-border">
                      <p className="text-[10px] text-gray-400 mb-0.5">Views</p>
                      <p className="text-xs font-bold text-foreground">128K</p>
                      <p className="text-[10px] text-cosmic-magenta">+42%</p>
                    </div>
                    <div className="bg-dark-card/50 rounded-lg p-1.5 border border-dark-border">
                      <p className="text-[10px] text-gray-400 mb-0.5">Likes</p>
                      <p className="text-xs font-bold text-foreground">8.2K</p>
                      <p className="text-[10px] text-cosmic-pink">+28%</p>
                    </div>
                  </motion.div>
                </>
              )}

              {variant === 'create' && (
                <>
                  {/* Post Draft */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-cosmic-pink/20 to-cosmic-magenta/20 rounded-xl p-3 mb-3 border border-cosmic-pink/30"
                  >
                    <h3 className="text-[10px] text-gray-400 mb-1.5">New Post</h3>
                    <div className="bg-dark-card/50 rounded-lg p-1.5 mb-1.5">
                      <p className="text-[10px] text-gray-400 mb-0.5">Caption</p>
                      <p className="text-[10px] text-foreground">Just launched something amazing! 🚀</p>
                    </div>
                    <div className="flex gap-1.5 mb-2">
                      <button className="flex-1 bg-cosmic-purple/30 text-cosmic-purple text-[10px] py-1 rounded-lg font-semibold">AI Enhance</button>
                      <button className="flex-1 bg-cosmic-magenta/30 text-cosmic-magenta text-[10px] py-1 rounded-lg font-semibold">Post</button>
                    </div>
                    <div className="bg-dark-card/50 rounded-lg p-1.5 mb-1.5">
                      <p className="text-[10px] text-gray-400 mb-1">Hashtags</p>
                      <div className="flex flex-wrap gap-1">
                        {['#viral', '#trending', '#ai'].map((tag, idx) => (
                          <span key={idx} className="text-[10px] text-cosmic-purple">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Suggestions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-dark-card/50 rounded-xl p-3 border border-dark-border"
                  >
                    <h3 className="text-[10px] text-gray-400 mb-1.5">AI Suggestions</h3>
                    <div className="space-y-1">
                      {['"Behind the scenes"', '"Day in my life"', '"Quick tip"', '"Tutorial"', '"Tips & Tricks"'].map((suggestion, idx) => (
                        <div key={idx} className="text-[10px] text-foreground bg-dark-navy/50 p-1 rounded">
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}

              {/* Bottom Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-3 left-3 right-3 bg-dark-navy/80 backdrop-blur-lg rounded-xl p-2 border border-cosmic-purple/30"
              >
                <div className="flex items-center justify-around">
                  {['Home', 'Trends', 'Create', 'Analytics', 'Profile'].map((item, idx) => {
                      const activeIndex = variant === 'trends' ? 1 : variant === 'create' ? 2 : variant === 'analytics' ? 3 : 0;
                      return (
                        <div key={idx} className="text-center">
                          <div className={`w-7 h-7 mx-auto rounded-lg ${idx === activeIndex ? 'bg-cosmic-purple/30' : 'bg-transparent'} flex items-center justify-center`}>
                            <div className={`w-1.5 h-1.5 rounded-full ${idx === activeIndex ? 'bg-cosmic-purple' : 'bg-gray-600'}`} />
                          </div>
                        </div>
                      );
                    })}
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

