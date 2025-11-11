import React, { Suspense, useMemo } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import './index.css'

const Navbar = () => {
  const location = useLocation()
  const navItems = useMemo(() => ([
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]), [])

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 navbar-glass rounded-full px-4 py-2 flex items-center gap-2">
      {navItems.map((n) => (
        <Link key={n.to} to={n.to} className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${location.pathname === n.to ? 'bg-white/10 text-white' : 'text-slate-200 hover:text-white'}`}>
          {n.label}
        </Link>
      ))}
    </div>
  )
}

const RouteTransition = ({ children }) => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(6px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(6px)' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

function AppShell() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'radial-gradient(1200px 600px at 10% -10%, rgba(0,191,255,0.12), transparent), radial-gradient(900px 500px at 90% 0%, rgba(255,60,143,0.10), transparent), #0f172a' }}>
      <Navbar />

      <div className="absolute inset-0 -z-0">
        <Suspense fallback={null}>
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </Suspense>
      </div>

      <div className="relative z-10">
        <RouteTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </RouteTransition>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
