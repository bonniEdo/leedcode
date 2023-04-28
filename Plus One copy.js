/**
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]

var plusOne = function (digits) {
    let target = ''
    let newArr = []

    for (i = digits.length - 1; i < digits.length; i--) {
        if (digits[i] === 9) {
            target = i
            //digits[i - 1] === 1 && digits[i] === 0
            newArr = digits[i - 1] === 1 && digits[i] === 0
            console.log(newArr)



        } else {
            newArr = digits[i] + 1
        }

        return newArr
    }




};

console.log(plusOne(digits))