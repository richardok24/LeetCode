/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {};
    for (let c of s) {
        hash[c] = (hash[c] || 0) + 1;
    }
    
    let odds = 0;
    for (let c in hash) {
        odds += hash[c] % 2;
    }
    
    return s.length - odds + !!odds;
};