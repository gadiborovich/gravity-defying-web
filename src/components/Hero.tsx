import React from 'react';
import ThreeScene from './ThreeScene';
import TextReveal from './TextReveal';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <ThreeScene />
      <div className="container mx-auto px-4 z-10">
        <TextReveal>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent-cyan to-accent-magenta text-transparent bg-clip-text">
            The Future of Finance
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
            Anti-Gravity Capital is pioneering the next generation of decentralized finance through innovative blockchain technology and strategic investments.
          </p>
        </TextReveal>
      </div>
    </div>
  );
};

export default Hero;