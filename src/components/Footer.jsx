import React from 'react'

export default function Footer(){
  return (
    <footer className="py-6 text-center text-sm theme-bg-secondary theme-text-secondary">
      <div className="container mx-auto">
        © {new Date().getFullYear()} [MOHD SAAD]. All rights reserved.
      </div>
    </footer>
  )
}
