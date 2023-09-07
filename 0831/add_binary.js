/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */


var addBinary = function (a, b) {
    const i = a.length
    const j = b.length
    let arrA = a.split('').map(Number)
    // console.log(arrA)
    let arrB = b.split('').map(Number)
    // console.log(arrB)

    const maxLength = Math.max(i, j)
    console.log(maxLength)
    while (arrA.length < maxLength) {
        arrA.unshift(0);
    }
    // console.log(arrA.unshift(0))
    // console.log(arrA)
    while (arrB.length < maxLength) {
        arrB.unshift(0);
    }
    let plus = 0
    let result = []
    for (let k = maxLength - 1; k >= 0; k--) {
        const sum = arrA[k] + arrB[k] + plus;

        plus = Math.floor(sum / 2)  //無條件取 <= 最大整數
        // console.log(plus)

        result.unshift(sum % 2)   //餘數
    }
    if (plus) {
        result.unshift(plus)
    }
    return result.join('');  //回傳成字串

}

console.log(addBinary("110", "1011"))