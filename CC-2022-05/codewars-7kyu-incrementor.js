function incrementer(nums) { 
    for (const i in nums){
      nums[i] = nums[i] + (Number(i) + 1);
      if (nums[i] > 9){
        nums[i] = Number(String(nums[i])[1])
      }
     console.log(nums[i] + (Number(i) + 1))
    }
    return nums;
  }