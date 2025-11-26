/*
Teamwear Website Starter - single-file React app (App.jsx)

This file is a working React component ready to drop into a Vite/CRA project.
- Clean, responsive one-page site: Header, Hero, Product Grid, About, Contact
- Uses Tailwind CSS utility classes for styling (assumes Tailwind is set up in the project)
- Example product data (replace with real items and images)
- Contact form uses a safe placeholder action (#) so the app won't attempt to POST to an invalid URL. Replace the form action with your Formspree endpoint or other form handler when ready.

Notes for beginners:
- To preview locally use Vite (recommended):
  npm create vite@latest teamwear -- --template react
  cd teamwear
  npm install
  Replace src/App.jsx with this file and run: npm run dev
- Deployment: Vercel or Netlify are the easiest — both will provide build instructions and DNS values for custom domains. If you want, I can prepare a Vercel-ready GitHub repo and give you the exact DNS records to paste into Alibaba Cloud DNS.
*/

import React from 'react'

const products = [
  { id: 1, name: 'Training Jersey', price: '$45', desc: 'Breathable, quick-dry team jersey.', img: 'https://via.placeholder.com/400x300?text=Jersey' },
  { id: 2, name: 'Match Shorts', price: '$28', desc: 'Lightweight, stretch fabric.', img: 'https://via.placeholder.com/400x300?text=Shorts' },
  { id: 3, name: 'Warmup Jacket', price: '$60', desc: 'Wind-resistant with mesh lining.', img: 'https://via.placeholder.com/400x300?text=Jacket' },
  { id: 4, name: 'Custom Hoodie', price: '$55', desc: 'Add your team logo and numbers.', img: 'https://via.placeholder.com/400x300?text=Hoodie' }
]

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-extrabold text-indigo-600">TEAMWEAR</div>
              <div className="hidden sm:block text-sm text-gray-500">Professional team apparel — customisable</div>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#home" className="hover:text-indigo-600">Home</a>
              <a href="#products" className="hover:text-indigo-600">Products</a>
              <a href="#about" className="hover:text-indigo-600">About</a>
              <a href="#contact" className="hover:text-indigo-600">Contact</a>
            </nav>
            <div className="hidden sm:flex items-center gap-3">
              <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm">Get a Quote</a>
            </div>
            <button className="md:hidden p-2 rounded-md">☰</button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Custom Teamwear built for performance</h1>
                <p className="mt-6 text-lg text-indigo-100 max-w-xl">Fast turnaround, bulk pricing and expert design support. Kits, training wear, hoodies and accessories — tailored to your club or organisation.</p>
                <div className="mt-8 flex gap-3">
                  <a href="#products" className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold">Browse Products</a>
                  <a href="#contact" className="px-6 py-3 border border-white rounded-md">Request Quote</a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="https://via.placeholder.com/800x520?text=Teamwear+Hero+Image" alt="teamwear" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold">Popular products</h2>
          <p className="mt-2 text-gray-600">High quality materials, fully customisable. Select a product to get started.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
                <div className="aspect-[4/3] rounded-md overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
                </div>
                <div className="mt-4 flex-1">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-lg font-bold">{p.price}</div>
                  <a href="#contact" className="text-sm px-3 py-2 rounded-md border border-indigo-600 text-indigo-600">Enquire</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold">About us</h2>
                <p className="mt-4 text-gray-600">We specialise in teamwear manufacturing and customisation for clubs, schools and corporate teams. From initial design to final delivery, we handle printing, embroidery and numbering.</p>
                <ul className="mt-4 text-gray-600 list-disc list-inside">
                  <li>Bulk pricing and low MOQ options</li>
                  <li>High-quality fabrics: quick-dry, mesh, polyester blends</li>
                  <li>Design assistance and sample production</li>
                </ul>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden shadow">
                  <img src="https://via.placeholder.com/800x520?text=Factory+or+Team+Image" alt="about" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold">Contact & Request a Quote</h2>
          <p className="mt-2 text-gray-600">Fill in the form or email us at <strong>sales@yourdomain.com</strong> (replace with your real email).</p>

          {/*
            IMPORTANT: The form action is intentionally set to '#' so the component can be used without
            throwing errors in development. Replace the action with a real endpoint when ready, for example:
            - Formspree: https://formspree.io/f/your-form-id
            - Netlify Forms: configure the form per Netlify docs
            - Your backend endpoint
          */}
          <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-4">
            <input name="name" placeholder="Full name" className="w-full p-3 rounded-md border" required />
            <input name="email" type="email" placeholder="Email" className="w-full p-3 rounded-md border" required />
            <input name="team" placeholder="Team / Club name" className="w-full p-3 rounded-md border" />
            <textarea name="message" placeholder="Tell us about your project (sizes, qty, budget)" className="w-full p-3 rounded-md border h-32" required></textarea>
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-md">Send Request</button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-500">
            <p>Alternatively, add our WhatsApp / WeChat contact or your phone number here for faster replies.</p>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm">© {new Date().getFullYear()} TEAMWEAR — All rights reserved.</div>
          <div className="mt-3 sm:mt-0 text-sm">Designed for small clubs & sports teams</div>
        </div>
      </footer>

    </div>
  )
}

/*
You can now:
- Replace the placeholder images and text with your brand assets
- Replace the form action (#) with your Formspree endpoint (or Netlify/your backend)
- Ask me to prepare a GitHub repo + Vercel deployment and I will output exact DNS records for Alibaba Cloud DNS

If you still see the React error after this fix, tell me the full stack trace and I will debug further. Also tell me which environment you're running (Vite/CRA) and whether you're using a minified production build or the dev server.
*/
