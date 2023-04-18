'use strict';

function list(value) {
  text += "<li>" + value + "</li>";
  return text
}

let text = ''
const names = ['John', 'Paul', 'Jones'];
names.forEach(list)

document.getElementById("target").innerHTML = text