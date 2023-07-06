function timeConversion(s) {
    let hour = s.substring(0,2) * 1
    const rest = s.substring(2,8)
    
    let newHour = hour
    
    if(s.indexOf('PM') < 0) {
        if(hour < 10) {
            newHour = `0${hour}`
        } else if(hour == 12){
            newHour = "00"
        }
    } else {
       if(hour == 12) {
           newHour = hour
       } else {
           newHour = 12 + hour
       }
    }
    
    const time24 = `${newHour}${rest}`

    return time24
}