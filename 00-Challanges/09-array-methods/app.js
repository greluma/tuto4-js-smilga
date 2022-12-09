//**  Methods

//*update students
students.map((item) => {
  item.role = "students";
  //   console.log(item);
  return item;
});
// console.log(students);

//*highScores
const mejores = students.filter((item) => item.score > 80);
// console.log(mejores);

//*specificId
let idB = 2;
const specificID = students.find((item) => item.id === idB);
// console.log(specificID);

//*averageScore
const stuScore =
  students.reduce((acc, curr) => {
    acc += curr.score;
    return acc;
  }, 0) / students.length;

// console.log(stuScore);

// console.log(students);

//*survey
let surveyList = {
  math: 0,
  sports: 0,
  art: 0,
};
const survey = students.reduce((acc, curr) => {
  for (const key in surveyList) {
    if (key == curr.favoriteSubject) {
      surveyList[key]++;
    }
  }
  acc = surveyList;
  return acc;
}, {});

console.log(survey);
