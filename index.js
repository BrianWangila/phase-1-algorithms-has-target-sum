function hasTargetSum(array, target) {
  // Write your algorithm here


  for (let i of array){
    let j = target - i;
    if (array.includes(j)){
      return true;

    }//else{
    //   return false
    // }
      }

}

/* 
  Write the Big O time complexity of your function here


*/
//function to ad tow numbers


/* 
  Add your pseudocode here
  1. get an array of numbers as input
  2. get a second number as input
  3. Take the first number and add it to the second number
  4. return the sum of the two numbers

  or
  1. get an array of numbers as input
  2. get a second number as input
  3. take the second number and subtract one number in the array
  4 if the result is a number that is in the array, then return true
  5 else, return false


*/

/*
  Add written explanation of your solution here


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
