// Spinner
// Page loads, after 3 seconds the spinner disappears
// Add a new class to body element
// And in CSS display using that new class
// window.onload = () => {
//   setTimeout(() => {
//     document.querySelector("body").classList.add("display");
//   }, 3000);
// };

//Sidebar
//unhide the sidebar
// .change .sidebar{
//     right: 0;
// }

// The classList property returns the class name(s) of an element, as a DOMTokenList object.

//This property is useful to add, remove and toggle CSS classes on an element.

//Will also transition the menu icon
//.hamburger-menu{    transition: right 0.7s;}
//.change .hamburger-menu{right:33rem;}

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("change");
  });

//close hamburger menu
document.querySelector("#close-menu").addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("change");
  // 4. When the user closes the menu, please make the JS to reset to the original list
  // and jump back to the top of the page.
});

// Scroll to top button
//assign html property scroll behaviour and set to smooth
//then remove smooth scroll
// () => is a function call

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

// function setAttributesHelper(elem, attrs) {
//   for (let key in attrs) {
//     elem.setAttribute(key, attrs[key]);
//   }
// }

function createNewMenuItem(category_name) {
  //create
  let item_container = document.createElement("div");
  item_container.className = "menu-item-container";
  item_li = document.createElement("li");
  item_li.className = "menu-item";
  item_a = document.createElement("a");
  item_a.className = "menu-link";
  item_a.setAttribute("data-content", category_name);
  item_a.innerHTML = category_name;
  //append
  item_container.appendChild(item_li);
  item_li.appendChild(item_a);
  return item_container;
}

//TODO:
// When clicking the login button on the top right hand side, please create a JavaScript to:

const loginBtn = document.querySelector(".login-btn");

// 1. Jump to the bottom of the page.
loginBtn.addEventListener("click", () => {
  window.scrollTo({
    // left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
  // 2. Open the menu on the side.
  document.querySelector(".container").classList.toggle("change");

  // 3. When the menu is opened, add the following menu items
  //to the top of the list of existing items: "Loans", "Finance", and "Debt".
  const new_elems = ["Loans", "Finance", "Debt"];
  const menu_list = document.querySelector(".menu");
  new_elems.forEach((new_elem) => {
    // createNewMenuItem(new_elem);
    // list.insertBefore(newNode, list.children[0]);
    menu_list.insertBefore(createNewMenuItem(new_elem), menu_list.children[0]);
  });
});

//5. Please make sure the JS function only happens when the user clicks on login.
//If the user simply clicks on the menu on the TOP LEFT hand corner, the JS feature SHOULD NOT BE executed.
