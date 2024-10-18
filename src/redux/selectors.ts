// redux/selectors.ts
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectFilteredCourses = createSelector(
  (state: RootState) => state.courses.courses, // All courses
  (state: RootState) => state.ui.searchQuery, // Search query
  (courses, searchQuery) =>
    courses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
);
