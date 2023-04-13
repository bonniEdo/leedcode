/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) {
        return false
    }

    s = s.split('')
    const temp = []
    let result = []
    s.forEach((e, i) => {

        if (['{', '[', '('].includes(e)) {
            temp.push(e)
            console.log(temp)
        } else {
            const temp2 = temp.pop()
            if (temp2 === undefined) {
                result = false
            }
            if (temp2 === '(' && e !== ')') {
                result = false
                console.log(e)
            }
            if (temp2 === '[' && e !== ']') {
                result = false
            }
            if (temp2 === '{' && e !== '}') {
                result = false
            }

        }


    })
    if (temp.length !== 0 || result === false) {
        return false
    }
    return true

}

console.log(isValid('))'))




