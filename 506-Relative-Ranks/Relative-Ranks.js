/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    let result = [];
    let sortedArray = nums.slice();
    sortedArray = sortedArray.sort((a, b) => (b - a));
    
    for (let i = 0; i < nums.length; i ++) {
        let j = sortedArray.indexOf(nums[i]);
        
        if (j == 0) {
            result.push("Gold Medal");
        } else if (j == 1) {
            result.push("Silver Medal");
        } else if (j == 2) {
            result.push("Bronze Medal");
        } else {
            result.push((j + 1).toString());
        }
    }
    
    return result;
};