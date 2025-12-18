import React from 'react'
import fallbackImage from '../assets/profile-placeholder.png'

function resolveImageSrc(image){
  const fallback = fallbackImage
  let img = image
  if (Array.isArray(img)) {
    img = img[0]
  }
  if (typeof img === 'string') {
    try {
      if (img.startsWith('/src/assets/')) {
        const rel = img.replace('/src/', '../')
        return new URL(rel, import.meta.url).href
      }
      return img
    } catch {
      return fallback
    }
  }
  return fallback
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
