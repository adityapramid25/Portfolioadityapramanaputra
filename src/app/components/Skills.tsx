import { Progress } from '@/app/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 90 },
        { name: 'JavaScript', level: 50 },
        { name: 'React', level: 20 },
        { name: 'Tailwind CSS', level: 30 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 0 },
        { name: 'PHP', level: 20 },
        { name: 'MySQL', level: 60 },
        { name: 'REST APIs', level: 10 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'VS Code', level: 90 },
        { name: 'Responsive Design', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-gray-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 text-purple-400">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-800"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
