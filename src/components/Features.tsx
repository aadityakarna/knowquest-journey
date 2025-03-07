
import { CheckCircle, Layout, Code, BookOpen, Users, Award, Database, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Layout size={24} />,
    title: 'Personalized Learning Roadmap',
    description: 'Custom learning paths based on your interests, goals, and current skill level.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Curated Resources',
    description: 'High-quality tutorials, articles, and courses, sorted by experience level.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with visual progress indicators and achievements.',
  },
  {
    icon: <Code size={24} />,
    title: 'Interactive Quizzes',
    description: 'Reinforce your knowledge through engaging exercises and assessments.',
  },
  {
    icon: <Users size={24} />,
    title: 'Community Support',
    description: 'Connect with peers and mentors to collaborate and share insights.',
  },
  {
    icon: <Award size={24} />,
    title: 'Gamification',
    description: 'Earn badges and rewards to stay motivated throughout your learning journey.',
  },
  {
    icon: <Database size={24} />,
    title: 'Offline Access',
    description: 'Download resources to learn anytime, anywhere, without an internet connection.',
  },
  {
    icon: <Zap size={24} />,
    title: 'AI Recommendations',
    description: 'Smart suggestions for courses and skills based on your learning patterns.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Mentor Connect',
    description: 'Access to experienced professionals who can guide your learning process.',
  },
];

const Features = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            className="text-accent font-medium mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FEATURES
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need for effective learning
          </motion.h2>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            KnowQuest combines powerful tools and features to create the most personalized and effective learning experience possible.
          </motion.p>
        </div>

        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:bg-background/80 backdrop-blur-sm border border-border hover:border-accent/20 group"
              variants={item}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
