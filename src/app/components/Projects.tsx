import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Prayer Schedule Website',
      description: 'A high-performance React application styled with Tailwind CSS that fetches and displays real-time prayer schedules for Semarang, Indonesia.',
      image: 'https://ik.imagekit.io/sfknwtw4r/Portofolio/website-jadwal-sholat-semarang.png',
      tags: ['React', 'Tailwind', 'API'],
      github: 'https://github.com/adityapramid25/website-jadwalsholatsemarang.git',
      demo: 'https://jadwal-sholat-semarang.vercel.app',
    },
    {
      title: 'School Management System',
      description: 'Web application for managing student data, attendance, and academic records with admin dashboard.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['PHP', 'MySQL', 'Bootstrap'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Template',
      description: 'Modern and elegant portfolio template for developers and designers with dark mode support.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather App',
      description: 'Real-time weather application with location search, 5-day forecast, and beautiful UI animations.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
      tags: ['React', 'API', 'CSS'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Manager',
      description: 'Productivity app for managing tasks and projects with drag-and-drop functionality and categories.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
      tags: ['React', 'LocalStorage', 'Tailwind'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system for creating and publishing blog posts with rich text editor.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      tags: ['PHP', 'MySQL', 'jQuery'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1.5 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-xs line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-purple-500/10 text-purple-400 border-purple-500/20 text-xs px-2 py-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700 hover:bg-gray-800 h-8 text-xs"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="size-3 mr-1.5" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 h-8 text-xs"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-3 mr-1.5" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
