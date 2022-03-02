// function doubleChar(str) {
//     return str.split('').map(x => x + x).join('')
//   }


  function multiplier(factor){
      return number => number * factor;
  }

  let putinTwo = multiplier(2);

  console.log(putinTwo(4));