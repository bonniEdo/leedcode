const nums1 = [0]
const m = 3
const nums2 = [2]
const n = 3

var merge = function (nums1, m, nums2, n) {

    let newArr = []
    for (i = 0; i < m; i++) {
        newArr.push(nums1[i])
    }
    for (j = 0; j < n; j++) {
        newArr.push(nums2[j])
    }
    newArr = newArr.sort()
    nums1 = newArr.filter(item => item !== 0 && item !== undefined);
    return nums1
}
console.log(merge(nums1, m, nums2, n)) 