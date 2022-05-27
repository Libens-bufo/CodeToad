function isNarcissistic(n) {
    let l = String(n).length
    let s = String(n);
    let tot = 0;
    for (let i = 0; i < l; i++){
      tot += Math.pow(Number(s[i]), l)
    }
    return (tot == n);
  }