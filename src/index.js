import "./styles.css";

document.getElementById("app").innerHTML = `
`;
const divAll = document.getElementById("menu-layout");
var rate1;
var rateOp;
let list1 = document.createElement("ul");
list1.id = "list";
document.body.appendChild(list1);
document.body.appendChild(document.createElement("br"));
let rate = document.createElement("SELECT");
rate.setAttribute("id", "rating");
rate.setAttribute("label", "Rating");
//rate.setAttribute('value','*');
document.body.appendChild(rate);

if (rate.childElementCount < 4) {
  for (let i = 0; i < 4; i++) {
    let count = [];
    for (let b = 0; count.length < 4; b++) {
      let star = "*";
      count.push(star.repeat(b + 1));
    }
    console.log(count);

    for (let c = 0; rate.childElementCount < 4; c++) {
      rateOp = document.createElement("option");
      rateOp.setAttribute("value", count[c]);
      rateOp.setAttribute("text", c + 1);
      console.log(rateOp.text + "text");
      console.log(rateOp.setAttribute("value", c + 1));
      let selectText = c + 1;
      rate1 = document.createTextNode(selectText);
      rateOp.appendChild(rate1);
      document.getElementById("rating").appendChild(rateOp);
    }
  }
}

document.body.appendChild(document.createElement("br"));

let button = document.createElement("button");
button.id = "add-comment";
button.innerHTML = "add your comment";
document.body.appendChild(button);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));

button.addEventListener("click", addComment);
function addComment() {
  let ratedComment = document.createElement("div");
  ratedComment.id = "ratedComment";
  ratedComment.classList.add("comment");
  console.log(ratedComment.classList);
  let ratedCommentStar = document.createElement("div");
  ratedCommentStar.id = "ratedCommentStar";
  ratedCommentStar.classList.add("comment-rating");
  ratedCommentStar.innerHTML = rate.value;
  console.log(rate.value);
  console.log(ratedCommentStar.classList);
  ratedComment.appendChild(ratedCommentStar);
  let ratedCommentText = document.createElement("div");
  ratedCommentText.id = "ratedCommentText";
  ratedCommentText.classList.add("comment-text");
  console.log(ratedCommentText.classList);
  ratedCommentText.innerHTML = text.value;
  ratedComment.appendChild(ratedCommentText);
  //console.log(ratedCommentText.value);
  document.body.appendChild(ratedComment);
  let edit = document.createElement("button");
  edit.innerText = "Remove comment";
  edit.classList.add("remove-comment");
  ratedComment.appendChild(edit);
  edit.addEventListener("click", removeComment);
  text.value = "";

  const li = document.createElement("li");
  const textNode = document.createTextNode(
    ratedCommentStar.innerText +
      " star, and review is: " +
      ratedCommentText.innerText
  );
  li.appendChild(textNode);
  list1.appendChild(li);
  //console.log(text.value);
}

function removeComment() {
  console.log("comment removed");
  console.log(document.body.children);
  let divtoDel = document.getElementById("ratedComment");
  divtoDel.remove();
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
