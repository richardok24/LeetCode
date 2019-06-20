/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	// Replace \W: non-word charactors with empty string
    let strippedString = s.replace(/\W/g, '');
	
	// Reverse
    let reversedString = strippedString.split('').reverse().join('');
    
	// Compare
    return reversedString.toLowerCase() === strippedString.toLowerCase();
};