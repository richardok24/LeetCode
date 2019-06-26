/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let i = 0, sign = 1, integer = 0;
    let upperBound = Math.pow(2,31) - 1;
    let lowerBound = Math.pow(-2,31);
    
    while (str.charAt(i) == ' ') {
        i++;
    }
    
    if (str.charAt(i) == '+') {
        i++;
    } else if (str.charAt(i) == '-') {
        sign = -1;
        i++;
    }
    
    while (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
        integer = integer * 10 + (str.charAt(i) - '0');
        
        if (sign * integer >= upperBound) {
            return upperBound;
        } else if (sign * integer <= lowerBound) {
            return lowerBound;
        }
        
        i++;
    }
    
    return sign * integer;
};