  import { useState } from 'react';
  import { Button } from '@/components/ui/button';
  import { Card } from '@/components/ui/card';
  import { Input } from '@/components/ui/input';
  import { Textarea } from '@/components/ui/textarea';
  import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';
  import { useToast } from '@/hooks/use-toast';

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const contactInfo = [
      {
        icon: Mail,
        label: 'Email',
        value: 'salmanulfaris712@gmail.com',
        href: 'mailto:salmanulfaris712@gmail.com'
      },
      {
        icon: Phone,
        label: 'Phone (UAE)',
        value: '+971 554 591 313',
        href: 'tel:+971554591313'
      },
      {
        icon: Phone,
        label: 'Phone (India)',
        value: '+91 999 542 5069',
        href: 'tel:+919995425069'
      },
      {
        icon: MapPin,
        label: 'Location',
        value: 'DIP , UAE',
        href: '#'
      }
    ];

    const socialLinks = [
      {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/salmanslx',
        username: '@salmanslx'
      },
      {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/salmanslx',
        username: '@salmanslx'
      },
      {
        icon: Instagram,
        label: 'Instagram',
        href: 'https://www.instagram.com/___slx___',
        username: '@___slx___'
      }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
    };

    return (
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6">
              <span className="text-sm text-primary font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>{' '}
              Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-border focus:border-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border hover:bg-card/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;