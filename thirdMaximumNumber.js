var thirdMax = function(nums) {
    arr=Array.from(new Set(nums.sort((a,b)=>b-a))) 
    if(arr.length<3){
        return Math.max(...arr)
    }else{
        return arr[2]
    }
};
nums = [3,2,1]
console.log(thirdMax(nums))