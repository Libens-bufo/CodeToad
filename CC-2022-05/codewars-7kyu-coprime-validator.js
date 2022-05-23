function answer(x, y){
const xF = [];

for(let i = 0; i <= x; i++){
  if (x % i === 0) xF.push(i);
}
for(let i = 2; i <= y; i++){
  if ((y % i === 0) && xF.includes(i)) return false;
}
return true;
}