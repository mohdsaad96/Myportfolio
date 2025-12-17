import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form action="https://formspree.io/f/xanykyqb" method="POST" className="grid grid-cols-1 gap-3">
          <input name="name" placeholder="MOHD SAAD" className="border p-2 rounded" required/>
          <input name="email" placeholder="msaadm96@gmail.com" className="border p-2 rounded" type="email" required/>
          <textarea name="message" placeholder="Civil Engineer & 3D Visualizer — AutoCAD, SketchUp, V-Ray, Enscape" className="border p-2 rounded" rows="5" required/>
          <button type="submit" className="px-4 py-2 bg-black text-white rounded">Send</button>
        </form>
        <p className="mt-3 text-sm text-gray-600">Or to email: <a href="mailto:msaadm96@gmail.com" className="underline">msaadm96@gmail.com</a></p>
      </div>
    </section>
  )
}
 