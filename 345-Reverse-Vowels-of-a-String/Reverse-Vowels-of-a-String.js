/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(["A","a","E","e","I","i","O","o","U","u"]);
    let splitString = s.split("");
    
    let i = 0;
    let j = splitString.length - 1;
    
    while (i < j) {
        while (!vowels.has(splitString[i]) && i < j) {
            i += 1;
        }
        
        while (!vowels.has(splitString[j]) && i < j) {
            j -= 1;
        }
        
        if (i < j) {
            let swapValue = splitString[i];
            splitString[i] = splitString[j];
            splitString[j] = swapValue;
            i += 1;
            j -= 1;
        }
    }
    
    joinedString = splitString.join("");
    
    return joinedString;
};