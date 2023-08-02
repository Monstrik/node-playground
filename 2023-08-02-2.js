/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log('i =', i, 'j =', j);
      // console.log(nums[i], nums[j], target);
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));
