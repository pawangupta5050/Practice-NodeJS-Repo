const fs = require('fs');

// fs.writeFileSync('./test.txt', 'This is a test file') // This is the the file created using fs, It is synchronous process

// fs.writeFile('./test.txt', 'This is a test file made asynchronously', (err) => {}) // This is the file created using fs, It is a asynchronous process

fs.readFile('./test.txt', 'utf-8', (err, result) => { // It reads the contents of the file
    if(err){
        console.log(err)
    }else {
        console.log(result)
    }
})

fs.appendFile('./test.txt', 'This is a test file\n', (err) => {}) // Append the contents after the previous

fs.cp('./test.txt', './test2.txt', (err) => {}) // Copies the contents from one file to another

fs.unlink('./test2.txt', (err) => {}) // it deletes the specified file

fs.stat('./test.txt', (err, result) => {
    if(err){
        console.log(err)
    }else {
        console.log(result)
    }
}) // it provies the logs of the file