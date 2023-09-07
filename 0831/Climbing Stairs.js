var climbStairs = function (n) {
    let step1 = 1
    let step2 = 2
    if (n <= 1) {
        return 1
    }
    else if (n <= 2) {
        return 2
    } else {
        console.log((Math.floor(n / 2) ** Math.floor(n / 2)))

        return 1 + (Math.floor(n / 2) ** Math.floor(n / 2) * (n % 2))

        c

    }



};


console.log(climbStairs('5'))