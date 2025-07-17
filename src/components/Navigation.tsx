import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Instagram } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/salmanslx', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/salmanslx', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/___slx___', label: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Salmanul Faris
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;