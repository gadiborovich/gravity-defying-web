import React from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeScene;