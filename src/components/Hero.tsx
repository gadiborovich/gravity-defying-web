import React from 'react';
import { Button } from './ui/button';
import FloatingShapes from './FloatingShapes';

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative overflow-hidden">
      <FloatingShapes />
      <div className="container mx-auto px-4 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading bg-gradient-to-r from-accent-teal via-accent-purple to-accent-green text-transparent bg-clip-text animate-fade-in">
          Investing in Those Who Defy Gravity
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in">
          We fund builders who transcend market limitations
        </p>
        <div className="flex gap-4 justify-center animate-fade-in">
          <Button 
            className="bg-gradient-to-r from-accent-teal to-accent-purple hover:opacity-90"
            size="lg"
          >
            Our Portfolio
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent-teal text-accent-teal hover:bg-accent-teal/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;