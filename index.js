function myAnimal() {
  return animal
}

function myAnimal() {
  var animal = 'dog';
  return animal;
}  

  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

const two = 2;

function add2(n) {
  return n + two
}
  // Feel free to move things around!


function add2(n) {
 var two = 2
 return n + two;
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?

var theFunk = funkyFunction()()
