var isAnagram = function (s, t) {
    s = s.split("").sort()
    t = t.split("").sort()

    if (s.length !== t.length)
        return false;
    for (i = 0; i < s.length; i++) {
        if (s[i] !== t[i])
            return false
    }
    return true

};
s = "anagram"
t = "nagaram"
console.log(isAnagram(s,t))