//////....... Compare the Triplets ..........///////////

// ------- Approach 1 -------- //

const solution1 = (arr1, arr2) => {
  let alice = 0;
  let bob = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) alice++;
    else if (arr1[i] < arr2[i]) bob++;
  }
  console.log([alice, bob]);
};

const arr1 = [17, 28, 30];
const arr2 = [99, 16, 8];
solution1(arr1, arr2);
