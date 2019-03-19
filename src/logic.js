export function getWordCount(text) {
    const changedText = removeNewCarrier(text);
    const splitTextIntoWords = getSplitText(changedText);
    return filterWordsContainingLetters(splitTextIntoWords).length;
}

function removeNewCarrier(text) {
    return text.replace(/(\r\n|\r|\n)/g, " ");
}

function getSplitText(text) {
    return text.split(" ");
}

function filterWordsContainingLetters(arrayOfText) {
    return arrayOfText.filter((word) => RegExp(/^[a-zA-Z]+$/g).test(word));
}
