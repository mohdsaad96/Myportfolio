import React from 'react'
import resumePdf from '../assets/resume.pdf'
import profileImage from '../assets/profile-placeholder.png'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <img src={profileImage} alt="Mohd Saad" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover theme-border" style={{ border: '3px solid var(--border-color)' }}/>
        <h1 className="text-3xl font-bold theme-text-primary">Mohd Saad</h1>
        <p className="mt-2 theme-text-secondary">Civil Engineer & 3D Visualizer — AutoCAD, SketchUp, V-Ray, Enscape</p>
        <div className="mt-4 space-x-3">
          <a href={resumePdf} download className="px-4 py-2 rounded transition-all duration-200 hover:opacity-80 theme-border inline-block" style={{ border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}>Download Resume</a>
          <a href="#projects" className="px-4 py-2 rounded inline-block transition-all duration-200 hover:opacity-90" style={{ backgroundColor: 'var(--accent-primary)', color: 'white' }}>View Projects</a>
        </div>
      </div>
    </section>
  )
}
