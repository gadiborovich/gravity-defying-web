import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingObject from './FloatingObject';

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        onCreated={({ gl }) => {
          console.log('WebGL Context:', gl);
          console.log('WebGL Version:', gl.getParameter(gl.VERSION));
          console.log('WebGL Vendor:', gl.getParameter(gl.VENDOR));
          console.log('WebGL Renderer:', gl.getParameter(gl.RENDERER));
        }}
      >
        <ambientLight intensity={0.5} />
        <FloatingObject />
      </Canvas>
    </div>
  );
};

export default ThreeScene;