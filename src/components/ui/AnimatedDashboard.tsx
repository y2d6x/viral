'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, BarChart3 } from 'lucide-react';

export const AnimatedDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-dark-card to-dark-navy border border-dark-border rounded-2xl p-6 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trend Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-navy/50 rounded-xl p-4 border border-dark-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-semibold text-foreground">Trend Radar</h3>
            </div>
            <div className="relative h-32">
              <svg className="w-full h-full" viewBox="0 0 200 80">
                {/* Grid lines */}
                <line x1="0" y1="20" x2="200" y2="20" stroke="#2a2a3a" strokeWidth="1" />
                <line x1="0" y1="40" x2="200" y2="40" stroke="#2a2a3a" strokeWidth="1" />
                <line x1="0" y1="60" x2="200" y2="60" stroke="#2a2a3a" strokeWidth="1" />
                
                {/* Animated trend line */}
                <motion.path
                  d="M 0 60 Q 50 50, 100 30 T 200 10"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>7 days ago</span>
              <span className="text-gold">+127% trend growth</span>
            </div>
          </motion.div>

          {/* Sentiment Gauge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-navy/50 rounded-xl p-4 border border-dark-border"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-semibold text-foreground">Sentiment</h3>
            </div>
            <div className="relative h-32 flex items-center justify-center">
              <div className="relative w-32 h-32">
                {/* Gauge background */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#2a2a3a"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    initial={{ strokeDashoffset: 251.2 }}
                    animate={{ strokeDashoffset: [251.2, 62.8, 125.6, 62.8] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gaugeGradient">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-2xl font-bold text-gold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      87%
                    </motion.div>
                    <div className="text-xs text-gray-400">Positive</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Analytics Bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-navy/50 rounded-xl p-4 border border-dark-border md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-gold" />
              <h3 className="text-sm font-semibold text-foreground">Performance Analytics</h3>
            </div>
            <div className="flex items-end justify-between gap-3 h-32">
              {[45, 70, 55, 85, 60, 90, 75].map((height, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-gold to-purple-accent rounded-t-lg"
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.8 + idx * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 2,
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-3">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-3 gap-4 mt-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">+124%</div>
            <div className="text-xs text-gray-400">Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-accent">+89K</div>
            <div className="text-xs text-gray-400">Reach</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold">+2.3K</div>
            <div className="text-xs text-gray-400">New Followers</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating elements for depth */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-24 h-24 bg-gold/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-accent/10 rounded-full blur-xl"
      />
    </div>
  );
};

