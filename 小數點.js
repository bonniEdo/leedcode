const a = 5;
const value = a / 10;
const stringvalue = value.toString();
let leftresult = ''; // 初始化一个空字符串
let rightresult = ''; // 初始化一个空字符串

let newleftresult = ''; // 初始化一个空字符串
let newrightresult = '';
let newresult = ''
for (let left = 0; left < 7; left++) {
    leftresult += '0'; // result = result + '0'; 在每次迭代中将 "0" 添加到结果字符串。
    newleftresult += leftresult + stringvalue + '\n';
}
for (let right = 7; right > 0; right--) {
    rightresult += '0';
    // console.log(rightresult)
    newrightresult += rightresult + '\n';
}
console.log(newleftresult)
console.log(newrightresult)

newresult = (newleftresult + newrightresult)

// console.log(newresult); // 输出结果字符串
// console.log(left.toString() + (5 / 10) + right.toString())
