const res = document.getElementById('res');
const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');

let currentVal = '';

const addToCurrentVal = (val) => {
  currentVal += val;
  res.innerHTML = currentVal;
};

const clearCurrentVal = () => {
  currentVal = '';
  res.innerHTML = currentVal;
};

const performOperation = () => {
  const regex = /([01]+)([\+|\-|\*|\/])([01]+)/;
  const result = currentVal.match(regex);
  const a = parseInt(result[1], 2);
  const b = parseInt(result[3], 2);
  let operationResult;

  switch (result[2]) {
    case '+':
      operationResult = a + b;
      break;
    case '-':
      operationResult = a - b;
      break;
    case '*':
      operationResult = a * b;
      break;
    case '/':
      operationResult = Math.floor(a / b);
      break;
  }

  res.innerHTML = operationResult.toString(2);
};

btn0.addEventListener('click', () => addToCurrentVal('0'));
btn1.addEventListener('click', () => addToCurrentVal('1'));