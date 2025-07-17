import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

import projectFairImg from '@/assets/project.png';
import mnyEcommerceImg from '@/assets/mny.png';
import mediaPlayerImg from '@/assets/media.png';
import ruhEssenzaImg from '@/assets/ruh.png';
import realEstateAppDesignImg from '@/assets/taqata.png';
import lediummImg from '@/assets/led.png';



const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Full-Stack', 'Frontend', 'Mobile'];
const projects = [
  {
    id: 1,
    title: 'PROJECT-FAIR - Interactive Project Showcase Platform',
    description: 'Project Fair is an interactive platform empowering users to showcase, manage, and share their projects. Authenticated users can explore a curated list of community projects, fostering collaboration and inspiration.',
    category: 'Full-Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: projectFairImg,
    liveUrl: 'https://project-fair-liard.vercel.app/',
    githubUrl: 'https://github.com/salmanslx/PROJECT-FAIR',
    featured: true
  },
  {
    id: 2,
    title: 'MNY - Men’s Clothing E-Commerce Frontend',
    description: 'A stylish e-commerce frontend tailored for men’s fashion, featuring clean UI/UX with product listings, filtering, and shopping cart experience.',
    category: 'Frontend',
    technologies: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    image: mnyEcommerceImg,
    liveUrl: 'https://mny-shopping.netlify.app/',
    githubUrl: 'https://github.com/salmanslx/MNY',
    featured: false
  },
  {
    id: 3,
    title: 'Media Player',
    description: 'Media Player is designed to elevate video viewing experience by allowing users to upload, categorize videos, and track watch history using React and a JSON server.',
    category: 'Full-Stack',
    technologies: ['React', 'JSON', 'Bootstrap'],
    image: mediaPlayerImg,
    liveUrl: 'https://mediaplayer-reactapp.netlify.app/',
    githubUrl: 'https://github.com/salmanslx/MEDIA_PLAYER',
    featured: false
  },
  {
    id: 4,
    title: 'E-Commerce Website – Perfumery & Fragrance',
    description: 'A sleek e-commerce website specialized in perfumery and fragrance products, featuring smooth navigation, product filtering, and a user-friendly shopping experience.',
    category: 'Frontend',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS'],
    image: ruhEssenzaImg,
    liveUrl: 'https://ruhessenza.com',
    githubUrl: 'https://github.com/salmanslx/RUH-ESSENZA',
    featured: false
  },
  {
    id: 5,
    title: 'Real Estate Mobile App Design - Taqatah (Figma)',
    description: 'A modern real estate mobile app UI/UX design prototype created in Figma, focused on seamless property browsing and user experience.',
    category: 'Mobile',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    image: realEstateAppDesignImg,
    liveUrl: 'https://www.figma.com/design/TTgNcyB1YXRWadWUX5a3mw/Taqatah?node-id=2-31&t=lXlfhD2DAVyW7LQP-1',
    githubUrl: '',
    featured: false
  },
  {
    id: 6,
    title: 'LEDIUMM - LED Lights E-Commerce Platform',
    description: 'LEDIUMM is a comprehensive LED lights e-commerce platform built with a robust full-stack architecture. It offers seamless shopping experience, dynamic product showcasing, and secure checkout.',
    category: 'Full-Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS'],
    image: lediummImg, // Replace this with actual LEDIUMM image if you have one e.g. lediummImg
    liveUrl: 'https://lediumm-front.vercel.app/',
    githubUrl: 'https://github.com/salmanslx/lediumm-front',
    featured: true
  }
];


  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-6">
            <span className="text-sm text-primary font-medium">My Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work spanning full-stack development, frontend applications, and UI/UX design
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-transparent border-muted"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category
                ? "bg-gradient-primary"
                : "border-border hover:bg-card"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-xs bg-transparent border-muted"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-transparent border-muted">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex space-x-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
