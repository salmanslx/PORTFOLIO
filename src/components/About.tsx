import { Card } from '@/components/ui/card';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in MERN stack with 3+ years of building scalable web applications'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Passionate about creating beautiful, user-centered designs in Figma'
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Crafting responsive and mobile-first experiences across all devices'
    },
    {
      icon: Zap,
      title: 'Frontend Excellence',
      description: 'Specializing in modern React, Next.js, and cutting-edge frontend technologies'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6">
            <span className="text-sm text-primary font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate Developer &{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Designer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Salmanul Faris, a MERN stack developer with a keen eye for design. 
            I love bringing ideas to life through clean code and stunning visual experiences.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>

        {/* Personal Info */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a frontend developer with a passion for design, I've dedicated myself to mastering 
                the MERN stack while maintaining a strong focus on user experience and visual aesthetics.
              </p>
              <p>
                My expertise spans from crafting pixel-perfect interfaces in Figma to implementing 
                complex React applications with seamless user interactions. I believe great software 
                is where beautiful design meets clean, efficient code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest design trends, experimenting 
                with new frontend frameworks, or working on personal projects that push the boundaries 
                of what's possible on the web.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">What I Bring</h3>
            <div className="space-y-4">
              {[
                'Modern React & Next.js Development',
                'Full-Stack MERN Applications',
                'Responsive UI/UX Design',
                'Mobile-First Development',
                'Performance Optimization',
                'Clean, Maintainable Code'
              ].map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;