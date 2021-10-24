const students = [
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




//======= map
const names = students.map(s => s.name);
console.log(names);

function myMap(array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = fn(array[i])
  }

  return result;
}


console.log(students.map(st => {
  if (st.name === 'Nick') {
    return {...st, isMarried:true};
  } else {
    return st;
  }
}))

const newStudents = students.map(s => ({...s}));
newStudents[0].name = 'Mike';
console.log(students);
console.log(newStudents); //deep copy


//======= filter
const adults = students.filter(s => s.age >= 21);
console.log(adults);

const myFilter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
   if (fn(arr[i])) {
     result.push(arr[i]);
   }
  }
  return result;
}

console.log(myFilter(students, s => s.age >= 21));


//======= find
console.log(students.find(s => s.name === 'Bob'));

function myFind(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return arr[i];
    }
  }
}

console.log(myFind(students, s => s.name === 'Bob'));