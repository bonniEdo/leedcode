const p = [1, 2, 1]
const q = [1, 1, 2]


var isSameTree = function (p, q) {
    let n = p.length
    let m = q.length

    if (n === m) {
        for (i = 0; i < n; i++) {
            if (p[i] === q[i]) {

                // console.log(p[i])
                // console.log(q[i])

            } else {
                return false
            }
        }
    } else {
        return false
    }
    return true
};



console.log(isSameTree(p, q))