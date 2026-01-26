import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Card } from '@/app/components/ui/card';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'student@smkn9smg.sch.id',
      href: 'mailto:student@smkn9smg.sch.id',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 xxx xxxx xxxx',
      href: 'tel:+62',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Semarang, Central Java',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gray-900/50 border-gray-800 text-center hover:border-purple-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="size-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.label}</h3>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {item.value}
                </a>
              </Card>
            );
          })}
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="What's this about?"
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-gray-900/50 border-gray-700 focus:border-purple-500 resize-none"
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Send className="size-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
