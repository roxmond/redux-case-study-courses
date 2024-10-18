import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../redux/coursesSlice';
import { selectFilteredCourses } from '../redux/selectors'
import ModuleCard from './ModuleCard';
import { AppDispatch, RootState } from '../redux/store';

const CourseList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Explicitly type dispatch for async thunks
  const courses = useSelector(selectFilteredCourses); // Use filtered courses from the selector
  const loading = useSelector((state: RootState) => state.courses.loading); // RootState for proper typing
  const [expandedCourseId, setExpandedCourseId] = useState<number | null>(null);

  const toggleCourse = (courseId: number) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) {
    return <p className='flex text-center justify-center text-slate-700 border p-2 bg-slate-300'>Loading courses...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4 text-center text-slate-300">Courses</h1>
      {courses.length === 0 ? (
        <p className="text-center text-slate-400">No courses found.</p>
      ) : (
        courses.map((course) => (
          <div key={course.id} className="mb-6">
            <div
              className="p-4 bg-slate-600 shadow-lg rounded-lg cursor-pointer hover:bg-gray-500 transition-all"
              onClick={() => toggleCourse(course.id)}
            >
              <h2 className="text-2xl font-semibold text-slate-200">{course.title}</h2>
              <p className="text-slate-400">{course.description}</p>
            </div>
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
