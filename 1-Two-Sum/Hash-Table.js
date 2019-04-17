/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const hashTable = {};
    
    for (let i = 0; i < nums.length; i++) {
        
        hashTable[target - nums[i]] = i;
        
        if (nums[i+1] in hashTable) {
            
            return [hashTable[nums[i+1]], i+1]
        }
    }
};