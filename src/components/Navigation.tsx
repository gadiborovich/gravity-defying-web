import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-space-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-heading font-bold bg-gradient-to-r from-accent-cyan to-accent-magenta text-transparent bg-clip-text">
          Anti-Gravity Capital
        </div>
        <div className="hidden md:flex space-x-8">
          {['About', 'Portfolio', 'Team', 'Contact'].map((item) => (
            <button
              key={item}
              className="text-white/80 hover:text-accent-cyan transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <Button
          className="bg-accent-magenta hover:bg-accent-magenta/80 text-white"
        >
          Connect Wallet
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;