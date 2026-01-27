import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Certificates() {
  const certificates = [
    {
      title: 'Browser, HTTP, DNS, and Hosting',
      issuer: 'MySkill ID',
      date: 'January 2026',
      description: 'Web Infrastructure & Networking Fundamentals Successfully completed a specialized course covering the end-to-end journey of a web request.',
      category: 'Web Development',
      link: 'https://storage.googleapis.com/myskill-v2-certificates/course-ssMYIOctBTvMgBPvSMxo/yJNAEYAj8ERh3cnx2FRviyfbMKl1-6DiuHPw0YDSKwQDUGROX.pdf',
      image: 'https://lh3.googleusercontent.com/u/0/d/1J2lmW_TCQmDEZ7wagu-lXm65Jux0KD97',
    },
    {
      title: 'Software Engineering',
      issuer: 'RevoU Coding Camp',
      date: 'October 2025',
      description: 'Software Engineering & Systems Architecture This certification validates my ability to transform complex problems into functional, production-ready applications.',
      category: 'Software Engineering',
      link: 'https://lh3.googleusercontent.com/u/0/d/1uR-cPnvTXKZj_K-31PdIWbZhUL7ldt1V',
      image: 'https://lh3.googleusercontent.com/u/0/d/1uR-cPnvTXKZj_K-31PdIWbZhUL7ldt1V',
    },
    {
      title: 'Basic concepts of Computer Science',
      issuer: 'Code.org',
      date: 'November 2025',
      description: 'In-depth study of algorithmic thinking, computational thinking, and debugging.',
      category: 'Computer Science',
      link: 'https://lh3.googleusercontent.com/u//0/d/1hyaQSiCim14TaElXGLQdPY_gghx4d4ME',
      image: 'https://lh3.googleusercontent.com/u/0/d/1hyaQSiCim14TaElXGLQdPY_gghx4d4ME',
    },
    {
      title: 'Literacy Financial',
      issuer: 'Dicoding',
      date: 'January 2026',
      description: 'A strong understanding of the basic principles of financial literacy, as well as designing long-term financial strategies.',
      category: 'Finance',
      link: 'https://lh3.googleusercontent.com/u/0/d/12qW660wd4H28K48yCOpg2KgBbW7dpf5I',
      image: 'https://lh3.googleusercontent.com/u/0/d/12qW660wd4H28K48yCOpg2KgBbW7dpf5I',
    },
    {
      title: 'Backend Development with Node.js',
      issuer: 'Dicoding Indonesia',
      date: 'August 2025',
      description: 'Learned server-side development with Node.js and Express.js, RESTful API design, and database integration with MongoDB.',
      category: 'Backend',
      link: '#',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?w=800&q=80',
    },
    {
      title: 'MySQL Database Design',
      issuer: 'Progate',
      date: 'July 2025',
      description: 'Comprehensive training in database design, SQL queries, normalization, and relational database management systems.',
      category: 'Database',
      link: '#',
      image: 'https://images.unsplash.com/photo-1747576686252-ef7fbbde3829?w=800&q=80',
    },
    {
      title: 'Git & GitHub Essentials',
      issuer: 'Dicoding Indonesia',
      date: 'June 2025',
      description: 'Version control fundamentals, Git workflow, branching strategies, and collaborative development using GitHub.',
      category: 'Tools',
      link: '#',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?w=800&q=80',
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'Google',
      date: 'May 2025',
      description: 'Introduction to user interface and user experience design. Learned design thinking, prototyping, and usability testing.',
      category: 'Design',
      link: '#',
      image: 'https://images.unsplash.com/photo-1747576686252-ef7fbbde3829?w=800&q=80',
    },
    {
      title: 'PHP Web Development',
      issuer: 'Progate',
      date: 'April 2025',
      description: 'Server-side programming with PHP, working with forms, sessions, cookies, and building dynamic web applications.',
      category: 'Backend',
      link: '#',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?w=800&q=80',
    },
    {
      title: 'Tailwind CSS Master Class',
      issuer: 'Scrimba',
      date: 'March 2025',
      description: 'Advanced utility-first CSS framework training. Built modern, responsive interfaces with Tailwind CSS components.',
      category: 'Frontend',
      link: '#',
      image: 'https://images.unsplash.com/photo-1747576686252-ef7fbbde3829?w=800&q=80',
    },
    {
      title: 'JavaScript ES6+ Modern Features',
      issuer: 'Udemy',
      date: 'February 2025',
      description: 'Modern JavaScript features including arrow functions, destructuring, modules, promises, async/await, and more.',
      category: 'Programming',
      link: '#',
      image: 'https://images.unsplash.com/photo-1766722906733-609eebf3b63a?w=800&q=80',
    },
    {
      title: 'RESTful API Design',
      issuer: 'Dicoding Indonesia',
      date: 'January 2025',
      description: 'Best practices for designing and implementing RESTful APIs, authentication, error handling, and API documentation.',
      category: 'Backend',
      link: '#',
      image: 'https://images.unsplash.com/photo-1747576686252-ef7fbbde3829?w=800&q=80',
    },
  ];

  const categoryColors: Record<string, string> = {
    'Web Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'Frontend': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Backend': 'bg-green-500/10 text-green-400 border-green-500/20',
    'Programming': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    'Database': 'bg-red-500/10 text-red-400 border-red-500/20',
    'Design': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    'Tools': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'Web Design': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  return (
    <section id="certificates" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Continuous learning and professional development through various certifications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 flex flex-col"
            >
              {/* Certificate Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                <Badge
                  variant="secondary"
                  className={`absolute top-2 right-2 text-xs ${categoryColors[cert.category] || 'bg-gray-500/10 text-gray-400 border-gray-500/20'}`}
                >
                  {cert.category}
                </Badge>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="size-4 text-purple-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base font-semibold text-white line-clamp-2">
                      {cert.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-purple-400 text-xs mb-1.5 font-medium">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                  <Calendar className="size-3" />
                  <span>{cert.date}</span>
                </div>
                
                <p className="text-gray-400 text-xs mb-3 flex-grow line-clamp-2">
                  {cert.description}
                </p>
                
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 mt-auto h-8 text-xs"
                  size="sm"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-3 mr-1.5" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
