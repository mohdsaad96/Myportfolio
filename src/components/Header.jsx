import React from 'react'

export default function Header(){
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-lg font-semibold">[MOHD SAAD]</div>
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
