import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function HexagonPillar({ position, color, delay }) {
  const meshRef = useRef()
  const startY = useMemo(() => (Math.random() - 0.5) * 2, [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = startY + Math.sin(clock.elapsedTime * 0.3 + delay) * 0.5
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.15, 0.25, 1.2, 6]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.15}
        roughness={0.2}
        metalness={0.8}
        distort={0.2}
      />
    </mesh>
  )
}

function FloatingRing({ position, color }) {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.3
      ref.current.rotation.z = Math.cos(clock.elapsedTime * 0.15) * 0.3
    }
  })

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.8, 0.02, 16, 60]} />
      <meshStandardMaterial color={color} transparent opacity={0.08} wireframe />
    </mesh>
  )
}

function Scene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.02
    }
  })

  const pillars = useMemo(() => [
    { position: [-2.5, 0, -1], color: '#0ea5e9', delay: 0 },
    { position: [-0.8, 0.5, -1.5], color: '#f97316', delay: 1 },
    { position: [0.8, -0.3, -1.2], color: '#0ea5e9', delay: 2 },
    { position: [2.5, 0.2, -1], color: '#f97316', delay: 0.5 },
    { position: [-1.6, -0.5, -2], color: '#38bdf8', delay: 1.5 },
    { position: [1.6, 0.4, -2.2], color: '#f97316', delay: 2.5 },
  ], [])

  const rings = useMemo(() => [
    { position: [-1.5, 0.8, -3], color: '#0ea5e9' },
    { position: [1.5, -0.6, -3.5], color: '#f97316' },
    { position: [0, 0, -4], color: '#38bdf8' },
  ], [])

  return (
    <group ref={groupRef}>
      {pillars.map((p, i) => (
        <Float key={`pillar-${i}`} speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
          <HexagonPillar {...p} />
        </Float>
      ))}
      {rings.map((r, i) => (
        <FloatingRing key={`ring-${i}`} {...r} />
      ))}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.3} color="#f97316" />
      <ambientLight intensity={0.3} />
    </group>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
