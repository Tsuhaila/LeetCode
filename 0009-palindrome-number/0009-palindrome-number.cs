public class Solution {
    public bool IsPalindrome(int x) {
        if(x<0){
            return false;
        };
        string str=x.ToString();
        string revStr=new string(str.Reverse().ToArray());
        
        return str==revStr;
        
    }
}