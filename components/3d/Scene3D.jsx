import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingCube from './FloatingCube';

const Scene3D = ({ className }) => {
  return (
    <div className={className}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <FloatingCube position={[-2, 0, 0]} color="#3B82F6" size={1.2} />
          <FloatingCube position={[2, 0, 0]} color="#8B5CF6" size={1} />
          <FloatingCube position={[0, 2, 0]} color="#EC4899" size={0.8} />
          <FloatingCube position={[0, -2, 0]} color="#10B981" size={0.6} />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;