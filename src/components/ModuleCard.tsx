// ModuleCard.tsx
import React, { useState } from 'react';
import LessonCard from './LessonCard';
import { Module } from '../interfaces/courseTypes'; // Import the Module type

// Props
type ModuleCardProps = {
  module: Module;
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {

  // Hooks
  const [expandedModule, setExpandedModule] = useState<boolean>(false); // False by default (Closed)

  // Other Functionalities
  //  |- Toogle to expand a card
  const toggleModule = () => {
    setExpandedModule(!expandedModule); // Turn to True (Opened)
  };

  return (
    <div className="p-4 bg-gray-800 mt-4 rounded-lg">
      
      <div className="cursor-pointer hover:text-blue-500"
           onClick={toggleModule}
      >
        <h3 className="text-xl font-semibold text-slate-200">{module.title}</h3>
      </div>

      {expandedModule && (
        <div className="mt-2">
          {module.lessons.map((lesson, index) => (
            <LessonCard key={index} lesson={lesson} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
