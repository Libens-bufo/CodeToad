function longestConsec(strarr, k) {
    maxString = ''
    if ((k > strarr.length) || (k == 0)) return '';

    for (let i = 0; i < strarr.length; i++){
        console.log(i)
        currentString = ''
        num = 0;
        while (num < k){
            currentString += strarr[i + num]
            console.log(currentString, num, strarr[num])
            num++
            
        }
       if (currentString.length > maxString.length){
        maxString = currentString;
        }
    }
    return maxString;
}
let x = longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
console.log(x);
/*

for num in length

current string = string at num + string at num + 1 + ....string at num + k-1
if current string.length > maxstring.length, max string is set to current
return max
*/