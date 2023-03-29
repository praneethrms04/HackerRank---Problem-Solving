//////....... TimeConversion  ..........///////////

// ------- Approach 1 ------- //

const str = "07:05:45PM";
/**
 * 07:05:45PM
 * slice the last two chars => 07:05:45PM => we get AM or PM
 * 07:05:45PM
 * slice the last two character of string and convert to array using split with help of " : "
 */

const TimeConversion = (str) => {
  let AMPM = str.slice(-2);
  let arr = str.slice(0, -2).split(":");
  console.log(arr)
  if (AMPM === "AM" && arr[0] === "12") {
    arr[0] == "00";
  } else if (AMPM === "PM") {
    arr[0] = (arr[0] % 12) + 12;
  }
  console.log(arr.join(":"));
};

TimeConversion(str);
