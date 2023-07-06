function lonelyinteger(a) {
    const unique = a.find((num) => a.indexOf(num) === a.lastIndexOf(num))
    
    return unique
}