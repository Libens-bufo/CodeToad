function removeEveryOther(arr){
    const n = []
    for (let i = 0; i < arr.length; i++){
      if ((i % 2) == 0) n.push(arr[i])
    }
    return n;
  }