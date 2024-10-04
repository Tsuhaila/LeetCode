var isMonotonic = function(nums) {
    let isIncreasing = true;
    let isDecreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            isDecreasing = false;
        }
        if (nums[i] < nums[i - 1]) {
            isIncreasing = false;
        }
    }

    return isIncreasing || isDecreasing;
}
nums = [1,2,2,3]
console.log(isMonotonic(nums))