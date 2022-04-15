const new_elems = ["Loans", "Finance", "Debt"];
const loginBtn = document.querySelector(".login-btn");

//helper functions
function createNewMenuItem(category_name) {
  //create
  let item_container = document.createElement("div");
  item_container.className = `menu-item-container ${category_name.toLowerCase()}`;
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

//Event listeners

// 1. Jump to the bottom of the page.
loginBtn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
  // 2. Open the menu on the side.
  document.querySelector(".container").classList.toggle("change");

  // 3. When the menu is opened, add the following menu items
  //to the top of the list of existing items: "Loans", "Finance", and "Debt".

  const menu_list = document.querySelector(".menu");
  //do not add new menu items more than once
  if (menu_list.children.length <= 5) {
    new_elems.forEach((new_elem) => {
      menu_list.insertBefore(
        createNewMenuItem(new_elem),
        menu_list.children[1]
      );
    });
  }
});

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("change");
    //if additional menu items exist remove them
    new_elems.forEach((an_elem) => {
      let menu_item = document.querySelector(".".concat(an_elem.toLowerCase()));
      if (menu_item) {
        menu_item.remove();
      }
    });
  });

document.querySelector("#close-menu").addEventListener("click", function () {
  document.querySelector(".container").classList.toggle("change");
  // 4. When the user closes the menu, please make the JS to reset to the original list
  new_elems.forEach((an_elem) => {
    document.querySelector(".".concat(an_elem.toLowerCase())).remove();
  });
  // and jump back to the top of the page.
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
