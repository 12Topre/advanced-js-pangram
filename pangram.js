function isPangram(text) {
    // Pangram: 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    
    text = text.toLowerCase();

   
    for (let i = 0; i < alphabet.length; i++) {
        // If the letter is not found in the text, return false
        if (!text.includes(alphabet[i])) {
            return false;
        }
    }

    
    return true;
}
