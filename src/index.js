import {getWordCount} from "./logic";

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write("Enter text: ")
process.stdin.on('data', (text) => {
    const wordCount = getWordCount(text);
    console.log(`Number of words : ${wordCount}`);
});
