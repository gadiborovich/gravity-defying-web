import React from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingObject from './FloatingObject';

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        onCreated={({ gl }) => {
          const context = gl.domElement.getContext('webgl2') || gl.domElement.getContext('webgl');
          if (context) {
            console.log('WebGL Context:', context);
            console.log('WebGL Version:', context.getParameter(context.VERSION));
            console.log('WebGL Vendor:', context.getParameter(context.VENDOR));
            console.log('WebGL Renderer:', context.getParameter(context.RENDERER));
          } else {
            console.warn('WebGL context not available');
          }
        }}
      >
        <ambientLight intensity={0.5} />
        <FloatingObject />
      </Canvas>
    </div>
  );
};

export default ThreeScene;