/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums = [1, 3, 5, 6]

var searchInsert = function (nums, target) {
    for (i = 0; i <= nums.length; i++) {
        if (nums[i] === target) {
            console.log(nums[i])
            return i

        } else if (nums[i] < target && i + 1 === nums.length) {
            console.log()
            return i + 1
        } else if (nums[i] > target) {
            return i

        }


    }





};

console.log(searchInsert(nums, 7))