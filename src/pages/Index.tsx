
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import ProgressStats from '@/components/ProgressStats';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index = () => {
  // Animation for sections
  const controlsFeatures = useAnimation();
  const [refFeatures, inViewFeatures] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Start animations when sections come into view
  useEffect(() => {
    if (inViewFeatures) {
      controlsFeatures.start('visible');
    }
  }, [controlsFeatures, inViewFeatures]);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Progress Stats Section */}
        <ProgressStats />
        
        <motion.div
          ref={refFeatures}
          animate={controlsFeatures}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Features />
          
          {/* Call to action section */}
          <section className="py-20 px-4 relative overflow-hidden bg-accent/5">
            <div className="absolute inset-0 -z-10">
              <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
              <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-70" />
            </div>
            
            <div className="container mx-auto text-center max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <span>Start Your Journey Today</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform your learning experience with personalized roadmaps
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of learners who have accelerated their skills development through our personalized learning platform.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#" onClick={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
                  <button className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Get Started For Free
                  </button>
                </a>
                <a href="#features">
                  <button className="w-full sm:w-auto px-8 py-3 rounded-lg border border-border bg-background hover:bg-accent/5 font-medium transition-colors duration-300">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
