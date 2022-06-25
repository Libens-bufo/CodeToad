var countDeafRats = function(town) {

    let count = 0, left, final, rReverse;
    let split = town.split(" ").join('').split("P");
    if (split[0] && split[1]){
     rReverse = split[1].split('').reverse().join('');
     left = split[0] + rReverse;
    } 
    if (!split[0]) left = split[1].split('').reverse().join('');
    if (!split[1]) left = split[0];
    
    final = left.split('');
    
     for (let i = 0; i < final.length; i+=2 ){
          console.log(i, final.length)
      if ((final[i] === "~") && (final[i + 1] === "O")) continue;
      if ((final[i] === "O") && (final[i+1] === "~")) count++
      
     }
    return count;
  }