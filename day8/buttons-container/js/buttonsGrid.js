const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

function rotateButtons() {
  btn1.innerHTML = 4
  btn2.innerHTML = 1
  btn3.innerHTML = 2
  btn4.innerHTML = 7
  btn6.innerHTML = 3
  btn7.innerHTML = 8
  btn8.innerHTML = 9
  btn9.innerHTML = 6
}

btn5.addEventListener('click', rotateButtons);
