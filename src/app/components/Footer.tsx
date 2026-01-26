import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/adityapramid25"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-6" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-pramana-putra"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href="emailto:adityapramid25@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-6" />
            </a>
            <a
              href="https://github.com/adityapramid25"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-6" />
            </a>
            <a
              href="https://linkedin.com/in/aditya-pramana-putra"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href="emailto:adityapramid25@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-6" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2 justify-center">
              Made with <Heart className="size-4 text-purple-400 fill-purple-400" /> by Aditya Pramana Putra
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
