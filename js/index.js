// menu Respansive
const menuHeader = document.querySelector(".menu__header");
const barsBtn = document.getElementById("bars-btn");

barsBtn.addEventListener("click", () => {
  menuHeader.classList.toggle("active");
  shoppingModal.classList.remove("active");
  serachHeader.classList.remove("active");
});

// Search Website
const searchBtn = document.getElementById("search-btn");
const serachHeader = document.querySelector(".serach__header");
searchBtn.addEventListener("click", () => {
  serachHeader.classList.toggle("active");
  shoppingModal.classList.remove("active");
  menuHeader.classList.remove("active");
});

// Product backet
const shoppingModal = document.querySelector(".shopping-modal");
const cartBtn = document.getElementById("cart-btn");
cartBtn.addEventListener("click",()=>{
    shoppingModal.classList.toggle("active");
    menuHeader.classList.remove("active");
    serachHeader.classList.remove("active");
})