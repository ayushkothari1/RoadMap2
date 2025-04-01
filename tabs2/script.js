const tabs = document.querySelector(".tabs");
const tab = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

tab.forEach(function (e, index) {
  e.addEventListener("click", function () {
    tab.forEach(function (innerTab) {
      innerTab.classList.remove("active");
    });
    e.classList.add("active");
    sections.forEach(function (e) {
      e.classList.remove("active");
    });
    sections[index].classList.add("active");
  });
});
