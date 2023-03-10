const twoSum = function (nums, target) {
    const init = nums.length
    const second = getLocation(nums, target)


    return [init - nums.length - 1, init - nums.length + second]
};



function getLocation(nums, target) {
    let position = undefined
    const one = nums.shift();
    nums.map((x, i) => {
        if (one + x === target) {
            position = i
        }
    });
    if (position === undefined) {
        return getLocation(nums, target)
    }

    return position

};



// const nums = [6, 1, 3];
// const num1 = nums.shift();
// console.log(num1)

console.log(twoSum([6, 1, 3], 9
))
