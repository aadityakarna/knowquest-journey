
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { BookOpen, Clock, Code, Loader2, Youtube, ArrowRight, CheckCircle, Award, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import Certificate from "@/components/Certificate";
import { generateRoadmap, RoadmapStep } from "@/services/geminiService";

type RoadmapItem = RoadmapStep & {
  completed: boolean;
};

const LearningRoadmap = () => {
  const [technology, setTechnology] = useState("");
  const [duration, setDuration] = useState("3 months");
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [activeTab, setActiveTab] = useState("input");
  const [showCertificate, setShowCertificate] = useState(false);
  const [userName, setUserName] = useState("");
  const [apiError, setApiError] = useState<string | null>(null);
  
  const { addCompletedItem, removeCompletedItem, completedItems, setTotalItems, isRoadmapCompleted } = useProgress();

  // Check if roadmap is completed whenever completedItems changes
  useEffect(() => {
    if (roadmap.length > 0) {
      const allCompleted = isRoadmapCompleted(roadmap.length);
      if (allCompleted && roadmap.every(item => completedItems.some(ci => ci.id === item.id))) {
        // Only show certificate if user hasn't dismissed it in this session
        setShowCertificate(true);
      }
    }
  }, [completedItems, roadmap, isRoadmapCompleted]);

  const handleGenerateRoadmap = async () => {
    if (!technology.trim()) {
      toast.error("Please enter a technology you want to learn");
      return;
    }

    setApiError(null);
    setIsGenerating(true);
    
    try {
      // Call the Gemini API to generate the roadmap
      const roadmapData = await generateRoadmap({
        technology,
        duration
      });
      
      // Transform the API response into our RoadmapItem type with completed status
      const updatedRoadmap = roadmapData.roadmap.map(item => ({
        ...item,
        completed: completedItems.some(ci => ci.id === item.id)
      }));
      
      setRoadmap(updatedRoadmap);
      
      // Update total items in context for progress tracking
      setTotalItems(updatedRoadmap.length);
      
      setActiveTab("roadmap");
      toast.success(`Your ${technology} learning roadmap is ready!`);
    } catch (error) {
      console.error("Error generating roadmap:", error);
      setApiError("Gemini API key not configured. This feature will be available soon.");
      toast.error("Roadmap generation is not yet available. Coming soon!");
    } finally {
      setIsGenerating(false);
    }
  };

  const markAsCompleted = (id: string) => {
    setRoadmap(prevRoadmap => {
      const updatedRoadmap = prevRoadmap.map(item => {
        if (item.id === id) {
          const newCompletedState = !item.completed;
          
          if (newCompletedState) {
            addCompletedItem({ id: item.id, title: item.title, completed: true });
          } else {
            removeCompletedItem(item.id);
          }
          
          return { ...item, completed: newCompletedState };
        }
        return item;
      });
      
      return updatedRoadmap;
    });
    
    toast.success("Progress updated!");
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Youtube className="h-5 w-5 text-red-500" />;
      case 'article':
        return <BookOpen className="h-5 w-5 text-blue-500" />;
      case 'tutorial':
      default:
        return <Code className="h-5 w-5 text-purple-500" />;
    }
  };

  const allCompleted = roadmap.length > 0 && roadmap.every(item => 
    completedItems.some(ci => ci.id === item.id)
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Learning Roadmap Generator</h1>
        <p className="text-muted-foreground">
          Create a personalized learning roadmap powered by Google Gemini AI
        </p>
      </motion.div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="input">Create Roadmap</TabsTrigger>
          <TabsTrigger value="roadmap" disabled={roadmap.length === 0}>View Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>What do you want to learn?</CardTitle>
              <CardDescription>
                Tell us what technology you want to master and how much time you have
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="technology">Technology or Skill</Label>
                <Input
                  id="technology"
                  placeholder="e.g., React, Machine Learning, Python, JavaScript"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Learning Timeframe</Label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="3 months">3 months</SelectItem>
                    <SelectItem value="6 months">6 months</SelectItem>
                    <SelectItem value="1 year">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="userName">Your Name (for Certificate)</Label>
                <Input
                  id="userName"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              
              {apiError && (
                <div className="p-4 mt-4 border border-amber-200 bg-amber-50 rounded-md">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-700">Coming Soon</h4>
                      <p className="text-sm text-amber-600">{apiError}</p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleGenerateRoadmap} 
                disabled={isGenerating} 
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating your roadmap...
                  </>
                ) : (
                  <>
                    Generate Learning Roadmap
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>
                Gemini API integration coming soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-md">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                <span className="text-sm text-amber-700">
                  The Gemini API integration is currently being configured. Roadmap generation will be available soon.
                </span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roadmap" className="space-y-6">
          {roadmap.length > 0 ? (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your {technology} Learning Roadmap</CardTitle>
                  <CardDescription>
                    Estimated completion time: {duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-6">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      This roadmap is tailored based on your timeframe of {duration}.
                    </span>
                  </div>

                  {allCompleted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 border border-green-500 bg-green-50 rounded-lg flex items-center gap-3"
                    >
                      <Award className="h-6 w-6 text-green-500" />
                      <div>
                        <h3 className="font-semibold text-green-700">Congratulations! You've completed the entire roadmap!</h3>
                        <p className="text-sm text-green-600">A certificate of achievement has been generated for you.</p>
                      </div>
                      <Button
                        variant="outline"
                        className="ml-auto"
                        onClick={() => setShowCertificate(true)}
                      >
                        View Certificate
                      </Button>
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    {roadmap.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className={`${item.completed ? "border-green-400 bg-green-50/10" : ""}`}>
                          <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                              <div className="space-y-1">
                                <CardTitle className="flex items-center gap-2">
                                  {item.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                                  <span>{index + 1}. {item.title}</span>
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                  <Clock className="h-3.5 w-3.5" />
                                  Estimated time: {item.estimatedTime}
                                </p>
                              </div>
                              <Button
                                variant={item.completed ? "outline" : "default"}
                                size="sm"
                                onClick={() => markAsCompleted(item.id)}
                              >
                                {item.completed ? "Mark Incomplete" : "Mark Complete"}
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <BookOpen className="h-4 w-4" />
                              Recommended Resources
                            </h4>
                            <div className="space-y-3">
                              {item.resources.map((resource) => (
                                <a
                                  key={resource.id}
                                  href={resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start p-3 rounded-md border hover:bg-accent/10 transition-colors"
                                >
                                  <div className="flex-shrink-0 mr-3">
                                    {getResourceIcon(resource.type)}
                                  </div>
                                  <div>
                                    <div className="font-medium">{resource.title}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {resource.source}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setActiveTab("input")}>
                    Edit Preferences
                  </Button>
                  <Button variant="default">
                    Save Roadmap
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No roadmap generated yet. Please create one first.</p>
              <Button
                variant="outline"
                onClick={() => setActiveTab("input")}
                className="mt-4"
              >
                Create Roadmap
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Certificate Dialog with userName prop */}
      <Certificate 
        open={showCertificate} 
        onOpenChange={setShowCertificate}
        technology={technology}
        userName={userName || "Learner"}
      />
    </div>
  );
};

export default LearningRoadmap;
