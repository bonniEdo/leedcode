const head = [1, 1]

var deleteDuplicates = function (head) {
    const n = head.length
    let newHead = []
    for (i = 0; i < n; i++) {
        if (head[i + 1] !== head[i]) {
            newHead.push(head[i])
        }

    }


    return newHead

};

console.log(deleteDuplicates(head))