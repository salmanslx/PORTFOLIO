import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/salmanslx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/salmanslx', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/___slx___', label: 'Instagram' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div 
              className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 cursor-pointer"
              onClick={scrollToTop}
            >
              Salmanul Faris
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Frontend developer passionate about creating beautiful, functional web experiences 
              with modern technologies and thoughtful design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <div className="space-y-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Design',
                'Consultation'
              ].map((service) => (
                <p
                  key={service}
                  className="text-muted-foreground"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Salmanul Faris.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button 
              onClick={scrollToTop}
              className="hover:text-primary transition-colors duration-300"
            >
              Back to Top
            </button>
            <span>•</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;