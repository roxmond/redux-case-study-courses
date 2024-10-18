import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SearchBar from './components/SearchBar';
import CourseList from './components/CourseList';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <SearchBar />
        <CourseList />
      </div>
    </Provider>
  );
};

export default App;
