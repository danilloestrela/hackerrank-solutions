function miniMaxSum(arr) {  
    const copyArr = [...arr]    
    const max = arr.sort((a,b) => b-a).splice(0,4).reduce((acc, v) => v + acc, 0)
    const min = copyArr.sort((a,b) => b-a).reverse().splice(0, 4).reduce((acc, v) => v + acc, 0)
    
    
    console.log(min, max)
}