
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={clicked ? '#ff6b6b' : hovered ? '#4ecdc4' : '#45b7d1'} 
        wireframe={clicked}
      />
    </mesh>
  );
};

const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 5 }, (_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 1.2) * 3,
            Math.cos(i * 1.2) * 2,
            Math.sin(i * 0.8) * 2
          ]}
        >
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color={`hsl(${i * 60}, 70%, 60%)`}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

const Interactive3DObject = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingCube />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default Interactive3DObject;
