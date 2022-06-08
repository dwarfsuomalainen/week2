import "./styles.css";

document.getElementById("app").innerHTML = `
`;

let list1 = document.createElement("ul");
list1.id = "list";
const form = document.getElementById("form");

let text = document.createElement("textarea");
text.setAttribute("id", "textarea");
form.append(text);
form.append(document.createElement("br"));
console.log(text.value);
form.append(document.createElement("br"));
let button = document.createElement("button");
button.id = "add-comment";
button.innerHTML = "add your comment";
form.append(button);
form.append(document.createElement("br"));
form.append(document.createElement("br"));

button.addEventListener("click", addComment);
function addComment() {
  const li = document.createElement("li");
  const textNode = document.createTextNode(text.value);
  li.appendChild(textNode);
  list1.appendChild(li);
  console.log(text.value);
}
let delButton = document.createElement("button");
delButton.setAttribute("id", "remove-comments");
delButton.innerHTML = "Delete all the comments";
form.appendChild(delButton);
delButton.addEventListener("click", clearlist);
form.append(list1);
function clearlist() {
  //let ul = document.querySelectorAll("li");
  //let lenght = ul.children.lenght;
  //console.log(ul);
  //for (let i = 0; i < lenght; i++) {}
  //ul.parentNode.removeChild(ul);
  let textC = "NO PLEASE I HAVE A FAMILY!!! NOOOO!!!!";
  if (confirm(textC) === true) {
    console.log(list1);
    list1.innerHTML = "";
  } else {
    console.log(list1);
  }
}
