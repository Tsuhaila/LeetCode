public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        List<int>nums=new List<int>();
        for(int i=0;i<nums1.Length;i++){
            for(int j=0;j<nums2.Length;j++){
                if(nums1[i]==nums2[j]){
                    if(!nums.Contains(nums1[i])){
                    nums.Add(nums1[i]);
                    }
                }
            }
        }
        return nums.ToArray();
    }
}