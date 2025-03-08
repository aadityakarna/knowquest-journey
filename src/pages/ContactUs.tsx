
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have questions about the platform? Interested in collaborating? Feel free to reach out through any of the channels below.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              <a 
                href="https://github.com/aadityakarna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md text-center">
                  <Github className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">aadityakarna</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/aaditya-karna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md text-center">
                  <Linkedin className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">aaditya-karna</p>
                </div>
              </a>
              
              <a 
                href="https://twitter.com/Karna78Karna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md text-center">
                  <Twitter className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Twitter</h3>
                  <p className="text-muted-foreground">Karna78Karna</p>
                </div>
              </a>
              
              <a 
                href="mailto:aadityakarna646@gmail.com" 
                className="block"
              >
                <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-md text-center">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">aadityakarna646@gmail.com</p>
                </div>
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center max-w-2xl mx-auto p-8 rounded-xl bg-accent/5 border border-border"
            >
              <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, opportunities, or just having a chat about learning and technology.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="default" 
                  size="lg"
                  onClick={() => window.location.href = 'mailto:aadityakarna646@gmail.com'}
                >
                  <Mail className="mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/aaditya-karna', '_blank')}
                >
                  <Linkedin className="mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
