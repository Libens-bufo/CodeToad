function numberOfPairs(gloves){
    let use = gloves.slice(0).sort()
    const paired = [];
    for(let i = 0; i < gloves.length; i++){
      if (use[i] == use[i + 1]){
        paired.push(use[i]);
        i++;
      }

}