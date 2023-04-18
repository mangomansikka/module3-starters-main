'use strict';

const num1in = document.getElementById('num1');
const num2in = document.getElementById('num2');
const selection = document.getElementById('operation');
const resultParagraph = document.getElementById('result');
const calculation = document.getElementById('start');

calculation.addEventListener('click', () => {

  const operation = selection.value;

  const num1 = parseFloat(num1in.value);
  const num2 = parseFloat(num2in.value);

  let result;
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'sub') {
    result = num1 - num2;
  } else if (operation === 'multi') {
    result = num1 * num2;
  } else  {
    result = num1 / num2;
  }

  resultParagraph.textContent = `Result: ${result}`;
});