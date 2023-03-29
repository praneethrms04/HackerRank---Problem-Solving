//////....... BirthDay Cake Candies  ..........///////////

// ------- Approach 1  2 testcases failed-------- //

const arr = [3, 2, 1, 3, 3];

const solution1 = (arr) => {
  let set = new Set();
  let count = 1;
  for (let num of arr) {
    if (set.has(num)) {
      set.delete(set);
      count++;
    } else {
      set.add(num);
    }
  }
  //   console.log(count);
};
solution1(arr);

// ------- Approach 2 -------- //

const solution2 = (arr) => {
  let res = [];
  let hm = new Map();
  for (let ele of arr) {
    let num = hm.get(ele) + 1 || 1;
    hm.set(ele, num);
  }
  for (let [key, value] of hm) {
    res.push(value);
  }
  console.log(Math.max(...res));
};

solution2(arr);

// ------- Approach 2 -------- //

const solution3 = (arr) => {
  let max = Math.max(...arr);
  let res = arr.filter((num) => num === max).length;
  console.log(res);
  //---- or -----//
  let count = 0;
  for (let num of arr) {
    if (num === max) {
      count++;
    }
  }
  console.log(count);
};
solution3(arr);
