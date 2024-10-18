// redux/slices/courseSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Course } from '../interfaces/courseTypes';

interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};

// Fetch courses asynchronously
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  // Simulate an API call or fetch from your data source
  const response = await fetch('/courses.json');
  const data: Course[] = await response.json();
  return data;
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export default coursesSlice.reducer;
