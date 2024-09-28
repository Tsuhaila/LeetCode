function removeDuplicates(nums) {
    j = 1
    for (i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[j] = nums[i]
            j++
        }
    }
    return j
};
nums = [1,1,2]
console.log(removeDuplicates(nums))