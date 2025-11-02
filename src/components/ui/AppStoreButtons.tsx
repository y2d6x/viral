'use client';

import React from 'react';
import { Apple } from 'lucide-react';

interface AppStoreButtonsProps {
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
}

export const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ 
  layout = 'horizontal',
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClass = `${sizeClasses[size]} bg-dark-card hover:bg-dark-border border border-dark-border rounded-xl transition-all duration-300 flex items-center gap-3 group`;

  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-col sm:flex-row'} gap-4`}>
      {/* App Store Button */}
      <a
        href="#"
        className={buttonClass}
      >
        <Apple className="w-8 h-8 text-foreground group-hover:text-gold transition-colors" />
        <div className="text-left">
          <div className="text-xs text-gray-400">Download on the</div>
          <div className="font-semibold text-foreground">App Store</div>
        </div>
      </a>

      {/* Google Play Button */}
      <a
        href="#"
        className={buttonClass}
      >
        <svg className="w-8 h-8 text-foreground group-hover:text-gold transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="text-left">
          <div className="text-xs text-gray-400">GET IT ON</div>
          <div className="font-semibold text-foreground">Google Play</div>
        </div>
      </a>
    </div>
  );
};

