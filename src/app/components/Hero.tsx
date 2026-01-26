import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <br/>
        <br/>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Hello, I'm Aditya Pramana Putra
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Vocational High School Student at
        </p>
        
        <p className="text-2xl md:text-3xl text-purple-400 mb-8 font-semibold">
          SMK N 9 Semarang
        </p>
        
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Passionate about creating beautiful and functional web experiences. 
          Focused on modern web technologies and clean, maintainable code.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <a href="#project">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800">
            Contact Me
            </Button>
          </a>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/adityapramid25" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Github className="size-6" />
          </a>
          <a href="https://linkedin.com/in/aditya-pramana-putra" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Linkedin className="size-6" />
          </a>
          <a href="mailto:adityapramid25@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail className="size-6" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
    </section>
  );
}
