function uncensor(string, letters) {
  
    let arr = string.split('');
    let letters2 = letters.split('')
    for (let i = 0; i < letters2.length; i++){
      arr[arr.indexOf('*')] = letters2[i];
    }
    return arr.join('');
  }
  

