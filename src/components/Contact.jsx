import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 theme-text-primary">Contact</h2>
        <form action="https://formspree.io/f/xanykyqb" method="POST" className="grid grid-cols-1 gap-3">
          <input name="name" placeholder="MOHD SAAD" className="p-2 rounded theme-border theme-bg-secondary theme-text-primary" style={{ border: '1px solid var(--border-color)' }} required/>
          <input name="email" placeholder="msaadm96@gmail.com" className="p-2 rounded theme-border theme-bg-secondary theme-text-primary" style={{ border: '1px solid var(--border-color)' }} type="email" required/>
          <textarea name="message" placeholder="To Contact Please Send Message" className="p-2 rounded theme-border theme-bg-secondary theme-text-primary" style={{ border: '1px solid var(--border-color)' }} rows="5" required/>
          <button type="submit" className="px-4 py-2 rounded transition-all duration-200 hover:opacity-90" style={{ backgroundColor: 'var(--accent-primary)', color: 'white' }}>Send</button>
        </form>
        <p className="mt-3 text-sm theme-text-secondary">Or to email: <a href="mailto:msaadm96@gmail.com" className="underline" style={{ color: 'var(--accent-primary)' }}>msaadm96@gmail.com</a></p>
      </div>
    </section>
  )
}
 
