function plusMinus(arr) {
    let positiveValNumber = 0, negativeValNumber = 0, zeroValNumber = 0,
    total = arr.length
    
    arr.forEach(v =>{
        if (v > 0) {
            positiveValNumber++
        } else if(v < 0) {
            negativeValNumber++
        } else if (v == 0) {
            zeroValNumber++
        }
    })
    
    const positiveRatio = (positiveValNumber/total).toFixed(6)
    const negativeRatio = (negativeValNumber/total).toFixed(6)
    const zeroRatio = (zeroValNumber/total).toFixed(6)

    console.log(positiveRatio)
    console.log(negativeRatio)
    console.log(zeroRatio)
}