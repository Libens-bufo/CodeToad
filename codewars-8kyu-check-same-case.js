function sameCase(a, b){
    if(b.toLowerCase() === b.toUpperCase() || a.toUpperCase() === a.toLowerCase()){
       return -1;
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1;
     }else{
       return 0;
     }
   }
//
