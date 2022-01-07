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
    workload: 4,
    difficulty: 2,
    teachingStaff: 4,
    review:
      "This module covers the basics of database systems and covers topics like relational algebra, SQL (specifically PostgreSQL), and normal forms (this last one is basically a way to make 'good' databases). I found the content interesting although normal forms lost me a bit towards the end. I wouldn't say any of these topics are particularly difficult or confusing though, if you've gotten through CS2030S/CS2040S then you'll do fine here, too. I also think the content is useful since databases are ubiquitous in CS jobs so it's vital to have some basic knowledge of them.\r\n\r\nLectures would have profs go through the topics and explain all the definitions and important concepts, with plenty of examples for support. I enjoyed these lectures and I think the profs did a great job in explaining the concepts well and making them easily understandable. In the forums, the profs are also helpful and quick in responding to questions and clarifying misunderstandings, especially when it comes to the group project.\r\n\r\nWe also had tutorial worksheets every week that we'd cover in the tutorial with our TA. These were your standard CS tutorials. It's a good way to test your knowledge by practicing problems and clarifying things with your tutor.",
  },
  {
    name: 'Bob',
    studentNumber: undefined,
    workload: 4,
    difficulty: 3,
    teachingStaff: 5,
    review:
      "It baffles me why this is not a compulsory module. If possible, take this as well as CS3223 (offered in semester 2 only). They are super useful.\r\n\r\nI don't have much to review, the posts below have already covered in great details. One thing, though: the project is super tedious. Until they fix the project component, do not try to tank this if your workload is already heavy. Ensure that you have prior experience, are a quick learner, or are blessed enough to have a good team.\r\n\r\nThe module can be difficult at first but after a while it is very intuitive.\r\n\r\nLectures would have profs go through the topics and explain all the definitions and important concepts, with plenty of examples for support. I enjoyed these lectures and I think the profs did a great job in explaining the concepts well and making them easily understandable. In the forums, the profs are also helpful and quick in responding to questions and clarifying misunderstandings, especially when it comes to the group project.\r\n\r\nWe also had tutorial worksheets every week that we'd cover in the tutorial with our TA. These were your standard CS tutorials. It's a good way to test your knowledge by practicing problems and clarifying things with your tutor.",
  },
  {
    name: 'Charlie',
    studentNumber: undefined,
    workload: 5,
    difficulty: 4,
    teachingStaff: 3,
    review:
      'This module covers mainly relational databases, including entity relationship diagram, SQL queries, database normalization etc. It serves as a good introduction to RDBMS and has great practical usage for students from non-CS major but will be working with databases for future work. PostgreSQL is used but there can be certain syntax differences between lecture notes and PostgreSQL because the textbook used is not based on postgres. If you encounter such issues, do clarify with lecturers on what to do in exams.\r\nTriggers and functions in SQL are also covered but not tested. NoSQL databases are discussed in the last few lectures but not tested as well.',
  },
  {
    name: 'David',
    studentNumber: undefined,
    workload: 5,
    difficulty: 3,
    teachingStaff: 5,
    review:
      'Ahh.. Query languages. Overall I would say the module is not too hard, it\u2019s mostly common sense and whether you can get logic right. Even some questions have a standard way of answering.\r\n\r\nThe topics on Functional Dependencies and Normalization are also not too hard to grasp.\r\n\r\nLecture \u2013 Stephane Bressan\u2018s accent might catch you unprepared but overall it\u2019s quite alright.',
  },
  {
    name: 'E',
    studentNumber: undefined,
    workload: 5,
    difficulty: 3,
    teachingStaff: 5,
    review: '',
  },
  {
    name: 'F',
    studentNumber: undefined,
    workload: 3,
    difficulty: 2,
    teachingStaff: 3,
    review: '',
  },
  {
    name: 'G',
    studentNumber: undefined,
    workload: 4,
    difficulty: 1,
    teachingStaff: 4,
    review: '',
  },
  {
    name: 'H',
    studentNumber: undefined,
    workload: 3,
    difficulty: 2,
    teachingStaff: 4,
    review: '',
  },
  {
    name: 'I',
    studentNumber: undefined,
    workload: 3,
    difficulty: 4,
    teachingStaff: 4,
    review: '',
  },
  {
    name: 'J',
    studentNumber: undefined,
    workload: 4,
    difficulty: 4,
    teachingStaff: 4,
    review: '',
  },
  {
    name: 'K',
    studentNumber: undefined,
    workload: 3,
    difficulty: 2,
    teachingStaff: 5,
    review: '',
  },
  {
    name: 'L',
    studentNumber: undefined,
    workload: 3,
    difficulty: 3,
    teachingStaff: 5,
    review: '',
  },
  {
    name: 'M',
    studentNumber: undefined,
    workload: 4,
    difficulty: 4,
    teachingStaff: 5,
    review: '',
  },
  {
    name: 'N',
    studentNumber: undefined,
    workload: 5,
    difficulty: 5,
    teachingStaff: 2,
    review: '',
  },
  {
    name: 'O',
    studentNumber: undefined,
    workload: 1,
    difficulty: 1,
    teachingStaff: 5,
    review: '',
  },
  {
    name: 'P',
    studentNumber: undefined,
    workload: 2,
    difficulty: 4,
    teachingStaff: 5,
    review: '',
  },
];
