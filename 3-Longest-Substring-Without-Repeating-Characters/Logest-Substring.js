/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        while (arr.includes(s[i])) {
            arr.shift();
        }
        arr.push(s[i]);
        max = Math.max(max, arr.length);
    }
    
    return max;
};