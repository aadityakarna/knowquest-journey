
import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoadmapItem = {
  id: string;
  title: string;
  completed: boolean;
};

type ProgressContextType = {
  completedItems: RoadmapItem[];
  addCompletedItem: (item: RoadmapItem) => void;
  removeCompletedItem: (id: string) => void;
  totalItems: number;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedItems, setCompletedItems] = useState<RoadmapItem[]>(() => {
    const saved = localStorage.getItem('learningProgress');
    return saved ? JSON.parse(saved) : [];
  });

  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem('learningProgress', JSON.stringify(completedItems));
  }, [completedItems]);

  const addCompletedItem = (item: RoadmapItem) => {
    setCompletedItems(prev => {
      // Check if item already exists
      if (prev.some(i => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeCompletedItem = (id: string) => {
    setCompletedItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        completedItems, 
        addCompletedItem, 
        removeCompletedItem,
        totalItems
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
