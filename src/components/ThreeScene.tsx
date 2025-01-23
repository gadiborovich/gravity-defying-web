import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingObject from './FloatingObject';

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <FloatingObject />
      </Canvas>
    </div>
  );
};

export default ThreeScene;