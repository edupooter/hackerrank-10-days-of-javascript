const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

let clickCount = 0;

function rotateButtons() {
  clickCount += 1;
  const currentState = clickCount % 7;

  switch (currentState) {
    case 1:
      btn1.innerHTML = 4;
      btn2.innerHTML = 1;
      btn3.innerHTML = 2;
      btn4.innerHTML = 7;
      btn6.innerHTML = 3;
      btn7.innerHTML = 8;
      btn8.innerHTML = 9;
      btn9.innerHTML = 6;
      break;
    case 2:
      btn1.innerHTML = 7;
      btn2.innerHTML = 4;
      btn3.innerHTML = 1;
      btn4.innerHTML = 8;
      btn6.innerHTML = 2;
      btn7.innerHTML = 9;
      btn8.innerHTML = 6;
      btn9.innerHTML = 3;
      break;
    case 3:
      btn1.innerHTML = 8;
      btn2.innerHTML = 7;
      btn3.innerHTML = 4;
      btn4.innerHTML = 9;
      btn6.innerHTML = 1;
      btn7.innerHTML = 6;
      btn8.innerHTML = 3;
      btn9.innerHTML = 2;
      break;
    case 4:
      btn1.innerHTML = 9;
      btn2.innerHTML = 8;
      btn3.innerHTML = 7;
      btn4.innerHTML = 6;
      btn6.innerHTML = 4;
      btn7.innerHTML = 3;
      btn8.innerHTML = 2;
      btn9.innerHTML = 1;
      break;
    case 5:
      btn1.innerHTML = 6;
      btn2.innerHTML = 9;
      btn3.innerHTML = 8;
      btn4.innerHTML = 3;
      btn6.innerHTML = 7;
      btn7.innerHTML = 2;
      btn8.innerHTML = 1;
      btn9.innerHTML = 4;
      break;
    case 6:
      btn1.innerHTML = 3;
      btn2.innerHTML = 6;
      btn3.innerHTML = 9;
      btn4.innerHTML = 2;
      btn6.innerHTML = 8;
      btn7.innerHTML = 1;
      btn8.innerHTML = 4;
      btn9.innerHTML = 7;
      break;
    case 7:
      btn1.innerHTML = 2;
      btn2.innerHTML = 3;
      btn3.innerHTML = 6;
      btn4.innerHTML = 1;
      btn6.innerHTML = 9;
      btn7.innerHTML = 4;
      btn8.innerHTML = 7;
      btn9.innerHTML = 8;
      break;
  }
}

btn5.addEventListener('click', rotateButtons);
