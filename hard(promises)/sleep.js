/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */


const count = 872635;

function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}



 sleep(5000).then(() => {
    // This Count will get printed only when the above sleep time runs out 

       console.log(count)
    });

    











