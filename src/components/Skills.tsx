import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'HTML5 & CSS3', level: 98 }
      ],
      color: 'bg-blue-500/20 text-blue-400'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'REST APIs', level: 90 },
        { name: 'Authentication', level: 85 },
        { name: 'Database Design', level: 80 }
      ],
      color: 'bg-green-500/20 text-green-400'
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'UI/UX Design', level: 92 },
        { name: 'Responsive Design', level: 98 },
        { name: 'Mobile Design', level: 90 },
        { name: 'Prototyping', level: 88 },
        { name: 'Design Systems', level: 85 }
      ],
      color: 'bg-purple-500/20 text-purple-400'
    },
    {
      title: 'Development Tools',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Vite', level: 88 },
        { name: 'Webpack', level: 75 },
        { name: 'NPM/Yarn', level: 90 },
        { name: 'Chrome DevTools', level: 92 }
      ],
      color: 'bg-orange-500/20 text-orange-400'
    }
  ];

  const technologies = [
    'React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js', 
    'Tailwind CSS', 'Figma', 'JavaScript', 'HTML5', 'CSS3', 'Git',
    'REST APIs', 'Responsive Design', 'UI/UX', 'Mobile Design'
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6">
            <span className="text-sm text-primary font-medium">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Technical</span>{' '}
            Arsenal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern web applications from concept to deployment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`px-3 py-1 rounded-lg ${category.color} text-sm font-medium`}>
                  {category.title}
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;