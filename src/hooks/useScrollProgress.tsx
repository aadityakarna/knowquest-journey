
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Calculate scroll progress as a percentage
      const currentProgress = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setProgress(currentProgress);
      
      // Set visible state based on scroll position
      setVisible(scrollPosition > 100);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { progress, visible };
}
