var findPeaks = function(mountain) {
    let arr=[]
    for(i=0;i<mountain.length;i++){
        if(mountain[i]>mountain[i+1]&&mountain[i]>mountain[i-1]){
             arr.push(i)
        }
    }
    return arr
};
mountain = [2,4,4]
console.log(findPeaks(mountain))