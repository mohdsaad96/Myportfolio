import React from 'react'
import resumePdf from '../assets/resume.pdf'
import profileImage from '../assets/profile-placeholder.png'

export default function Hero(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <img src={profileImage} alt="Mohd Saad" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
        <h1 className="text-3xl font-bold">Mohd Saad</h1>
        <p className="mt-2 text-gray-600">Civil Engineer & 3D Visualizer — AutoCAD, SketchUp, V-Ray, Enscape</p>
        <div className="mt-4 space-x-3">
          <a href={resumePdf} download className="px-4 py-2 border rounded">Download Resume</a>
          <a href="#projects" className="px-4 py-2 bg-black text-white rounded">View Projects</a>
        </div>
      </div>
    </section>
  )
}
