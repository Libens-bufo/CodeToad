function rot13(message){
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const arrOf = [null, ...alphabet.split('')]; //arr[0] = null to shift over one element so i == position in Alphaabet
    let result = [];
    let msg = message.split('');
    
    for (let i = 0; i < msg.length; i++){
      let charNumPlus = arrOf.indexOf(msg[i]) + 13; //shift 13 letters
      if (!arrOf.find(el => el === msg[i]))         //if item at index i is not an upper or lower case letter
        result.push(msg[i])
      else if (msg[i] === msg[i].toUpperCase()){    // if item at index i is upper case
        if ((charNumPlus < 53) && (charNumPlus >= 27))
          result.push(arrOf[charNumPlus])
        else
          result.push(arrOf[charNumPlus % 26 + 26])
      }
      else{                                         //else must be lower case letters contained in array 'arrOf'
        if (charNumPlus < 27)
          result.push(arrOf[charNumPlus])
        else
          result.push(arrOf[charNumPlus % 26])
      }
    }
    return result.join('')
}