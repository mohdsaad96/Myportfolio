import React from 'react'
import fallbackImage from '../assets/profile-placeholder.png'

function resolveImageSrc(image){
  const fallback = fallbackImage
  // If image is an array, use the first element
  if (Array.isArray(image)) {
    return image[0] || fallback
  }
  // Otherwise return the image or fallback
  return image || fallback
}

export default function ProjectCard({title, description, tech, live, code, image}){
  const src = resolveImageSrc(image)
  return (
    <article className="border rounded p-4 flex flex-col">
      <img src={src} alt={title} className="h-40 object-cover rounded mb-3"/>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-sm space-x-2">
          {tech.map(t => <span key={t} className="inline-block text-xs px-2 py-1 border rounded">{t}</span>)}
        </div>
        <div className="space-x-2">
          <a href={live || '#'} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>
          <a href={code || '#'} target="_blank" rel="noreferrer" className="text-sm underline">Code</a>
        </div>
      </div>
    </article>
  )
}
