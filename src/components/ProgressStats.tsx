
import React from 'react';
import { useProgress } from '@/context/ProgressContext';
import { ArrowUpRight, BookCheck, Clock, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProgressStats = () => {
  const { completedItems } = useProgress();

  // Display nothing if no items have been completed
  if (completedItems.length === 0) {
    return null;
  }

  return (
    <motion.section 
      className="py-16 bg-accent/5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <BookCheck className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Your Learning Progress</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Topics Completed</h3>
                <div className="p-2 rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="text-3xl font-bold">{completedItems.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Keep up the great work!</p>
            </div>
            
            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Recent Topic</h3>
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="font-medium line-clamp-1">
                {completedItems[completedItems.length - 1]?.title || "None"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {completedItems.length > 0 ? "Recently completed" : "No topics completed yet"}
              </p>
            </div>
            
            <div className="bg-background rounded-xl border p-6 shadow-sm">
              <div className="flex flex-col h-full justify-between">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Continue Learning</h3>
                  <div className="p-2 rounded-full bg-primary/10">
                    <BookCheck className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <Link 
                  to="/roadmap" 
                  className="mt-4 text-primary flex items-center font-medium hover:underline"
                >
                  Go to Roadmap
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressStats;
