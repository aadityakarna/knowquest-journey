import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { BookOpen, Clock, Code, Loader2, Youtube, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";

type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  resources: Resource[];
  completed: boolean;
};

type Resource = {
  id: string;
  title: string;
  type: "video" | "article" | "tutorial";
  url: string;
  source: string;
};

const LearningRoadmap = () => {
  const [technology, setTechnology] = useState("");
  const [duration, setDuration] = useState("3 months");
  const [isGenerating, setIsGenerating] = useState(false);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [activeTab, setActiveTab] = useState("input");
  
  const { addCompletedItem, removeCompletedItem, completedItems } = useProgress();

  const handleGenerateRoadmap = async () => {
    if (!technology.trim()) {
      toast.error("Please enter a technology you want to learn");
      return;
    }

    setIsGenerating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockRoadmap = generateMockRoadmap(technology, duration);
      
      const updatedRoadmap = mockRoadmap.map(item => ({
        ...item,
        completed: completedItems.some(ci => ci.id === item.id)
      }));
      
      setRoadmap(updatedRoadmap);
      setActiveTab("roadmap");
      toast.success(`Your ${technology} learning roadmap is ready!`);
    } catch (error) {
      console.error("Error generating roadmap:", error);
      toast.error("Failed to generate roadmap. Please try again.");
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

  const generateMockRoadmap = (tech: string, timeframe: string): RoadmapItem[] => {
    return [
      {
        id: "1",
        title: `Introduction to ${tech}`,
        description: `Learn the fundamentals of ${tech} and set up your development environment.`,
        completed: false,
        resources: [
          {
            id: "r1",
            title: `Getting Started with ${tech} - Complete Guide`,
            type: "video",
            url: "#",
            source: "YouTube"
          },
          {
            id: "r2",
            title: `${tech} Fundamentals for Beginners`,
            type: "article",
            url: "#",
            source: "Medium"
          }
        ]
      },
      {
        id: "2",
        title: `${tech} Core Concepts`,
        description: `Understand the main concepts and architecture of ${tech}.`,
        completed: false,
        resources: [
          {
            id: "r3",
            title: `${tech} Architecture Explained`,
            type: "video",
            url: "#",
            source: "YouTube"
          },
          {
            id: "r4",
            title: `Core ${tech} Concepts Every Developer Should Know`,
            type: "article",
            url: "#",
            source: "Dev.to"
          }
        ]
      },
      {
        id: "3",
        title: `Building Projects with ${tech}`,
        description: `Apply your knowledge by building real-world projects with ${tech}.`,
        completed: false,
        resources: [
          {
            id: "r5",
            title: `Build a Complete Application with ${tech}`,
            type: "tutorial",
            url: "#",
            source: "Udemy"
          },
          {
            id: "r6",
            title: `${tech} Project Ideas for Portfolios`,
            type: "article",
            url: "#",
            source: "freeCodeCamp"
          }
        ]
      }
    ];
  };

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
                                    {resource.type === "video" && (
                                      <Youtube className="h-5 w-5 text-red-500" />
                                    )}
                                    {resource.type === "article" && (
                                      <BookOpen className="h-5 w-5 text-blue-500" />
                                    )}
                                    {resource.type === "tutorial" && (
                                      <Code className="h-5 w-5 text-purple-500" />
                                    )}
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
    </div>
  );
};

export default LearningRoadmap;
