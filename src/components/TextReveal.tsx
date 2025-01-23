import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

const TextReveal = ({ children, delay = 0 }: TextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [delay]);

  return (
    <div ref={textRef} className="overflow-hidden">
      {children}
    </div>
  );
};

export default TextReveal;