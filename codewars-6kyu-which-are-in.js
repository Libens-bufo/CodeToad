function inArray(array1,array2){
    const res = [];
    array2.forEach(x => {
      array1.forEach(a =>{
        if ((x.includes(a)) && !res.includes(a)) res.push(a);
      })
    })
    return res.sort();
    
  }