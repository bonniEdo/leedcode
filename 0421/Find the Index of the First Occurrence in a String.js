/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const haystack = 'hello'
var strStr = function (haystack, needle) {
    for (i = 0; i < haystack.length; i++) {
        // console.log(haystack.substring(i, needle.length + i))

        if (haystack.substring(i, needle.length + i) === needle) {
            return i

        }

    }
    return -1
};


console.log(strStr(haystack, 'll'))