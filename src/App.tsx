import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import WhyChoose from '@/components/sections/WhyChoose';
import Process from '@/components/sections/Process';
import Industries from '@/components/sections/Industries';
import Reviews from '@/components/sections/Reviews';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-950 focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Products />
        <WhyChoose />
        <Process />
        <Industries />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
