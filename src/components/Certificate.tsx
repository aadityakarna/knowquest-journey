
import React, { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Award, Share2 } from 'lucide-react';
import { toast } from 'sonner';

interface CertificateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  technology: string;
  userName?: string;
}

const Certificate: React.FC<CertificateProps> = ({ 
  open, 
  onOpenChange, 
  technology,
  userName = "Learner" 
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    toast.success("Certificate downloaded successfully!");
    // In a real implementation, you would use html2canvas or a similar library
    // to convert the certificate div to an image and download it
  };

  const handleShare = () => {
    toast.success("Certificate sharing link copied to clipboard!");
    // In a real implementation, this would generate a shareable link
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Congratulations on Completing Your {technology} Learning Path!
          </DialogTitle>
        </DialogHeader>
        
        <div 
          ref={certificateRef} 
          className="p-8 border-4 border-amber-500 rounded-lg bg-gradient-to-br from-white to-gray-50 relative overflow-hidden"
        >
          {/* Certificate background patterns */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gray-800 transform -rotate-45 -translate-x-20 -translate-y-20"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-amber-500 transform -rotate-45 -translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-800 transform -rotate-45 translate-x-20 translate-y-20"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500 transform -rotate-45 translate-x-24 translate-y-24"></div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-center mb-2">CERTIFICATE</h1>
            <h2 className="text-xl text-center mb-8">OF ACHIEVEMENT</h2>
            
            <p className="text-center mb-8 text-lg">
              THIS CERTIFICATE IS PROUDLY PRESENTED TO
            </p>
            
            <h3 className="text-2xl font-bold text-center mb-8 border-b-2 border-amber-500 pb-2 w-3/4 mx-auto">
              {userName}
            </h3>
            
            <p className="text-center mb-8 text-lg">
              For completing the {technology} course from KnowQuest
            </p>
            
            <div className="flex justify-center mb-8">
              <img 
                src="/lovable-uploads/9ec3031d-7d42-48aa-9229-f062b06537ab.png" 
                alt="Certificate Seal" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <div className="flex justify-between items-center mt-12">
              <div>
                <p className="font-bold">Date:</p>
                <p>{currentDate}</p>
              </div>
              <div>
                <p className="font-bold">Certificate ID:</p>
                <p>KQ-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between">
          <div className="flex gap-2">
            <Button 
              onClick={handleDownload} 
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 size={16} />
              Share
            </Button>
          </div>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Certificate;
