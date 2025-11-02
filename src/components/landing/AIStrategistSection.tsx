'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User, BarChart2 } from 'lucide-react';
import { landingData } from '@/data/landing-data';

export const AIStrategistSection: React.FC = () => {
  const { aiStrategist } = landingData;

  return (
    <section className="py-20 bg-gradient-to-b from-dark-card/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-purple-accent bg-clip-text text-transparent">
              {aiStrategist.title}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
            {aiStrategist.subtitle}
          </p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {aiStrategist.benefit}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {/* Chat Interface Mockup */}
          <div className="bg-dark-card border border-dark-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-dark-navy border-b border-dark-border px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-purple-accent flex items-center justify-center">
                <Bot className="w-6 h-6 text-dark-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">AI Strategist</h3>
                <p className="text-xs text-gray-400">Always online</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 min-h-[400px] bg-gradient-to-b from-dark-navy/20 to-dark-card">
              {/* User Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-dark-border flex items-center justify-center shrink-0">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
                <div className="bg-dark-navy border border-dark-border rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                  <p className="text-gray-200">{aiStrategist.exampleQuestion}</p>
                </div>
              </motion.div>

              {/* AI Response */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 flex-row-reverse"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-purple-accent flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-dark-navy" />
                </div>
                <div className="bg-gradient-to-br from-gold/10 to-purple-accent/10 border border-gold/20 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-gray-200 mb-3">
                    {aiStrategist.exampleAnswer}
                  </p>
                  
                  {/* Mini chart visualization */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="bg-dark-navy/50 rounded-lg p-3 mt-3 border border-dark-border"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="w-4 h-4 text-gold" />
                      <span className="text-xs text-gray-400">Engagement by Time</span>
                    </div>
                    <div className="flex items-end gap-1 h-16">
                      {[30, 40, 35, 90, 95, 92, 88, 50].map((height, idx) => (
                        <motion.div
                          key={idx}
                          className={`flex-1 rounded-t ${
                            idx >= 3 && idx <= 6
                              ? 'bg-gradient-to-t from-gold to-purple-accent'
                              : 'bg-gray-700'
                          }`}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9 + idx * 0.05 }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>12am</span>
                      <span className="text-gold font-semibold">6-9pm (Peak)</span>
                      <span>11pm</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Typing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-purple-accent flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-dark-navy" />
                </div>
                <div className="bg-dark-navy border border-dark-border rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-gold rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gold rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gold rounded-full"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="bg-dark-navy border-t border-dark-border px-6 py-4">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ask your AI strategist anything..."
                  className="flex-1 bg-dark-card border border-dark-border rounded-lg px-4 py-2 text-foreground placeholder-gray-500 focus:outline-none focus:border-gold/50 transition-colors"
                  disabled
                />
                <button className="bg-gold hover:bg-gold-light text-dark-navy px-4 py-2 rounded-lg font-semibold transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

