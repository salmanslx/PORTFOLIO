import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8 animate-fade-in">
          <span className="text-sm text-muted-foreground">✨ Crafting Digital Experiences</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Frontend that you
          </span>
          <br />
          <span className="text-foreground">need Indeed</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Elevate your digital presence with modern web applications and stunning design. 
          I craft exceptional user experiences through code and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
          >
            Get Started Now
          </Button>
          <Button 
            onClick={scrollToProjects}
            variant="outline" 
            size="lg"
            className="border-border hover:bg-card text-lg px-8 py-6 h-auto"
          >
            See Projects
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <span className="text-sm text-muted-foreground">Scroll down</span>
          <ArrowDown 
            className="w-6 h-6 text-primary animate-bounce cursor-pointer" 
            onClick={scrollToProjects}
          />
          <span className="text-sm text-muted-foreground">to see projects</span>
        </div>
      </div>

      {/* Skills ticker */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="flex animate-[scroll_30s_linear_infinite] space-x-12">
          {['React', 'Node.js', 'MongoDB', 'Express', 'Figma', 'TypeScript', 'Tailwind', 'Next.js', 'UI/UX', 'JavaScript'].map((skill, index) => (
            <div key={index} className="flex-shrink-0 text-muted-foreground/60 text-sm font-medium whitespace-nowrap">
              {skill}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {['React', 'Node.js', 'MongoDB', 'Express', 'Figma', 'TypeScript', 'Tailwind', 'Next.js', 'UI/UX', 'JavaScript'].map((skill, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 text-muted-foreground/60 text-sm font-medium whitespace-nowrap">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;