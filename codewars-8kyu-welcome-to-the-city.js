function sayHello( name, city, state ) {
    let names = "";
    name.forEach(x => names += x + " ");
    names.trim()
    return  `Hello, ${names.trim()}! Welcome to ${city}, ${state}!`
  }