"use strict";

const sidebarToggleBtn = document.querySelector("#sidebar-toggle-btn");
const cardActionBtns = document.querySelectorAll("button.card-toggle-btn");
const cardBody = document.querySelectorAll("div.card-body");

sidebarToggleBtn.addEventListener("click", () => {
  document.querySelector("#sidebar").classList.toggle("hidden");
});

// Welcom message for 5s
setTimeout(() => {
  document.querySelector(".g-container").classList.add("hidden");
}, 5000);

const x = document.querySelector("main").style.width;

cardActionBtns.forEach((item, i) =>
  item.addEventListener("click", (e) => {
    cardBody[i].classList.toggle("hidden");
  })
);
