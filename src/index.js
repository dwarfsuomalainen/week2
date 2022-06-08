import "./styles.css";

document.getElementById("app").innerHTML = `
`;
const divAll = document.getElementById("menu-layout");
let list1 = document.createElement("ul");
list1.id = "list";
document.body.appendChild(list1);

let button = document.createElement("button");
button.id = "add-comment";
button.innerHTML = "add your comment";
document.body.appendChild(button);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

button.addEventListener("click", addComment);
function addComment() {
  const li = document.createElement("li");
  const textNode = document.createTextNode(text.value);
  li.appendChild(textNode);
  list1.appendChild(li);
  console.log(text.value);
}
let text = document.createElement("textarea");
text.setAttribute("id", "textarea");
document.body.appendChild(text);
document.body.appendChild(document.createElement("br"));
console.log(text.value);
document.body.appendChild(document.createElement("br"));
let delButton = document.createElement("button");
delButton.setAttribute("id", "remove-comments");
delButton.innerHTML = "Delete all the comments";
document.body.appendChild(delButton);
delButton.addEventListener("click", clearlist);
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
