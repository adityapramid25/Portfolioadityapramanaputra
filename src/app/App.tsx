import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Certificates } from '@/app/components/Certificates';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Aditya Pramana Putra - Web Developer Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}