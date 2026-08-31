'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, OrbitControls, Sphere } from '@react-three/drei';
import { useRef } from 'react';
import type { Group } from 'three';

function Network() {
  const group = useRef<Group>(null);
  useFrame((state) => { if (!group.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; group.current.rotation.y = state.clock.elapsedTime * 0.045; group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08; });
  const nodes = [[-1.25, 0.48, 0.12], [1.2, 0.6, -0.18], [0.8, -0.72, 0.28], [-0.82, -0.75, -0.25], [0.05, 1.05, 0.15]] as const;
  return <group ref={group}><Float speed={1.1} rotationIntensity={0.14} floatIntensity={0.22}><Sphere args={[0.54, 32, 32]}><meshStandardMaterial color="#d4c9df" roughness={0.36} metalness={0.08} /></Sphere><Sphere args={[0.66, 32, 32]} scale={[1, 0.22, 1]} rotation={[0.2, 0, -0.25]}><meshBasicMaterial color="#a99abd" transparent opacity={0.25} wireframe /></Sphere></Float>{nodes.map((node, index) => <Line key={`line-${index}`} points={[node, [0, 0, 0]]} color="#a99abd" transparent opacity={0.55} lineWidth={0.7} />)}{nodes.map((node, index) => <Float key={index} speed={0.7 + index * 0.08} floatIntensity={0.15}><Sphere args={[index === 4 ? 0.1 : 0.07, 16, 16]} position={node}><meshStandardMaterial color={index % 2 ? '#a99abd' : '#6f6878'} roughness={0.5} /></Sphere></Float>)}</group>;
}
export default function HeroScene() { return <div className="scene-wrap" aria-hidden="true"><Canvas camera={{ position: [0, 0, 4.6], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}><ambientLight intensity={1.7} /><directionalLight position={[2, 3, 4]} intensity={2} color="#fffaf3" /><Network /><OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /></Canvas></div>; }
