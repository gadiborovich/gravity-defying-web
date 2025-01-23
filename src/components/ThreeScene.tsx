import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingObjectProps {
  position: [number, number, number];
  color: string;
  scale: number;
  speed?: number;
}

const FloatingObject: React.FC<FloatingObjectProps> = ({ position, color, scale, speed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.5;
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.2;
  });

  useEffect(() => {
    // Initialize material properties
    if (materialRef.current) {
      materialRef.current.color = new THREE.Color(color);
      materialRef.current.emissive = new THREE.Color(color);
      materialRef.current.needsUpdate = true;
    }
  }, [color]);

  return (
    <mesh ref={meshRef} position={position} scale={[scale, scale, scale]}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        ref={materialRef}
        roughness={0.3}
        metalness={0.8}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

const Scene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingObject 
        position={[-4, 0, 0]} 
        color="#00ffff" 
        scale={0.8} 
        speed={1.2} 
      />
      <FloatingObject 
        position={[4, 2, -2]} 
        color="#BD00FF" 
        scale={0.6} 
        speed={0.8} 
      />
      <FloatingObject 
        position={[0, -2, 1]} 
        color="#00FF85" 
        scale={0.7} 
        speed={1} 
      />
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ 
          position: [0, 0, 15],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;