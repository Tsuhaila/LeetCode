var findMiddleIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
   
        for (let j = 0; j < i; j++) {
            leftSum += nums[j];
        }
        
        for (let k = i + 1; k < nums.length; k++) {
            rightSum += nums[k];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
nums = [2,3,-1,8,4]
console.log(findMiddleIndex(nums))