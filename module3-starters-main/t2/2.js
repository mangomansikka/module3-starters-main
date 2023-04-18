'use strict';
function list(value) {
  for (let i = 0; i < value.length; i++) {
    if (i === 1) {
      text += "<div class = my-item>" + "<li>" + value[i] + "</li>" + "</div>";
    }
   else {
      text += "<li>" + value[i] + "</li>";
    }}
  return text
}

let text = ""

const item1 = document.createTextNode('First item')
const item2 = document.createTextNode('Second item')
const item3 = document.createTextNode('Third item')

const newItem1 = document.createElement('tag1')
const newItem2 = document.createElement('tag2')
const newItem3 = document.createElement('tag3')

newItem1.appendChild(item1)
newItem2.appendChild(item2)
newItem3.appendChild(item3)

let items = [newItem1.textContent, newItem2.textContent, newItem3.textContent]
list(items)

document.getElementById("target").innerHTML = text