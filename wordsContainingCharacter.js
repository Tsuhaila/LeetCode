var findWordsContaining = function(words, x) {
    var ind=[]
    for(i=0;i<words.length;i++){
        if(words[i].includes(x)){
            ind.push(i)

        }
    }
    return ind
    
};
 words = ["leet","code"]
 x = "e"
console.log(findWordsContaining(words,x))