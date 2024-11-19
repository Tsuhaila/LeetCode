public class Solution {
    public int LengthOfLastWord(string s) {
        var str=s.Trim().Split(' ').Reverse().ToArray();
        int len=str[0].Length;
        return len;

    }
}