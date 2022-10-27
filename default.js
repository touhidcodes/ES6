// Old Method
function add(num1, num2) {
  if (num2 == undefined) {
    num2 = 0;
  }
  return num1 + num2;
}

// JS Method
function add(num1, num2) {
  num2 = num2 || 0;
  return num1 + num2;
}

// ES6 Method
function add(num1, num2 = 0) {
  return num1 + num2;
}

console.log(add(15));
console.log(add(15, 17));
