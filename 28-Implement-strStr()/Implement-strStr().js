/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 
// O(n^2)
var strStr = function(haystack, needle) {
    for (let i = 0; ; i++) { // The length of haystack
        for (let j = 0; ; j++) { // The length of needle
          if (j == needle.length) return i; // If at this point we have navigated through the entire length of needle, we have found a solution, haystack[i].
          if (i + j == haystack.length) return -1; // This happens when we run out of elements in haystack, but there are still elements in needle. 
          if (needle.charAt(j) != haystack.charAt(i + j)) break; // We stop comparing after needle[j], so i will be incremented and cycle repeats itself.
        }
    }
};