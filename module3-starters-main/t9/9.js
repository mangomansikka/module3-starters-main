const calculation = document.getElementById('start');
const integers = document.getElementById('calculation');
const result = document.getElementById('result');

calculation.addEventListener('click', () => {
  const words = integers.textContent.split(" ")
  const calculate = words[0] + words[1] + words[2]
  result.textContent = `Result: ${calculate}`;
})

