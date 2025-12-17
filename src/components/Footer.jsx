import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 text-center text-sm text-gray-600">
      <div className="container mx-auto">
        © {new Date().getFullYear()} [Your Name]. All rights reserved.
      </div>
    </footer>
  )
}
