function reverseWord(string){
    let newStr = '';
    for(let c of string){
        newStr = c + newStr
    }
    return newStr;
    
}