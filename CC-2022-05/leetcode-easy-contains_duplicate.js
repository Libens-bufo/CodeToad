var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if (i != j && nums[i] == nums[j]) return true
        }
    }
    return false;
};

//compare indices 0-nums with 0-nums
//numbers that are identical and  not the same index  = a hit
