const difficulty = {1: "Very Easy", 2: "Easy", 3: "Moderate", 4: "Hard", 5: "Very Hard"};
const workload = {1: "0-4 hrs", 2: "5-8 hrs", 3: "9-12 hrs", 4: "13-16 hrs", 5: "17+ hrs"};
const teachingStaff = {1: "Not Good", 2: "Below Average", 3: "Average", 4: "Good", 5: "Excellent"};

const semesters = ["Semester 1 - AY2021/2022", "Semester 2 - AY2021/2022",
    "Semester 1 - AY2020/2021", "Semester 2 - AY2020/2021"];
const lecturers = "Prof Ben\nProf Seth";

type Review = {
  name: string;
  studentNumber?: string;
  workload: keyof typeof workload;
  difficulty: keyof typeof difficulty;
  teachingStaff: keyof typeof teachingStaff;
  review: string;
}

const reviews: Review[] = 
[{
  name: "Alice",
  studentNumber: undefined,
  workload: 1,
  difficulty: 2,
  teachingStaff: 1,
  review: "Bad module! Please DO NOT TAKE!"
},
{
  name: "Bob",
  studentNumber: undefined,
  workload: 1,
  difficulty: 3,
  teachingStaff: 3,
  review: "Not bad Module!"
},
{
  name: "Charlie",
  studentNumber: undefined,
  workload: 2,
  difficulty: 4,
  teachingStaff: 1,
  review: "Good module! MUST TAKE!"
},
{
  name: "David",
  studentNumber: undefined,
  workload: 1,
  difficulty: 3,
  teachingStaff: 5,
  review: "I'm so blur!"
}];