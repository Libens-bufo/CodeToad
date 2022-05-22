function nbYear(p0, percent, aug, p) {
    percent = percent * .01;
    let year = p0 + (p0 * percent) + aug;
    let n = 1
    while (year <= p){
      year = year + (year * percent) + aug;
      n++
    }
    return n;
}
