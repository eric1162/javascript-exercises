const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	let res = 0;
  nums.forEach(num => {
    res += num;
  });
  return res;
};

const multiply = function(nums) {
  let res = 1;
  nums.forEach(element => {
    res *= element;
  });
  return res;
};

const power = function(num1, num2) {
	let res = 1;
  for(let i = 0; i < num2; i++){
    res *= num1;
  }
  return res;
};

const factorial = function(num) {
	res = 1;
  for(let i = num; i > 0; i--){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
