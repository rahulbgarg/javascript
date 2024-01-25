function capitalizeFirstAndLastInEachWord(sentence) {
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length >= 2) {
            let firstChar = word.charAt(0).toUpperCase();
            let lastChar = word.charAt(word.length - 1).toUpperCase();
            words[i] = firstChar + word.slice(1, -1) + lastChar;
        }
    }

    return words.join(' ');
}

// Example usage:
let inputSentence = "how are you mate";
let result = capitalizeFirstAndLastInEachWord(inputSentence);
console.log(result);
