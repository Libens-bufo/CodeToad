function isEven(x){
    if (x % 2 == 0) return true;
    return false;
  }
  
  function lovefunc(flower1, f2){
   if ((isEven(flower1) && isEven(f2)) || (!isEven(flower1) && !isEven(f2))) return false;
    return true;
  }
  //better solution
  function lovefunc(f1, f2){
    return f1 % 2 != f2 % 2;
   }