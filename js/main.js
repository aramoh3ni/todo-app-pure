"use strict";

const sidebarToggleBtn = document.querySelector("#sidebar-toggle-btn");
const cardActionBtns = document.querySelectorAll("button.card-toggle-btn");
const cardActionIcons = document.querySelectorAll("button.card-toggle-btn.fa");
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

    if (e.path[0].classList.contains("fa-angle-up")) {
      e.path[0].classList.remove("fa-angle-up");
      e.path[0].classList.add("fa-angle-down");
    } else if (e.path[0].classList.contains("fa-angle-down")) {
      e.path[0].classList.remove("fa-angle-down");
      e.path[0].classList.add("fa-angle-up");
    }
  })
);

console.log(cardActionIcons.length);
