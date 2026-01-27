import { GraduationCap, Code, Lightbulb, Calendar, MapPin, User } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Currently studying at SMK N 9 Semarang, specializing in software engineering and web development.',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Building responsive websites and web applications using modern frameworks and best practices.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always eager to learn new technologies and apply creative solutions to real-world problems.',
    },
  ];

  const personalInfo = [
    {
      icon: User,
      label: 'Full Name',
      value: 'Aditya Pramana Putra',
    },
    {
      icon: Calendar,
      label: 'Date of Birth',
      value: '19 January 2010',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Semarang, Central Java',
    },
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </div>
        
        {/* Personal Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {personalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="size-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-1">{info.label}</p>
                  <p className="text-white font-medium">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="size-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 rounded-2xl p-8 md:p-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            As a <b>Software Engineering</b> student at <b>SMK N 9 Semarang</b>, I am committed to mastering the art and science of 
            creating impactful digital experiences. I also took an online <b>Software Engineering</b> class on the <b>MySkill.id</b> 
            platform to improve my web development skills, which has provided me with a strong foundation in front-end 
            and back-end technologies. I believe in writing clean and efficient code and stay up-to-date with the latest 
            industry trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
