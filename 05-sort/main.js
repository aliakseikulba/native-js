//bubble sort
const arr = [1, 23, 0, 45, 642, 678, 12, 34];
for (let j = 0; j < arr.length - 1; j++) {
  for (let i = 0; i < arr.length - 1 - j; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}

// for (let j = 0; j < arr.length - 1; j++) {
//   for (let i = 0; i < arr.length - 1 - j; i++) {
//     if (arr[i] > arr[i +1]) {
//       let temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp
//     }
//   }
// }
console.log(arr);


//arr.sort()
const names = ['Bob', 'Alex', 'Nick', 'Donald', 'Joe', '999', '!alex', 'Юрий', 'юрий'];
console.log(names.sort());

const nums = [32, 12, 17, 111, 63, 98, 500, 10, 435, 1]
// const compareFn = (a,b) => {
//   if(a > b) {
//     return 1
//   } else {
//     return -1
//   }
// }
// const compareFn = (a,b) => b-a
console.log(nums.sort((a,b) => a - b));