// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    // Close all accordion content sections
    const allContents = document.querySelectorAll(".accordion-content");
    allContents.forEach((content) => {
      if (content !== header.nextElementSibling) {
        content.style.display = "none";
      }
    });

    // Toggle the clicked section
    const content = header.nextElementSibling;
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
});
