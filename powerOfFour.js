var isPowerOfFour = function(n) {
    while(n>1){
        if(n%4!==0)
        return false
        n=n/4
    }
    return n==1
    
};
n = 16
console.log(isPowerOfFour(n))