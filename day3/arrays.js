/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Sort the array in descending order
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[0]) {
      // Return the second largest element
      return nums[i];
    }
  }

  // Return the second to last element
  return nums[nums.length - 2];
}

