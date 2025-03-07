
import { useState } from 'react';
import { CheckCircle, ChevronRight, Lock, PlayCircle, BookOpen, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Resource {
  id: string;
  type: 'video' | 'article' | 'tutorial';
  title: string;
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface RoadmapCardProps {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  resources: Resource[];
}

const RoadmapCard = ({
  id,
  title,
  description,
  level,
  progress,
  resources,
}: RoadmapCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const levelColors = {
    beginner: 'bg-emerald-100 text-emerald-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-purple-100 text-purple-800',
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <PlayCircle size={16} />;
      case 'article':
        return <FileText size={16} />;
      case 'tutorial':
        return <BookOpen size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  return (
    <Card className="transition-all duration-300 hover:shadow-md overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge variant="outline" className={`${levelColors[level]} mb-2`}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </Badge>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full flex items-center justify-between p-2 text-sm rounded-md">
              <span>View Resources ({resources.length})</span>
              <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-2 space-y-2">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className={`flex items-center justify-between p-3 rounded-md text-sm ${
                  resource.locked 
                    ? 'bg-muted cursor-not-allowed opacity-60' 
                    : 'bg-background hover:bg-accent/5 cursor-pointer'
                } border transition-colors`}
              >
                <div className="flex items-center gap-2">
                  <div className="text-accent">
                    {resource.locked ? <Lock size={16} /> : getResourceIcon(resource.type)}
                  </div>
                  <span className={resource.completed ? 'line-through opacity-70' : ''}>
                    {resource.title}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">{resource.duration}</span>
                  {resource.completed && (
                    <CheckCircle size={16} className="text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button variant="outline" className="w-full" disabled={progress === 100}>
          {progress === 100 ? 'Completed' : 'Continue Learning'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoadmapCard;
