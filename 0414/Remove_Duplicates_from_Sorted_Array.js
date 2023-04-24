/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
var removeDuplicates = function (nums) {
    if (!nums.length) {
        return 0
    }
    let Arr = [nums[0]];
    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            Arr.push(nums[i]);
        }
    }
    for (j = 0; j < nums.length; j++) {
        nums[j] = Arr[j];
    }
    console.log(nums)
    // console.log(Arr.length)
    return (Arr.length)




}


removeDuplicates(nums)