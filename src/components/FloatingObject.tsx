import React from 'react';

const FloatingObject: React.FC = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default FloatingObject;