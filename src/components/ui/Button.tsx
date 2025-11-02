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
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cosmic-purple focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cosmic-purple to-cosmic-magenta hover:from-cosmic-purple-light hover:to-cosmic-magenta-light text-white shadow-lg shadow-cosmic-purple/30 hover:shadow-xl hover:shadow-cosmic-purple/50 active:scale-[0.98] cosmic-pulse',
    secondary: 'bg-dark-card hover:bg-dark-card-hover text-foreground border border-dark-border hover:border-dark-border-hover active:scale-[0.98]',
    outline: 'border-2 border-cosmic-purple/60 text-cosmic-purple hover:bg-cosmic-purple/15 hover:border-cosmic-purple backdrop-blur-sm active:scale-[0.98]',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[48px]',
    lg: 'px-8 py-4 text-lg min-h-[52px]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} aria-label={typeof children === 'string' ? children : 'Link'}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} aria-label={typeof children === 'string' ? children : 'Button'}>
      {children}
    </button>
  );
};

