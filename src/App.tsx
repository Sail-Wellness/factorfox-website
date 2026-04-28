import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Home } from '@/pages/Home'
import { Features } from '@/pages/Features'
import { About } from '@/pages/About'
import { ContactSales } from '@/pages/ContactSales'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { Refund } from '@/pages/Refund'
import { NotFound } from '@/pages/NotFound'
import { ScrollToTop } from '@/components/ScrollToTop'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="pt-16">{/* offset for fixed navbar (h-16 = 64px) */}
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-sales" element={<ContactSales />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </div>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
