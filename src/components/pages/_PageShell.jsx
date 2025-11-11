import React from 'react'
import ParallaxFX from '../ParallaxFX'

export default function PageShell({ children }) {
  return (
    <div className="relative min-h-screen">
      <ParallaxFX />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
