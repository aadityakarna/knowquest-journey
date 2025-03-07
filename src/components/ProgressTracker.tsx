
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { CheckCircle2, Trophy, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const streakData = [
  { name: 'Mon', streak: 1 },
  { name: 'Tue', streak: 1 },
  { name: 'Wed', streak: 1 },
  { name: 'Thu', streak: 1 },
  { name: 'Fri', streak: 0 },
  { name: 'Sat', streak: 1 },
  { name: 'Sun', streak: 1 },
];

const timeData = [
  { name: 'Week 1', hours: 2.5 },
  { name: 'Week 2', hours: 3.2 },
  { name: 'Week 3', hours: 1.8 },
  { name: 'Week 4', hours: 4.1 },
];

const completionData = [
  { name: 'React', completed: 75, total: 100 },
  { name: 'TypeScript', completed: 45, total: 100 },
  { name: 'CSS', completed: 90, total: 100 },
  { name: 'Node.js', completed: 30, total: 100 },
];

const achievements = [
  { 
    id: '1', 
    title: '7-Day Streak', 
    description: 'Logged in for 7 consecutive days', 
    icon: <Clock className="h-5 w-5" />,
    earned: true,
    date: '2023-08-15'
  },
  { 
    id: '2', 
    title: 'First Course Completed', 
    description: 'Finished your first full course', 
    icon: <CheckCircle2 className="h-5 w-5" />,
    earned: true,
    date: '2023-08-10'
  },
  { 
    id: '3', 
    title: 'Knowledge Explorer', 
    description: 'Explored 10 different topics', 
    icon: <Trophy className="h-5 w-5" />,
    earned: false,
    progress: 7,
    total: 10
  },
];

const ProgressTracker = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <CardDescription>Daily login streak</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold">5</div>
                  <div className="text-muted-foreground text-sm">days</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Topics Completed</CardTitle>
                <CardDescription>Total topics finished</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold">12</div>
                  <div className="text-muted-foreground text-sm">of 35</div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                <CardDescription>Total time spent learning</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold">28</div>
                  <div className="text-muted-foreground text-sm">hours</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your learning activity for the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={streakData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis allowDecimals={false} domain={[0, 1]} />
                      <Tooltip />
                      <Bar dataKey="streak" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="statistics" className="pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Learning Time</CardTitle>
                <CardDescription>Hours spent learning each week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={timeData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="hours" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={2}
                        dot={{ strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }} 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Topic Completion</CardTitle>
                <CardDescription>Progress by subject area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={completionData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={80} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="achievements" className="pt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className={`border ${achievement.earned ? 'border-accent/30' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-accent/20 text-accent' : 'bg-muted text-muted-foreground'
                    }`}>
                      {achievement.icon}
                    </div>
                    {achievement.earned && (
                      <div className="text-xs text-muted-foreground">
                        Earned {achievement.date}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  
                  {!achievement.earned && achievement.progress !== undefined && (
                    <div className="w-full bg-muted rounded-full h-2 mt-4">
                      <div 
                        className="bg-accent h-2 rounded-full" 
                        style={{ width: `${(achievement.progress / achievement.total) * 100}%` }} 
                      />
                      <div className="text-xs text-muted-foreground mt-1">
                        {achievement.progress} / {achievement.total}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressTracker;
