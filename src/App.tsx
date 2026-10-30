import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import Services from '@/components/sections/Services';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

interface Enquiry {
  subject: string;
  id: number;
}

function App() {
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);

  const handleEnquire = (subject: string) => {
    setEnquiry((current) => ({ subject, id: (current?.id ?? 0) + 1 }));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onEnquire={handleEnquire} />
        <Services />
        <WhyChooseUs />
        <Contact enquiry={enquiry} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
