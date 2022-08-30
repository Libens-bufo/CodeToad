function solution(str){
    const arr = []
    let subString = ''
     for(let i = 0; i < str.length; i+=2){
       if (i == str.length - 1){
         subString = str[i];
         arr.push(subString + '_')
         break
       }
       subString = str.slice(i, i + 2)
       arr.push(subString)
     }
    return arr;
       
  }