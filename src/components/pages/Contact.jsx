import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Float, Html } from '@react-three/drei'

function Hologram({ position=[0,0,0], title='Email', value='example@mail.com' }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh>
          <boxGeometry args={[1.8, 0.6, 0.06]} />
          <meshStandardMaterial color="#081022" emissive="#00bfff" emissiveIntensity={0.25} />
        </mesh>
      </Float>
      <Html center>
        <div style={{ textAlign:'center', color:'#e2e8f0', pointerEvents:'none' }}>
          <div style={{ fontWeight:700, textShadow:'0 0 12px rgba(0,191,255,0.6)' }}>{title}</div>
          <div style={{ opacity:0.9 }}>{value}</div>
        </div>
      </Html>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight position={[5, 8, 2]} angle={0.4} intensity={2} color={'#00bfff'} penumbra={0.6} />
      <spotLight position={[-5, 6, -2]} angle={0.5} intensity={1.5} color={'#ff3c8f'} penumbra={0.6} />
      <Environment preset="city" />

      <Hologram position={[0, 1.1, 0]} title="Email" value="mr.rezaa765@gmail.com" />
      <Hologram position={[0, 0.2, 0]} title="GitHub" value="@rezafebriansyah_19" />
      <Hologram position={[0, -0.7, 0]} title="LinkedIn" value="M Reza Febrian" />
      <Hologram position={[0, -1.6, 0]} title="Instagram" value="reza_fullstack" />
    </>
  )
}

export default function Contact() {
  return (
    <section className="min-h-screen grid place-items-center p-4">
      <div className="w-full h-[70vh] max-w-4xl rounded-xl overflow-hidden border border-white/10">
        <Canvas camera={{ position: [0, 1.2, 4], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}
