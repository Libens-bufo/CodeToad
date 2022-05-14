function isIsogram(str){
    if (str === '') return true;
    let strU = str.toUpperCase();
    for (let i = 0; i < strU.length; i++){
      for (let j = i + 1; j < strU.length; j++){
        if (strU[i] === strU[j]) return false;
      }
    }
    return true;
  }
  
  //https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
  //Codewars - Isograms
