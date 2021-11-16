const arr = [1, 23, 45, 642, 678,12, 34]


//bubble sort

for (let j = 0; j < arr.length; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i +1]) {
      let temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp
    }
  }
}
