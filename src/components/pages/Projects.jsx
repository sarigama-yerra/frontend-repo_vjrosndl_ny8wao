import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Html } from '@react-three/drei'

function Frame({ position = [0,0,0], title = 'Project', color = '#00bfff' }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh>
          <boxGeometry args={[1.4, 0.9, 0.06]} />
          <meshStandardMaterial color="#101828" emissive={color} emissiveIntensity={0.12} metalness={0.2} roughness={0.5} />
        </mesh>
      </Float>
      <Html center>
        <div style={{ pointerEvents: 'none' }}>
          <div style={{ color: '#e2e8f0', fontWeight: 600, textShadow: '0 0 12px rgba(0,191,255,0.6)' }}>{title}</div>
        </div>
      </Html>
    </group>
  )
}

function Gallery() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight position={[5, 8, 2]} angle={0.4} intensity={2} color={'#00bfff'} penumbra={0.6} />
      <spotLight position={[-5, 6, -2]} angle={0.5} intensity={1.5} color={'#ff3c8f'} penumbra={0.6} />
      <Environment preset="city" />

      <Frame position={[-2, 0.5, 0]} title="API Service" color="#00bfff" />
      <Frame position={[0, 0.5, 0]} title="Admin Dashboard" color="#ff3c8f" />
      <Frame position={[2, 0.5, 0]} title="AI Tools" color="#00bfff" />
    </>
  )
}

export default function Projects() {
  return (
    <section className="min-h-screen grid place-items-center p-4">
      <div className="w-full h-[70vh] max-w-6xl rounded-xl overflow-hidden border border-white/10">
        <Canvas camera={{ position: [0, 1.2, 4], fov: 50 }}>
          <Suspense fallback={null}>
            <Gallery />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
