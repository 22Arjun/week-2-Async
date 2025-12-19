const fs = require('fs');

// I have created the Promisified version of the setTimout function

const setTimeoutPromisified = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

const callback = () => {
    console.log('its the time');
}

setTimeoutPromisified(3000).then(callback);



