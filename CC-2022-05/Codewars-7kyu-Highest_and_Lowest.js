function highAndLow(n){
    console.log(n.length,n[0], n[n.length-1]);
    if (n.length == 1) return `${n[0]} ${n[0]}`;
    let s =  n.split(' ').sort((a,b) => a - b);
    return `${s[s.length - 1]} ${s[0]}`;
  }

//
