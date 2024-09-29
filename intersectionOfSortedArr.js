var intersect = function(nums1, nums2) {
    let arr=[]
    for(let num of nums1){
        if(nums2.includes(num)){
            arr.push(num)
            let ind=nums2.indexOf(num)
            nums2.splice(ind,1)
        }
    }
     return arr    
};  
nums1 = [1,2,2,1]
 nums2 = [2,2]
 console.log(intersect(nums1,nums2))