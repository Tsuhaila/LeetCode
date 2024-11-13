public class Solution {
    public int SingleNumber(int[] nums) {
        int num=0;
        foreach(int i in nums){
            if(Array.IndexOf(nums,i)==Array.LastIndexOf(nums,i)){
                num=i;
            }
        }
        return num;
    }
}