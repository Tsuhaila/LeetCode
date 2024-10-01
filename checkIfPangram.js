var checkIfPangram = function(sentence) {
    arr=new Set(sentence.split(''))
    return [...arr].length===26
};
sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram(sentence))