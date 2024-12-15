function cenzura(forbiddenWords, sentence) {
    const censoredSentence = sentence.split(' ').map(word => 
        forbiddenWords.includes(word) ? '*'.repeat(word.length) : word
    ).join(' ');
    return censoredSentence;
}

// Przykład
console.log(cenzura(['Ala', 'kota'], 'Ala ma kota i psa')); 
