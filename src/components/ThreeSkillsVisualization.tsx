
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const SkillNode = ({ 
  position, 
  skill, 
  isHovered, 
  onHover 
}: { 
  position: [number, number, number], 
  skill: string,
  isHovered: boolean,
  onHover: (hovered: boolean) => void
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      const scale = isHovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => onHover(true)}
        onPointerLeave={() => onHover(false)}
      >
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial
          color={isHovered ? '#f59e0b' : '#3b82f6'}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Simple text representation - in a real app you'd use Text from drei or HTML overlay */}
      <mesh position={[0, -1.5, 0]} ref={textRef}>
        <planeGeometry args={[2, 0.5]} />
        <meshBasicMaterial color="white" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const ThreeSkillsVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const skills = [
    { name: 'Flutter', position: [-2, 2, 0] as [number, number, number] },
    { name: 'Swift', position: [2, 2, 0] as [number, number, number] },
    { name: 'React', position: [0, 0, 2] as [number, number, number] },
    { name: 'Firebase', position: [-2, -2, 0] as [number, number, number] },
    { name: 'Node.js', position: [2, -2, 0] as [number, number, number] },
  ];

  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />
        
        {skills.map((skill) => (
          <SkillNode
            key={skill.name}
            position={skill.position}
            skill={skill.name}
            isHovered={hoveredSkill === skill.name}
            onHover={(hovered) => setHoveredSkill(hovered ? skill.name : null)}
          />
        ))}
        
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Skill labels overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-center">
          {hoveredSkill && (
            <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              {hoveredSkill}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeSkillsVisualization;
