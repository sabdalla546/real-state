let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
const header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 80);
});
// slider
next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // here the length of items = 6
});

let products = null;
// get datas from file json
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data;
    addDataToHTML();
  });

function addDataToHTML() {
  // remove datas default from HTML
  let listProductHTML = document.querySelector(".listProduct");

  // add new datas
  if (products != null) {
    // if has data
    products.forEach((product) => {
      let newProduct = document.createElement("a");
      newProduct.href = "/detail.html?id=" + product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img src="${product.image}" alt="">
        <h2>${product.name}</h2>
        <div class="price">$${product.price}</div>`;
      listProductHTML.appendChild(newProduct);
    });
  }
}
// navigation
menu.onclick = () => {
  navbar.classList.toggle("open");
};
