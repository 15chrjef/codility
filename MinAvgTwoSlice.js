function solution(A) {
    var min = Infinity;
    var minI = 0;
    A.forEach((val, i) => {
        var firstHalf = A.slice(i, i + 2)
        var secondHalf = A.slice(i + 1, i + 3 )
        var fVal = (firstHalf[0] + firstHalf[1])/2
        var sVal = (secondHalf[0] + secondHalf[1])/2 || Infinity;
        var realVal = (firstHalf[0] + firstHalf[1] + secondHalf[1])/3
        if( realVal < fVal ){
            // console.log('asdfasd')
            if( min > realVal){
                min = realVal
                minI = i;
            }
        } else {
            if(fVal < min){
                min = fVal
                minI = i;
            }
        }
    })
  
    return minI
}
