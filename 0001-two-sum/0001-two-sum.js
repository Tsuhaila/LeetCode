
function twoSum(nums, target) {
    a=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                a.push(i,j)
            }
        }
    }
    return a

    
};
console.log(twoSum([2,7,11,15],9))