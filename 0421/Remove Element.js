/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const nums = [0, 1, 2, 2, 3, 0, 4, 2]

var removeElement = function (nums, val) {
    let Arr = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            Arr.push(nums[i])
            console.log(Arr)
            // console.log(nums)
        }

    }
    for (j = 0; j < nums.length; j++) {
        nums[j] = Arr[j];
    }
    return Arr


};


removeElement(nums, 2)