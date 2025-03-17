import * as readline from 'readline/promises';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
try {
    // NOTE: the second parameter (the timeout) is optional.
    const answer = await rl.question('Run tester? [y/n] ', {
        signal: AbortSignal.timeout(10_000) // 10s timeout
    });
    switch (answer.toLowerCase()) {
        case 'y':
            console.log('Super!');
            break;
        case 'n':
            console.log('Sorry! :(');
            break;
        default:
            console.log('Invalid answer!');
    }
}
finally {
    rl.close();
}
