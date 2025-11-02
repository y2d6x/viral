'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const CubeSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background matching section color - solid dark indigo/purple */}
      <div 
        className="absolute inset-0"
        style={{
          background: '#1A0033',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Cube Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0],
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-[400rem]"
            >
              <div className="relative aspect-square">
                <Image
                  src="/cube-image.png"
                  alt="3D Glowing Cube"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Latin Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">Lorem Ipsum</span>
              <br />
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #8b5cf6, #d946ef, #60a5fa, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text'
                }}
              >
                Dolor Sit Amet
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-6"
            >
              <button 
                className="px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{
                  background: 'linear-gradient(to right, #8b5cf6, #d946ef)',
                  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.4), 0 0 20px rgba(217, 70, 239, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #a78bfa, #ec4899)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(139, 92, 246, 0.5), 0 0 30px rgba(217, 70, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #8b5cf6, #d946ef)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(139, 92, 246, 0.4), 0 0 20px rgba(217, 70, 239, 0.3)';
                }}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

