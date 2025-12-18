const fs = require('fs');

// I have created the Promisified version of readFile function


const resolve = (data) => {  
    console.log(data);
}

const readFilePromisified = (fileName) => {
    return new Promise((resolve) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        resolve(data);
    })
    }   
    );
}

function callback(contents) {
    console.log(`if you seet it in here which means it's better =  ${contents}`);
}


readFilePromisified('hey.txt')
    .then(callback);


