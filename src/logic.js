import {specialWords} from "./constants";

export function getWordCount(text) {
    const changedText = removeNewCarrier(text);
    const splitTextIntoWords = getSplitText(changedText);
    const filterSpecialWords = filterSpecialWord(splitTextIntoWords);
    return filterWordsContainingLetters(filterSpecialWords).length;
}

function removeNewCarrier(text) {
    return text.replace(/(\r\n|\r|\n)/g, " ");
}

function getSplitText(text) {
    return text.split(" ");
}

function filterSpecialWord(arrayOfText) {
    return arrayOfText.filter((word) => {
        return !specialWords.includes(word)
    })
}

function filterWordsContainingLetters(arrayOfText) {
    return arrayOfText.filter((word) => RegExp(/^[a-zA-Z]+$/g).test(word));
}
