function list(value) {
  text += "<li>" + value + "</li>";
  return text
}

const items = ['First item', 'Second item', 'Third item']

let text = ""
items.forEach(list)


document.getElementById("target").innerHTML = text