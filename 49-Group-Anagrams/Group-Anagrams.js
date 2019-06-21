/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let mapping = {};
    let output = [];
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let sorted = str.split('').sort().join('');
        
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }
    
    for (let arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
};