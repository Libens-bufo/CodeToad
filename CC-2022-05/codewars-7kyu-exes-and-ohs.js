function XO(str) {
    let xs = ''
    let os = ''
    str.toLowerCase().split('').forEach( x => {
      if (x == 'x') xs += x;
      if (x =='o') os += x;
    })
  return xs.length == os.length;
}//