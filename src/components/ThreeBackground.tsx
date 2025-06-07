
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingGeometry = ({ position, geometry }: { position: [number, number, number], geometry: 'sphere' | 'box' | 'torus' }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'sphere':
        return <sphereGeometry args={[0.8, 32, 32]} />;
      case 'box':
        return <boxGeometry args={[0.8, 0.8, 0.8]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 32]} />;
      default:
        return <sphereGeometry args={[0.8, 32, 32]} />;
    }
  };

  const getColor = () => {
    switch (geometry) {
      case 'sphere':
        return '#3b82f6';
      case 'box':
        return '#8b5cf6';
      case 'torus':
        return '#f59e0b';
      default:
        return '#3b82f6';
    }
  };
  
  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={getColor()}
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
        
        <FloatingGeometry position={[-3, 2, 0]} geometry="sphere" />
        <FloatingGeometry position={[3, -1, -2]} geometry="box" />
        <FloatingGeometry position={[0, 1, -1]} geometry="torus" />
        <FloatingGeometry position={[-2, -2, 1]} geometry="sphere" />
        <FloatingGeometry position={[2, 2, -3]} geometry="box" />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
