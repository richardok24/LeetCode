/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// O(n)
var findTheDifference = function(s, t) {
    var letters = new Array(26).fill(0);
    
    // save
    for (let i = 0; i < s.length; i++) {
        l = s.charCodeAt(i) - 97;
        letters[l]++;
    }
    
    // check
    for (let i = 0; i < t.length; i++) {
        l = t.charCodeAt(i) - 97;
        letters[l]--;
        if (letters[l] < 0) return String.fromCharCode(l + 97);
    }
};