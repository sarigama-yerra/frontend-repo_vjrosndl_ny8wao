import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Float, Html, Text } from '@react-three/drei'

function DeskScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight position={[5, 8, 2]} angle={0.4} intensity={2} color={'#00bfff'} penumbra={0.6} />
      <spotLight position={[-5, 6, -2]} angle={0.5} intensity={1.5} color={'#ff3c8f'} penumbra={0.6} />
      <Environment preset="city" />

      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2, 0.1, 1]} />
          <meshStandardMaterial color="#111827" emissive="#111827" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0, 1.05, 0]}>
          <boxGeometry args={[1.2, 0.02, 0.8]} />
          <meshStandardMaterial color="#0f172a" emissive="#0f172a" />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.9, 0.6, 0.05]} />
          <meshStandardMaterial color="#0a0f1f" emissive="#00bfff" emissiveIntensity={0.2} />
        </mesh>
      </Float>

      <Text position={[0, 2.2, -0.4]} fontSize={0.18} color="#e2e8f0" anchorX="center" anchorY="middle" maxWidth={2.6}>
        {"Hi, I'm M Reza Febrian 👋\nA Programmer & Web Developer who loves backend, API, and AI technology.\nPassionate about turning ideas into code and creating meaningful digital experiences."}
      </Text>
    </>
  )
}

export default function About() {
  return (
    <section className="min-h-screen grid place-items-center p-4">
      <div className="w-full h-[70vh] max-w-5xl rounded-xl overflow-hidden border border-white/10">
        <Canvas camera={{ position: [0, 1.5, 3.2], fov: 50 }}>
          <Suspense fallback={null}>
            <DeskScene />
            <OrbitControls enablePan={false} minDistance={2.4} maxDistance={5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
