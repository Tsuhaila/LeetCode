var rotateString = function (s, goal) {
    if (goal.length !== s.length) return false
    let str = s + s
    return str.includes(goal)
};

s = "abcde"
goal = "cdeab"
console.log(rotateString(s, goal))