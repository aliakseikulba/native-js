const numbers = [1, 2, 3, 24, 5];

// numbers.reduce((acc, next) => {return acc + el}, 0)

const total = numbers.reduce((acc, el) => acc + el, 0);
console.log(total);

const maxValue = numbers.reduce((acc, el) => acc > el ? acc : el);
console.log(maxValue);



let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100
  }
];


const totalStudentsScore = students.reduce((acc, el) => acc + el.scores, 0);
console.log(totalStudentsScore);

const studentsWithTopScore = students.reduce((acc, el) => {
  if (el.scores > 90) {
    acc.push(el.name)
  }
  return acc
}, []);
console.log(studentsWithTopScore);