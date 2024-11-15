/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
   let count=0
   for(let i=1;i<=num;i++){
    let str=i.toString()
    let sum=0
    for(let j=0;j<str.length;j++){
        sum+=Number(str[j])
    }
    if(sum%2===0){
        count++
    }
   }
   return count
};