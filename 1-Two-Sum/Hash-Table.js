/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    var ans = [];
    var exist = {};
  
    for (var i = 0; i < nums.length; i++) {
        
      if (typeof(exist[target-nums[i]]) !== 'undefined') {
          
          return [exist[target - nums[i]], i];
      }
        
      exist[nums[i]] = i;
  }
};