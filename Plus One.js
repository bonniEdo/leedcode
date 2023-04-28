/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [1, 2, 3]
var plusOne = function (digits) {
    const num = Number(digits.join(''))
    console.log(num)
    const new_num = (num + 1)
    console.log(new_num)
    const arr = new_num.toString().split('')
    console.log()


    return arr


};

console.log(plusOne([1, 2, 3]))