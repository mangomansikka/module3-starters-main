'use strict'

let check = document.querySelector('form')
let name1 = document.querySelector('input[name=firstname]')
let name2 = document.querySelector('input[name=lastname]')
let result = document.getElementById("target")


check.addEventListener('submit', function(evt) {
  evt.preventDefault();
  result.innerText = `Your name is ${name1.value} ${name2.value}`;
})
