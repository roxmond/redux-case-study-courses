// intefaces/courseTypes.tsx
export interface Course {
    id: number;
    title: string;
    description: string;
    modules: Module[];
  }
  
  export interface Module {
    title: string;
    lessons: Lesson[];
  }
  
  export interface Lesson {
    title: string;
    description: string;
    topics: string[];
    content: Content[];
  }
  
  export interface Content {
    type: string; // text, video, audio, podcast
    data: string; // URL for media content
  }