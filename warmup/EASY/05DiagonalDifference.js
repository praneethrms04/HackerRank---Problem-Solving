//////.......Diagonal Difference ..........///////////

// ------- Approach 1 -------- //

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function solution1(arr) {
  let n = arr.length;
  let diff1 = 0;
  let diff2 = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // first diagonal :
      if (i == j) {
        diff1 += arr[i][j];
      }
      // second diagonal
      if (i == n - j - 1) {
        diff2 += arr[i][j];
      }
    }
  }
  console.log(Math.abs(diff1 - diff2));
}
solution1(arr); // T.C = O(n^2)

// ------- Approach 2 -------- //

function solution2(arr) {
  let n = arr.length;
  let d1 = 0;
  let d2 = 0;
  for (let i = 0; i < n; i++) {
    d1 += arr[i][i];
    d2 += arr[i][n - i - 1];
  }
  console.log(Math.abs(d1 - d2));
}

solution2(arr); // T.C = O(n)
