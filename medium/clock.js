// can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)



//Extracting the Current Time
const now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
console.log(`${hours} : ${minutes} : ${seconds}`);


const format = (num) => {
    return num < 10 ? `0${num}` : num;
}

const time = setInterval(() => {
    if(seconds < 59) {
        seconds++
    }
    else {
        seconds = 0;
        minutes++;
    }

    if(minutes === 60) {
        minutes = 0;
        hours === 24 ? hours = 0 : hours++;
    }

    console.log(`${format(hours)} : ${format(minutes)} : ${format(seconds)}`);

}, 1000)





