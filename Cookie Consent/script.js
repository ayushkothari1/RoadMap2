const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const cookies = document.querySelector(".cookies");

cookies.addEventListener("click", function () {
  section2.style.display = "none";
  section1.classList.add("opacity");
});
