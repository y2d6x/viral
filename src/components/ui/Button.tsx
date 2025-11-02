'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cosmic-purple to-cosmic-magenta hover:from-cosmic-purple-light hover:to-cosmic-magenta text-white shadow-lg shadow-cosmic-purple/30 hover:shadow-cosmic-purple/50 cosmic-pulse',
    secondary: 'bg-dark-card hover:bg-dark-border text-foreground border border-dark-border',
    outline: 'border-2 border-cosmic-purple/50 text-cosmic-purple hover:bg-cosmic-purple/10 backdrop-blur-sm',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

