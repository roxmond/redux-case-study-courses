// components/LessonCard.tsx
import React, { useState } from 'react';
import { Lesson } from '../interfaces/courseTypes';
import renderContent from '../utils/renderContent';

// Props
type LessonCardProps = {
  lesson: Lesson;
};

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {

  // Hooks
  const [expandedLesson, setExpandedLesson] = useState<boolean>(false); // False by default (Closed)

   // Other Functionalities
  //  |- Toogle to expand a card
  const toggleLesson = () => {
    setExpandedLesson(!expandedLesson); // Turn to True (Opened)
  };

  return (
    <div className="p-3 bg-gray-700 mt-2 rounded-lg">
      
      <div className="cursor-pointer hover:text-blue-400"
           onClick={toggleLesson}
      >
        <h4 className="text-lg font-medium text-slate-200">{lesson.title}</h4>
        <p className="text-slate-400">{lesson.description}</p>
      </div>

      {expandedLesson && (
        <div className="mt-2 pl-4">
          <h5 className="text-sm font-semibold text-slate-200">Topics:</h5>
          <ul className="list-disc list-inside text-slate-400">
            {lesson.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          <h5 className="text-sm font-semibold text-slate-200 mt-2">Content:</h5>
          {lesson.content.map((contentItem, index) => (
            <div key={index} className="mt-2">
              {renderContent(contentItem)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LessonCard;