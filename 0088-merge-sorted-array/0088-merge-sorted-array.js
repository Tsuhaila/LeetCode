/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
 let last=m+n-1
 let p1=m-1
 let p2=n-1
 while(p1>=0 && p2>=0){
    if(nums1[p1]<nums2[p2]){
        nums1[last]=nums2[p2]
        p2--
    }else{
        nums1[last]=nums1[p1]
        p1--
    }
    last--
 }
 while(p2>=0){
    nums1[last]=nums2[p2]
    p2--
    last--
 }
};