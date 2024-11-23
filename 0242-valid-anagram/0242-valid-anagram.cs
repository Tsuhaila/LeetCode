public class Solution {
    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) {
            return false;
        }

        char[] str1 = s.ToArray();
        char[] str2 = t.ToArray();
        Array.Sort(str1);
        Array.Sort(str2);

        for (int i = 0; i < str1.Length; i++) {
            if (str1[i] != str2[i]) {
                return false;
            }
        }

        return true; 
    }
}
