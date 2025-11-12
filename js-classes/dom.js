let a = document.getElementById("head"); // html elements
console.log(a);

a.innerHTML = "changed content";

a.style.color = "blue";
a.style.fontSize = "30px";

let b = document.getElementsByClassName("para"); // html collection

b[1].style.backgroundColor = "yellow";

let c = document.getElementsByTagName("h2");
c[1].style.color = "green";
c[0].style.color = "red"; // html collection

// name attribute

let input = document.getElementsByName("username")[0]; // node list
let head = document.getElementById("head1");

function message() {
  head.innerHTML = input.value;
}

//query selector

let d = document.querySelectorAll(".head2");

d[0].innerHTML = "query changer";

let e = document.querySelector("#head3");
e.innerHTML = "query selector";

//remove create

let m = document.createElement("h1");
function create() {
  m.innerHTML = "shahan";
  document.body.appendChild(m);
}

function remove() {
  m.remove();
}

// events listner

let parag = document.getElementById('parag')

let btn = document.getElementById('btn')

btn.addEventListener('click', colorChange)

function colorChange() {
  parag.style.color = "blue";
}

parag.addEventListener('mouseover', changeBg)

function changeBg() {
  parag.style.backgroundColor = "yellow";
}
