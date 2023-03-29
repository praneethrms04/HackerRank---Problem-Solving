//////....... A Very Big Sum ..........///////////

// ------- Approach 1 -------- //

function solution1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
solution1(arr);

// ------- Approach 2 -------- //

function solution2(arr) {
  let sum = arr.reduce((acc, val) => acc + val);
  console.log(sum);
}
solution2(arr);

// ------- Approach 3 using for of loop-------- //

function solution3(arr) {
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  console.log(sum);
}
solution3(arr);
