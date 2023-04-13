const I = 1
const V = 5
const X = 10
const L = 50
const C = 100
const D = 500
const M = 1000
var romanToInt = function (s) {
    const countI = (String(s).split('').filter(x => x === "I").length)
    const countL = (String(s).split('').filter(x => x === "L").length) * 50
    const countV = (String(s).split('').filter(x => x === "V").length) * 5
    const countM = (String(s).split('').filter(x => x === "M").length) * 1000
    const countC = (String(s).split('').filter(x => x === "C").length) * 100
    const countD = (String(s).split('').filter(x => x === "D").length) * 500
    const countX = (String(s).split('').filter(x => x === "X").length) * 10
    let countIV = 0
    let countIX = 0
    let countXL = 0
    let countXC = 0
    let countCD = 0
    let countCM = 0

    if (s.includes('IV')) {
        countIV = -2
    }
    if (s.includes('IX')) {
        countIX = -2
    }
    if (s.includes('XL')) {
        countXL = -20

    }
    if (s.includes('XC')) {
        countXC = -20
    }
    if (s.includes('CD')) {
        countCD = -200
    }
    if (s.includes('CM')) {
        countCM = -200

    }

    return (countI + countL + countV + countM + countC + countD + countX + countIV + countIX + countXL + countXC + countCD + countCM)

};
console.log(romanToInt("DCXXI"))