let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let lineIndex = 0
let firstString = []
let secondString = []

rl.on('line', function (line) {

    if (lineIndex == 0) {

        firstString = line.split('').sort()
        lineIndex += 1

    } else {

        secondString = line.split('').sort()

        for (let i = 0; i < secondString.length; i++) {
            if (!firstString[i] || firstString[i] != secondString[i]) {
                console.log(secondString[i])
                rl.close()
                return
            }
        }

    }
})