export const difficulty = { 1: 'Very Easy', 2: 'Easy', 3: 'Moderate', 4: 'Hard', 5: 'Very Hard' };
export const workload = { 1: '0-4 hrs', 2: '5-8 hrs', 3: '9-12 hrs', 4: '13-16 hrs', 5: '17+ hrs' };
export const teachingStaff = {
  1: 'Not Good',
  2: 'Fair',
  3: 'Average',
  4: 'Good',
  5: 'Excellent',
};

type Menu = {
  name: string;
  value: 'workload' | 'difficulty' | 'teachingStaff';
};

export const menuOptions: Menu[] = [
  { name: 'Weekly Workload', value: 'workload' },
  { name: 'Content Diffulty', value: 'difficulty' },
  { name: 'Teaching Staff', value: 'teachingStaff' },
];

export const semesters = [
  'Semester 1 - AY2021/2022',
  'Semester 2 - AY2021/2022',
  'Semester 1 - AY2020/2021',
  'Semester 2 - AY2020/2021',
];
export const lecturers = 'Prof Ben\nProf Seth';

export type Review = {
  name: string;
  studentNumber?: string;
  workload: keyof typeof workload;
  difficulty: keyof typeof difficulty;
  teachingStaff: keyof typeof teachingStaff;
  review: string;
};

export const reviews: Review[] = [
  {
    name: 'Alice',
    studentNumber: undefined,
    workload: 1,
    difficulty: 2,
    teachingStaff: 1,
    review: 'Bad module! Please DO NOT TAKE!',
  },
  {
    name: 'Bob',
    studentNumber: undefined,
    workload: 1,
    difficulty: 3,
    teachingStaff: 3,
    review: 'Not bad Module!',
  },
  {
    name: 'Charlie',
    studentNumber: undefined,
    workload: 2,
    difficulty: 4,
    teachingStaff: 1,
    review: 'Good module! MUST TAKE!',
  },
  {
    name: 'David',
    studentNumber: undefined,
    workload: 5,
    difficulty: 3,
    teachingStaff: 5,
    review: "I'm so blur!",
  },
];
