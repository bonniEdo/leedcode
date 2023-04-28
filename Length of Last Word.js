/**
 * @param {string} s
 * @return {number}
 */
const s = "   fly me   to   the moon  "
var lengthOfLastWord = function (s) {
    const words = s.split(' ')
    let target = ''
    console.log(words)
    // console.log(words.length)
    for (i = 0; i < words.length; i++) {
        if (words[i] !== '') {
            target = words[i]


        }

    }

    return target.length



};


console.log(lengthOfLastWord("   fly me   to   the moon  "))