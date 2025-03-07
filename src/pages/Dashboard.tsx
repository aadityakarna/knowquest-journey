
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProgressTracker from '@/components/ProgressTracker';
import RoadmapCard from '@/components/RoadmapCard';
import ResourceCard from '@/components/ResourceCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { roadmapData, resourcesData, userProfile } from '@/lib/data';
import { ArrowRight, BookOpen, Award, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get active roadmaps (progress < 100)
  const activeRoadmaps = roadmapData.filter((roadmap) => roadmap.progress < 100);
  
  // Get recommended resources (based on user's interests - simplified for demo)
  const recommendedResources = resourcesData.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 pt-24 pb-16">
        <div className="container mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userProfile.name}</h1>
            <p className="text-muted-foreground">Continue your learning journey where you left off.</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="roadmaps">My Roadmaps</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid gap-6">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Your Active Roadmaps</h2>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab('roadmaps')} className="group">
                          View All
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        {activeRoadmaps.slice(0, 2).map((roadmap) => (
                          <RoadmapCard key={roadmap.id} {...roadmap} />
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Recommended Resources</h2>
                        <Button variant="ghost" size="sm" onClick={() => setActiveTab('resources')} className="group">
                          View All
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-3">
                        {recommendedResources.map((resource) => (
                          <ResourceCard key={resource.id} {...resource} />
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="roadmaps">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">All Roadmaps</h2>
                      <div className="flex items-center gap-2">
                        <select className="bg-background border border-input rounded-md px-3 py-1 text-sm">
                          <option>All Levels</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                        <Button variant="outline" size="sm">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {roadmapData.map((roadmap) => (
                        <RoadmapCard key={roadmap.id} {...roadmap} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="resources">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">All Resources</h2>
                      <div className="flex items-center gap-2">
                        <select className="bg-background border border-input rounded-md px-3 py-1 text-sm">
                          <option>All Types</option>
                          <option>Articles</option>
                          <option>Videos</option>
                          <option>Tutorials</option>
                          <option>Courses</option>
                        </select>
                        <Button variant="outline" size="sm">
                          <Search className="h-4 w-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {resourcesData.map((resource) => (
                        <ResourceCard key={resource.id} {...resource} />
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-5 w-5 text-accent mr-2 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Daily Goal</h3>
                    <p className="text-sm text-muted-foreground">
                      30 minutes of learning per day
                    </p>
                  </div>
                </div>
                <div className="w-full h-2 bg-muted rounded-full">
                  <div 
                    className="h-2 bg-accent rounded-full" 
                    style={{ width: '67%' }} 
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>20 min completed</span>
                  <span>10 min remaining</span>
                </div>
              </div>
              
              <div className="bg-background rounded-lg border shadow-sm">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Your Progress</h3>
                  </div>
                </div>
                <div className="p-4">
                  <ProgressTracker />
                </div>
              </div>
              
              <div className="bg-background rounded-lg border shadow-sm p-4">
                <h3 className="font-medium mb-3">Learning Goals</h3>
                <div className="space-y-2">
                  {userProfile.goals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-sm">{goal}</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full">
                  Edit Goals
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
