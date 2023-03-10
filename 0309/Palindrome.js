/**
 * @param {number} x
 * @return {boolean}
 */

// if (x < 0) {
//     return false
// } else {
//     const arr = String(x).split('').map((x) => {
//         return Number(x)

//     }).reverse().join('');
//     console.log(arr)
//     if (x === arr) {
//         return true
//     } else {
//         return false
//     }

// }
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    } else {
        const arr = Number(String(x).split('').reverse().join(''));

        if (x === arr) {
            return true
        } else {
            return false
        }
    }
};

console.log(isPalindrome(121))