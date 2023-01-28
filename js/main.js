"use strict";

const sidebarToggleBtn = document.querySelector("#sidebar-toggle-btn");
const cardActionBtns = document.querySelector(".card-toggle-btn");

sidebarToggleBtn.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("hidden");
});

// Welcom message for 5s
setTimeout(() => {
  document.querySelector(".g-container").classList.add("hidden");
}, 5000);

cardActionBtns.forEach((item) => console.log(item));

sidebarBtn.addEventListener("click", (e) => {
  document.querySelector(".sidebar").classList.toggle("hidden");
});

document.querySelector(".body").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("hidden");
});
