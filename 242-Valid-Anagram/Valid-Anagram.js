/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 
// O(n)
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    var letters = new Array(26).fill(0);
    
    // save
    for (i = 0; i < s.length; i++) {
        l = s.charCodeAt(i) - 97;
        letters[l]++;
    }
    
    // check
    for (i = 0; i < t.length; i++) {
        l = t.charCodeAt(i) - 97;
        letters[l]--;
        if (letters[l] < 0) return false;
    }
    
    return true;
};