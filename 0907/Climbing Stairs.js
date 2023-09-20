var climbStairs = function (n) {

    if (n < 2) {
        return 1;
    }

    let step1 = 1
    let step2 = 1
    let step3 = 0;

    for (let i = 2; i <= n; i++) {

        step3 = step1 + step2;
        console.log(step1)

        step1 = step2;

        step2 = step3;
    }
    return step3;
};


console.log(climbStairs('4'))