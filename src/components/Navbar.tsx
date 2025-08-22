import { useState } from 'react'
import { WalletSelector } from './WalletSelector'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-bold glow-text">Chainfluence</a>
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <WalletSelector />
            <button className="md:hidden p-2 rounded hover:bg-white/5" onClick={() => setIsOpen(v => !v)}>
              <span className="sr-only">Open menu</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-gray-300">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

