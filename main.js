const element = document.getElementById("title");

// picking elements with id, and manipulating them
element.style.color = "red";
element.style.backgroundColor = "yellow";
element.style.padding = "15px";
element.style.borderRadius = "4px";

// textContent => visiable text only
console.log(element.textContent);

// innerHTML => all things availabe in HTML tag
console.log(element.innerHTML);

// innerText => all texts
console.log(element.innerText);

// getElementsByClassName() always returns a HTML collection not an array
const byClass = document.getElementsByClassName("heading");
console.log(byClass);

// querySelector => first element only
let h1 = document.querySelector("h1"); // selecting by tag
let querySelector = document.querySelector("#title"); // # for id
let querySelector2 = document.querySelector(".heading"); // .dot for class

console.log(h1);
console.log(querySelector);
console.log(querySelector2);

// only selecting the first h2
const h2 = document.querySelector("h2");
h2.style.color = "green";

// both are valid, and works in a similar way
let turnGreen = document.querySelector("ul li");
turnGreen = document.querySelector("li");

turnGreen.innerText = "I am Green";
turnGreen.style.backgroundColor = "green";

// querySelectorAll() returns a nodelist that supports a few array operation
const myList = document.querySelectorAll("li");

console.log(myList.length);

myList.forEach((element) => {
  element.style.backgroundColor = "royalblue";
  element.style.color = "white";
});

// getElementsByClassName() always returns a HTML collection
const allH2 = document.getElementsByClassName("h2");

// convering HTMLCollection into an array, to do some array operation
Array.from(allH2);

for (let i = 0; i < allH2.length; i++) {
  allH2[i].style.color = "red";
  allH2[i].style.backgroundColor = "yellow";
}