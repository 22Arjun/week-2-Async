/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// Callback Hell Approach

// setTimeout(() => {
//     console.log('1 second completed');
//     setTimeout(() => {
//         console.log('3 seconds have been completed');
//         setTimeout(() => {
//             console.log('5 seconds have been completed');
//         }, 5000);
//     }, 3000) ;
// }, 1000);

// Promisified Approach

// function setTimeoutPromisified(milliseconds) {
//     return new Promise((resolve) => setTimeout(resolve, milliseconds))
// }

// setTimeoutPromisified(1000).then(() => {
//     console.log('1 second is completed');

//     setTimeoutPromisified(3000).then(() => {
//         console.log('3 seconds have been completed');

//         setTimeoutPromisified(5000).then(() => {
//             console.log('5 seconds have been completed');
// })
// })
// })

// Making functions

function wait1(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function wait2(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function wait3(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

async function calculateTime(t1, t2, t3) {
  const startTime = Date.now();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {

    const endTime = Date.now();

    const totalTime = endTime - startTime;
    return totalTime;
  });
}
const ans = calculateTime(1000, 2000, 3000).then((data) => {
    console.log(data);

});
console.log(ans);
