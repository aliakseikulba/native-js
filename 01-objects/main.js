const yo = 'yo';

const student = {} //new Object, Object.assign, Object create

const bob = {
  name: 'Bob',
  age: 23,
  isStudent: true,
  friends: ['Jack', 'Paul']
}

// const bobKeys = Object.keys(bob);
// console.log(bobKeys);

// const copyBob = {...bob};

// for (let i = 0; i < bobKeys.length; i++) {
//   copyBob[bobKeys[i]] = bob[bobKeys[i]];
// }
//

const copyBob = {...bob, friends:[...bob.friends]};

console.log(copyBob);
console.log(bob === copyBob); //false
copyBob.name = 'Alex';
console.log(copyBob);
bob.friends.push('Helga');
console.log(bob);


const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 120
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 85
  },
  {
    name: "Michel",
    age: 20,
    isMarried: false,
    scores: 89
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 75
  }
]

const helloFunc = st => `Hello, I'm ${st.name}, I have ${st.scores} scores`;

const helloStudent = students.map(helloFunc);
console.log(helloStudent);

const copyStudents = students.map(st => ({...st}));
console.log(copyStudents);

