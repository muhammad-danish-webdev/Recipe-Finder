// // Select the input element
// const searchInputLabel = document.querySelector(".header-input-label");

// // Add event listener for Focus (When clicked)
// searchInputLabel.addEventListener("focus", () => {
//   searchInput.classList.add("active");
// });

// // Add event listener for Blur (When clicking outside)
// searchInputLabel.addEventListener("blur", () => {
//   searchInputLabel.classList.remove("active");
// });

// 1. Select the input and its parent label
const searchInput = document.querySelector(".header-input-label input");
const inputLabel = document.querySelector(".header-input-label");

// 2. Add 'active' class when input is clicked (focused)
searchInput.addEventListener("focus", () => {
  inputLabel.classList.add("active");
});

// 3. Remove 'active' class when clicking away (blur)
searchInput.addEventListener("blur", () => {
  inputLabel.classList.remove("active");
});
// #############################
// #############################
// #############################

const searchIcon = document.getElementById("search-icon");
const searchContainer = document.getElementById("search-container");

searchIcon.addEventListener("click", () => {
  searchContainer.classList.toggle("active-2");
});

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
// Hamburger Icon JS
const hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  // You can also toggle your menu visibility here
  // const mobileMenu = document.getElementById('mobile-menu');
  // mobileMenu.classList.toggle('visible');
});
