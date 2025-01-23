import React, { Suspense } from 'react';
import Hero from '../components/Hero';

const Index = () => {
  return (
    <div className="pt-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
    </div>
  );
};

export default Index;