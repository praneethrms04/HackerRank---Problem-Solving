//////....... StairCase  ..........///////////

// ------- Approach 1 -------- //

const n = 6;

const solution1 = (n) => {
  let hash;
  for (let i = 1; i <= n; i++) {
    hash = "";
    // space :
    for (let j = 0; j < n - i; j++) {
      hash += " ";
    }
    for (let k = 0; k < i; k++) {
      hash += "#";
    }
    console.log(hash);
  }
};
solution1(n);

// ------- Approach 2 -------- //

const solution2 = (n) => {
  let space = n - 1;
  for (let i = 0; i < n; i++) {
    console.log(`${" ".repeat(space)} ${"#".repeat(i + 1)}`);
    space--
  }
};
solution2(n);
let m = 3;

