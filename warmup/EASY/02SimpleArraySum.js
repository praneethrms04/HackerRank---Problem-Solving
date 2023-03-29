//////.......Simple  Array Sum ..........///////////

// ------- Approach 1 -------- //

function solution1(arr) {
  let sum = 0;
  for (let ele of arr) {
    sum += ele;
  }
  console.log(sum);
}
solution1([1, 2, 3, 4, 10, 11]);

// ------- Approach 2 -------- //

function solution2(arr) {
  return arr.reduce((acc, value) => acc + value);
}
console.log(solution2([1, 2, 3, 4, 10, 11]));
