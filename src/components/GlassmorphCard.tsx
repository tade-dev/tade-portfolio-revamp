
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
  animated?: boolean;
}

const GlassmorphCard = ({ 
  children, 
  className = '', 
  variant = 'default',
  animated = true 
}: GlassmorphCardProps) => {
  const variants = {
    default: 'bg-white/10 backdrop-blur-md border border-white/20',
    subtle: 'bg-white/5 backdrop-blur-sm border border-white/10',
    strong: 'bg-white/20 backdrop-blur-xl border border-white/30'
  };

  return (
    <div className={cn(
      'relative rounded-xl shadow-lg',
      variants[variant],
      animated && 'transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl',
      className
    )}>
      {/* Liquid background effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassmorphCard;
