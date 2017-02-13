// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    var aArray = [];
    var cArray = [];
    var gArray = [];
    var DNAObj = {}
    for(var i = 0; i < S.length; i++){
       DNAObj.A = 0;
       DNAObj.C = 0;
       DNAObj.G = 0;
       DNAObj[S[i]] = 1
       aArray.push(DNAObj.A + (aArray[aArray.length -1] || 0))
       cArray.push(DNAObj.C + (cArray[cArray.length -1] || 0))
       gArray.push(DNAObj.G + (gArray[gArray.length -1] || 0))
    }
    // console.log(aArray, cArray, gArray)
    var returnArray = [];
    for(var j = 0; j < P.length; j++){
        var start = P[j]
        var end = Q[j]
        // console.log('start',cArray[start], cArray[start -1])
        if((aArray[start] - aArray[end]) !== 0 || aArray[start] > (aArray[start -1] || 0)){
            returnArray.push(1)
        } else if((cArray[start] - cArray[end]) !== 0 || cArray[start] > (cArray[start -1] || 0)){
            returnArray.push(2)
        } else if((gArray[start] - gArray[end]) !== 0 || gArray[start] > (gArray[start -1] || 0)){
            returnArray.push(3)
        } else {
            returnArray.push(4)
        }
    }
    // console.log(returnArray)
    return returnArray
}
