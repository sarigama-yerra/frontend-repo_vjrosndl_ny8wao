import React, { useEffect, useRef } from 'react'

export default function ParallaxFX() {
  const ref = useRef(null)

  useEffect(() => {
    const handle = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x * 20}px, ${y * 20}px, 0)`
      }
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        ref={ref}
        className="absolute -inset-40 opacity-40"
        style={{
          background:
            'radial-gradient(600px 400px at 20% 10%, rgba(0,191,255,0.20), transparent), radial-gradient(500px 300px at 80% 20%, rgba(255,60,143,0.18), transparent)'
        }}
      />
    </div>
  )
}
