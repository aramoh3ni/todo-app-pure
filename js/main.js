const sidebarBtn = document.querySelector(".sidebar-toggle");

sidebarBtn.addEventListener("click", (e) => {
  document.querySelector(".sidebar").classList.toggle("hidden");
  document.querySelector(".container").classList.toggle("center");
});

document.querySelector(".body").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("hidden");
  document.querySelector(".container").classList.toggle("center");
});
