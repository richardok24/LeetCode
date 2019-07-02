/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    
    if (strs == null || strs.length == 0) {
        return '';
    }
    
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && strs[i][j] == prefix[j]) {
            j++;
        }
        
        if (j == 0) {
            return '';
        }
        
        prefix = prefix.substring(0, j);
    }
    
    return prefix;
};