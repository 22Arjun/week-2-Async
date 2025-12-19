//Stopwatch

const format = (value) => {
    return value < 10 ? `0${value}` : value;
}

let H = 0
let M = 0
let S = 0



console.log(`${format(H)} : ${format(M)} : ${format(S)}`)
setInterval(() => {
    
    if(S < 59) {
        S = S + 1;
        
    }
    else {
        S = 0;
        M = M + 1;
    }
    
    if(M === 60) {
        M = 0
        H = H + 1;
    }
    console.log(`${format(H)} : ${format(M)} : ${format(S)}`)
    


    
}, 1000)

