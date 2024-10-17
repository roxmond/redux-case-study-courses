import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import courseData from './data/courses.json'; 
import { Course } from './interfaces/courseTypes'; 
import './App.css';

const App: React.FC = () => {

  // Hooks
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handles
  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  // Filters
  const filteredCourses = courseData.filter((course: Course) =>
    course.title.toLowerCase().includes(searchQuery) ||
    course.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default App;
