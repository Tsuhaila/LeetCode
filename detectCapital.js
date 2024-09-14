var detectCapitalUse = function (word) {
    if (word === word.toUpperCase() || word === word.toLowerCase() || word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
        return true
    } else {
        return false
    }

};
word="USA"
console.log( detectCapitalUse(word));
