import React from 'react'
import fallbackImage from '../assets/profile-placeholder.png'

export default function ProjectCard({title, description, tech, live, code, image}){
  // Extract the first image from the array if multiple images exist
  const src = Array.isArray(image) ? (image[0] || fallbackImage) : (image || fallbackImage)
  
  return (
    <article className="border rounded p-4 flex flex-col hover:shadow-md transition">
      <img src={src} alt={title} className="w-full h-40 object-cover rounded mb-3"/>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 flex-grow">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2 items-center justify-between">
        <div className="text-sm flex flex-wrap gap-2">
          {tech.map(t => <span key={t} className="inline-block text-xs px-2 py-1 bg-gray-50 dark:bg-gray-800 border rounded">{t}</span>)}
        </div>
        <div className="space-x-2">
          <a href={live || '#'} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:text-blue-800 underline">Live</a>
          <a href={code || '#'} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:text-blue-800 underline">Code</a>
        </div>
      </div>
    </article>
  )
}
