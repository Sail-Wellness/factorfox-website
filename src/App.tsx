import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Features } from '@/pages/Features'
import { About } from '@/pages/About'
import { ContactSales } from '@/pages/ContactSales'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <div className="pt-16">{/* offset for fixed navbar (h-16 = 64px) */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-sales" element={<ContactSales />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
