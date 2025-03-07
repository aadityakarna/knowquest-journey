
import { ExternalLink, BookOpen, Clock, Star, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'tutorial' | 'course';
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  source: string;
  url: string;
}

const ResourceCard = ({
  id,
  title,
  description,
  type,
  duration,
  level,
  rating,
  source,
  url,
}: ResourceCardProps) => {
  const typeColors = {
    article: 'bg-blue-100 text-blue-800 border-blue-200',
    video: 'bg-red-100 text-red-800 border-red-200',
    tutorial: 'bg-green-100 text-green-800 border-green-200',
    course: 'bg-purple-100 text-purple-800 border-purple-200',
  };

  const levelColors = {
    beginner: 'text-emerald-600',
    intermediate: 'text-blue-600',
    advanced: 'text-purple-600',
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-md overflow-hidden">
      <CardHeader className="pb-3 pt-5">
        <div className="flex justify-between items-start gap-2">
          <Badge className={`${typeColors[type]} text-xs px-2 py-0.5`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Badge>
          <div className="flex items-center text-amber-500">
            {Array(5).fill(0).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < rating ? 'fill-current' : 'opacity-30'}`}
              />
            ))}
          </div>
        </div>
        <h3 className="font-semibold text-lg mt-2 line-clamp-2">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{source}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
          <div className={`flex items-center gap-1 ${levelColors[level]}`}>
            <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-2 flex justify-between gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full flex-1"
        >
          <Download className="h-4 w-4 mr-1" />
          Save
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="w-full flex-1"
          onClick={() => window.open(url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
