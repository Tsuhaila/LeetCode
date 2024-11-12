public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int ind=0;
        foreach(int i in nums){
            if(i!=val){
                nums[ind]=i;
                ind++;
            }
        }
        return ind;
        
    }
}