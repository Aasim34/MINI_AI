import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';

const FloatingCube = ({ position, color, size = 1 }) => {
  const meshRef = useRef();

  // Rotate the cube smoothly
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Box ref={meshRef} position={position} args={[size, size, size]}>
        <meshStandardMaterial 
          color={color} 
          metalness={0.5} 
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </Box>
    </Float>
  );
};

export default FloatingCube;