import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Box, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = ({ position, color, scale, speed = 1 }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <TorusKnot args={[1, 0.3, 128, 16]}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </TorusKnot>
    </mesh>
  );
};

const ThreeScene = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [0, 0, 15] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingObject 
        position={[-4, 0, 0]} 
        color="#00F6FF" 
        scale={0.8} 
        speed={1.2} 
      />
      <FloatingObject 
        position={[4, 2, -2]} 
        color="#FF3366" 
        scale={0.6} 
        speed={0.8} 
      />
      <FloatingObject 
        position={[0, -2, 1]} 
        color="#FFFFFF" 
        scale={0.7} 
        speed={1} 
      />
    </Canvas>
  );
};

export default ThreeScene;