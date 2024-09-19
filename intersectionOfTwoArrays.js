var intersection = function(nums1, nums2) {
    let arr=[]
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j]){
            arr.push(nums1[i])
            }
        }
    }
 
   return [...new Set(arr)]
  
  
};
nums1 = [1,2,2,1]
 nums2 = [2,2]
console.log(intersection(nums1,nums2))