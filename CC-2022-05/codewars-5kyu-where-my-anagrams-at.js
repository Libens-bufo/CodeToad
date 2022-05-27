function anagrams(word, words) {
    let w = word.split('').sort().join('');
    let ws = words.map(x => x.split('').sort('').join(''))
    return words.filter((x, i) => w === ws[i])
  }c