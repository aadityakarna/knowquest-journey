
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, BookOpen, User, Award, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { RoadmapStep } from "@/services/geminiService";
import ProgressTracker from "@/components/ProgressTracker";

type SavedRoadmap = {
  id: string;
  technology: string;
  duration: string;
  createdAt: string;
  steps: RoadmapStep[];
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("roadmaps");
  const [savedRoadmaps, setSavedRoadmaps] = useState<SavedRoadmap[]>([]);
  const { completedItems } = useProgress();

  // Simulate loading saved roadmaps from local storage
  useEffect(() => {
    const loadSavedRoadmaps = () => {
      const savedData = localStorage.getItem("savedRoadmaps");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData) as SavedRoadmap[];
          setSavedRoadmaps(parsedData);
        } catch (error) {
          console.error("Error parsing saved roadmaps:", error);
        }
      }
    };

    loadSavedRoadmaps();
  }, []);

  const calculateProgress = (roadmapId: string) => {
    const roadmap = savedRoadmaps.find(r => r.id === roadmapId);
    if (!roadmap) return 0;
    
    const totalSteps = roadmap.steps.length;
    if (totalSteps === 0) return 0;
    
    const completedSteps = roadmap.steps.filter(step => 
      completedItems.some(item => item.id === step.id)
    ).length;
    
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const getLastActivity = () => {
    if (completedItems.length === 0) return "No recent activity";
    
    // Sort by most recent (assuming IDs are somewhat time-based, this is a simplification)
    const sorted = [...completedItems].sort((a, b) => b.id.localeCompare(a.id));
    return sorted[0].title;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Learning Profile</h1>
            <p className="text-muted-foreground mt-1">
              Track your progress and manage your learning roadmaps
            </p>
          </div>
          <Link to="/roadmap">
            <Button>
              Create New Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <CardTitle className="text-lg">Learning Stats</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Total Roadmaps</span>
                    <span className="font-medium">{savedRoadmaps.length}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Completed Topics</span>
                    <span className="font-medium">{completedItems.length}</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Last Activity</span>
                    <span className="font-medium truncate max-w-[180px]">{getLastActivity()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="roadmaps">My Roadmaps</TabsTrigger>
            <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="roadmaps" className="space-y-6">
            {savedRoadmaps.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedRoadmaps.map((roadmap) => (
                  <motion.div
                    key={roadmap.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle>{roadmap.technology} Roadmap</CardTitle>
                        <CardDescription>
                          Created on {formatDate(roadmap.createdAt)} • {roadmap.duration} plan
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm">{calculateProgress(roadmap.id)}%</span>
                          </div>
                          <Progress value={calculateProgress(roadmap.id)} className="h-2" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4" />
                          <span>
                            {roadmap.steps.filter(step => 
                              completedItems.some(item => item.id === step.id)
                            ).length} of {roadmap.steps.length} steps completed
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{roadmap.duration} timeframe</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link to="/roadmap" className="w-full">
                          <Button variant="outline" className="w-full">
                            View Roadmap
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border rounded-lg bg-accent/5">
                <BookOpen className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Roadmaps Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your first learning roadmap to track your progress
                </p>
                <Link to="/roadmap">
                  <Button>
                    Create Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <CardTitle>Progress Overview</CardTitle>
                </div>
                <CardDescription>Track your learning journey over time</CardDescription>
              </CardHeader>
              <CardContent>
                {completedItems.length > 0 ? (
                  <ProgressTracker />
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="h-8 w-8 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Progress Data Yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Complete learning topics to see your progress tracking
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Profile;
