//////....... MinMaxSum  ..........///////////

// ------- Approach 1 -------- //

const arr = [1, 2, 3, 4, 5];

const solution1 = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = arr.reduce((prev, curr) => prev + curr);
  console.log(sum - max, sum - min);
};

solution1(arr);

// ------- Approach 2 -------- //

const solution2 = (arr) => {
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    max += arr[j];
  }
  console.log(min, max);
};

solution2(arr);

// ------- Approach 3 -------- //

const solution3 = (arr) => {
  arr.sort((a, b) => a - b);
  let maxSum = arr.slice(1, 5).reduce((prev, curr) => prev + curr);
  let minSum = arr.slice(0, 4).reduce((prev, curr) => prev + curr);
  console.log(minSum, maxSum);
};

solution3(arr);

// ------- Approach 4 -------- //

const solution4 = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let ele of arr) {
    if (ele < min) min = ele;
    if (ele > max) max = ele;
    sum += ele;
  }
  console.log(sum - max, sum - min);
};

solution4(arr);
