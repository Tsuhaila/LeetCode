public class Solution {
    public int ThirdMax(int[] nums) {
        List<int> list=nums.Distinct().ToList();
        list.Sort();
        if(list.Count<3){
            return list[list.Count-1];
        }else{
            return list[list.Count-3];
        }
    }
}