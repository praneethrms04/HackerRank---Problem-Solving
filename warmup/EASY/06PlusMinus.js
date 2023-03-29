//////.......PlusMinus ..........///////////

// ------- Approach 1 -------- //

const arr = [-4, 3, -9, 0, 4, 1];

const solution1 = (arr) => {
  let n = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let ele of arr) {
    if (ele === 0) {
      zero++;
    } else if (ele > 0) {
      pos++;
    } else {
      neg++;
    }
  }
  console.log((pos / n).toFixed(6));
  console.log((neg / n).toFixed(6));
  console.log((zero / n).toFixed(6));
};

solution1(arr);

// ------- Approach 2 -------- //

const solution2 = (arr) => {
  let pos = arr.filter((v) => v > 0);
  let neg = arr.filter((v) => v < 0);
  let zero = arr.filter((v) => v == 0);
  console.log((pos.length / arr.length).toFixed(6));
  console.log((neg.length / arr.length).toFixed(6));
  console.log((zero.length / arr.length).toFixed(6));
};
solution2(arr);
