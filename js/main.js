"use strict";

const sidebarToggleBtn = document.querySelector("#sidebar-toggle-btn");
const cardOptionBtns = document.querySelectorAll("button.card-option-btn");
const cardToggleBtns = document.querySelectorAll("button.card-toggle-btn");
const cardActionIcons = document.querySelectorAll("button.card-toggle-btn");
const cardBody = document.querySelectorAll("div.card-body");
const cardOptions = document.querySelectorAll("div.card-options");

sidebarToggleBtn.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("hidden");
});

// Welcom message for 5s
setTimeout(() => {
  document.querySelector(".g-container").classList.add("hidden");
}, 5000);

const x = document.querySelector("main").style.width;

cardToggleBtns.forEach((item, i) =>
  item.addEventListener("click", (e) => {
    cardBody[i].classList.toggle("hidden");
    if (cardBody[i].classList.contains("hidden")) {
      cardActionIcons[i].querySelector("i").classList.remove("fa-angle-up");
      cardActionIcons[i].querySelector("i").classList.add("fa-angle-down");
    } else {
      cardActionIcons[i].querySelector("i").classList.remove("fa-angle-down");
      cardActionIcons[i].querySelector("i").classList.add("fa-angle-up");
    }
  })
);

cardOptionBtns.forEach((item, i) => {
  item.addEventListener("mousedown", (e) => {
    e.preventDefault();
    cardOptions[i].classList.toggle("hidden");
  });
});
