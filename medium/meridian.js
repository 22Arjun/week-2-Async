//Extracting the Current Time
const now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();

let meridian = 'AM';
hours >= 12 ? meridian = 'PM' : meridian = 'AM'

hours = hours % 12;



const format = (num) => {
    return num < 10 ? `0${num}` : num;
}


console.log(`${format(hours)} : ${format(minutes)} : ${format(seconds)} ${meridian}`);

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
        hours === 24 ? hours = 0 : hours ++
    }

    console.log(`${format(hours)} : ${format(minutes)} : ${format(seconds)} ${meridian}`);

}, 1000)

