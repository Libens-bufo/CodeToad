function countPositivesSumNegatives(input) {
   if (input === [] || typeof input == 'null' ){
     return [];
   }
   const positives = input.filter(arg => arg > 0);
   const negatives = input.filter(arg => arg < 0);
   return [positives.length, (negatives.reduce((a, b) => a + b))];
}
