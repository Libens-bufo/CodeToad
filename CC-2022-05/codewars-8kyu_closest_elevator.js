function elevator(l, r, c){
    return Math.abs(l - c) < Math.abs(r - c) ? 'left' : 'right'
   }
   