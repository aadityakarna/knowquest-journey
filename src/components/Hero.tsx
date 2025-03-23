
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, BookOpen, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span>Personalized Learning Platform</span>
            </div>
          </motion.div>
        
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Master New Skills with <span className="gradient-text">Personalized</span> Learning Paths
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create tailored learning roadmaps, track your progress, and connect with resources that match your learning style and goals.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/roadmap">
              <Button size="lg" className="group">
                Create Learning Roadmap
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/roadmap">
              <Button variant="outline" size="lg">
                Explore Resources
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/roadmap" className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalized Path</h3>
              <p className="text-muted-foreground text-sm">Tailored learning roadmaps based on your skill level and goals.</p>
            </Link>
            
            <Link to="/resources" className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Resources</h3>
              <p className="text-muted-foreground text-sm">Curated content from top sources matched to your learning pace.</p>
            </Link>
            
            <Link to="/dashboard" className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 mx-auto">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground text-sm">Monitor your learning journey and celebrate milestones.</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
