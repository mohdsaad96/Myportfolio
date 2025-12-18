import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header(){
  return (
    <header className="py-4 theme-bg-secondary theme-shadow">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-lg font-semibold theme-text-primary">[MOHD SAAD]</div>
        <div className="flex items-center gap-4">
          <nav className="space-x-4">
            <a href="#projects" className="hover:underline theme-text-primary">Projects</a>
            <a href="#about" className="hover:underline theme-text-primary">About</a>
            <a href="#contact" className="hover:underline theme-text-primary">Contact</a>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
