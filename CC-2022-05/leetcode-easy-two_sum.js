// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let n = nums.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            //console.log(i, j)
            if (nums[i] + nums[j] == target && i !== j){
                //console.log('!', i, j);
                return [i, j];
                
            }
        }
    }
};