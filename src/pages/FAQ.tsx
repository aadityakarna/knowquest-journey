import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, User, BookOpen, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our platform, features, and how to get started.
            </p>
          </div>
          
          <div className="space-y-10">
            {/* General Questions */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <HelpCircle size={20} />
                </div>
                <h2 className="text-2xl font-semibold">General Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="bg-card rounded-lg p-1">
                <AccordionItem value="q1">
                  <AccordionTrigger className="px-4 py-3">
                    What is the Personalized Learning Platform?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    The Personalized Learning Platform is an AI-driven educational tool that creates customized learning roadmaps based on users' interests and goals, providing curated resources and progress tracking.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q2">
                  <AccordionTrigger className="px-4 py-3">
                    Is the platform free to use?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    We offer both free and premium plans. Free users get access to basic learning paths, while premium users can unlock advanced features like mentor support, certifications, and exclusive content.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q3">
                  <AccordionTrigger className="px-4 py-3">
                    What kind of subjects and technologies can I learn?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    You can learn various topics, including programming (Python, Java, Web Development), data science, AI/ML, cybersecurity, cloud computing, and more.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q4">
                  <AccordionTrigger className="px-4 py-3">
                    How is the learning roadmap created?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    After signing up, users select their preferred technologies and learning objectives. Based on this input, the platform generates a structured learning roadmap with relevant resources.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Account & Authentication */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <User size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Account & Authentication</h2>
              </div>
              
              <Accordion type="single" collapsible className="bg-card rounded-lg p-1">
                <AccordionItem value="q5">
                  <AccordionTrigger className="px-4 py-3">
                    How do I sign up for an account?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Click on the "Sign Up" button on the landing page, enter your details, and verify your email to start using the platform.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q6">
                  <AccordionTrigger className="px-4 py-3">
                    Can I reset my password if I forget it?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes! Click on "Forgot Password" on the login page, and we will send a password reset link to your registered email.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q7">
                  <AccordionTrigger className="px-4 py-3">
                    Can I delete my account?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, you can delete your account from the settings section. However, please note that all progress and data will be lost permanently.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Learning & Progress Tracking */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <BookOpen size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Learning & Progress Tracking</h2>
              </div>
              
              <Accordion type="single" collapsible className="bg-card rounded-lg p-1">
                <AccordionItem value="q8">
                  <AccordionTrigger className="px-4 py-3">
                    How do I track my learning progress?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    The platform provides a dashboard where you can see your completed topics, ongoing lessons, and suggested next steps.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q9">
                  <AccordionTrigger className="px-4 py-3">
                    Can I customize my learning roadmap after starting?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, you can update your interests and modify your roadmap at any time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q10">
                  <AccordionTrigger className="px-4 py-3">
                    Do you provide certificates after course completion?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Currently, we are working on adding certification options. Stay tuned for updates!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Support & Community */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <MessageCircle size={20} />
                </div>
                <h2 className="text-2xl font-semibold">Support & Community</h2>
              </div>
              
              <Accordion type="single" collapsible className="bg-card rounded-lg p-1">
                <AccordionItem value="q11">
                  <AccordionTrigger className="px-4 py-3">
                    How can I ask questions or get help?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    You can use the discussion forum to interact with other learners or reach out to our support team.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q12">
                  <AccordionTrigger className="px-4 py-3">
                    Can I connect with mentors?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    Yes, in our premium plan, users can connect with industry mentors for guidance and career advice.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="q13">
                  <AccordionTrigger className="px-4 py-3">
                    Is there a mobile app version of the platform?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    We are in the process of developing a mobile app. Meanwhile, the website is fully responsive and works on mobile devices.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our support team and we'll get back to you as soon as possible.
            </p>
            <a href="mailto:aadityakarna646@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
