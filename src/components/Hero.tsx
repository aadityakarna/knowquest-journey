
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import AuthModal from './AuthModal';
import { ArrowRight, Lightbulb, BookOpenCheck, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl opacity-60 animate-pulse" style={{animationDelay: '1s'}} />
      </div>
      
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Text content */}
        <motion.div 
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-2">
            <Lightbulb size={16} className="animate-pulse" />
            <span>Personalized Learning Experience</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your Learning Journey,{" "}
            <span className="gradient-text animate-text-glow">Personalized</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Discover a learning experience tailored to your goals, interests, and pace. With KnowQuest, chart your own path to mastery with curated resources and interactive roadmaps.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={() => setIsAuthOpen(true)} className="group">
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Features
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-muted-foreground text-sm">Learning Paths</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-2xl font-bold">5,000+</p>
              <p className="text-muted-foreground text-sm">Resources</p>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-2xl font-bold">30k+</p>
              <p className="text-muted-foreground text-sm">Learners</p>
            </div>
          </div>
        </motion.div>
        
        {/* Image/Visual content */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            {/* Main card */}
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl p-4 md:p-6 backdrop-blur-xl border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <BookOpenCheck className="h-6 w-6 text-accent" />
                <h3 className="text-lg font-semibold">Your Learning Dashboard</h3>
              </div>
              
              <div className="space-y-4">
                {/* Progress bars */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>React Fundamentals</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>TypeScript Basics</span>
                    <span>45%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Advanced CSS</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-3 rounded-xl bg-accent/10 border border-accent/20">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Next Milestone: Component Architecture</h4>
                    <p className="text-xs text-muted-foreground mt-1">Complete 2 more lessons to unlock this achievement</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating card 1 */}
            <div className="absolute -top-6 -right-4 glass-card rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Lightbulb size={16} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium">React Hooks</p>
                  <p className="text-[10px] text-muted-foreground">New concept unlocked</p>
                </div>
              </div>
            </div>
            
            {/* Floating card 2 */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Trophy size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium">7 Day Streak</p>
                  <p className="text-[10px] text-muted-foreground">Keep going!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
        onLogin={() => window.location.href = '/dashboard'}
      />
    </section>
  );
};

export default Hero;
