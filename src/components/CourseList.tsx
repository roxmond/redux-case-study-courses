import React, { useState } from 'react';
import { Course } from '../interfaces/courseTypes';
import ModuleCard from './ModuleCard';

// Props
interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {

  // Hooks
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  // Other Functionalities
  //  |- Toogle to expand a card
  const toggleCourse = (courseId: number) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center text-slate-300">Courses</h1>

      {/* If no courses match the search query */}
      {courses.length === 0 ? (
        <p className="text-center text-slate-400">No courses found.</p>
      ) : (
        courses.map((course: Course) => (
          <div key={course.id} className="mb-6">
            {/* Clickable card to expand/collapse course */}
            <div
              className="p-4 bg-slate-600 shadow-lg rounded-lg cursor-pointer hover:bg-gray-500 transition-all"
              onClick={() => toggleCourse(course.id)}
            >
              <h2 className="text-2xl font-semibold text-slate-200">{course.title}</h2>
              <p className="text-slate-400">{course.description}</p>
            </div>

            {/* Conditionally render modules if the course is expanded */}
            {expandedCourseId === course.id && (
              <div className="mt-4">
                {course.modules.map((module, index) => (
                  <ModuleCard key={index} module={module} />
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CourseList;
