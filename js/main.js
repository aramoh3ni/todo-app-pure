"use strict";

const sidebarBtn = document.querySelector(".sidebar-toggle");

document.querySelector(".card-action-btn").addEventListener("click", (e) => {
  document.querySelector(".card-body").classList.toggle("hidden");
});

sidebarBtn.addEventListener("click", (e) => {
  document.querySelector(".sidebar").classList.toggle("hidden");
  document.querySelector(".sidebar").classList.toggle("fade");
});

document.querySelector(".body").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("hidden");
  document.querySelector(".container").classList.toggle("center");
});
