import { DateTime } from "luxon";
import flatpickr from "flatpickr";

// Initialize the date picker
flatpickr("#birthdate", {
  dateFormat: "Y-m-d",
  altInput: true,
  altFormat: "F j, Y",
});

// Handle the form submission
const form = document.getElementById("age-form");
const resultDiv = document.getElementById("age-result");
const ageOutput = document.getElementById("age-output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  if (!birthdate) {
    alert("Please select a birthdate.");
    return;
  }

  // Parse the birthdate using Luxon
  const birthDate = DateTime.fromISO(birthdate);
  if (!birthDate.isValid) {
    alert("Invalid date. Please try again.");
    return;
  }

  // Get the current date and calculate the difference
  const now = DateTime.now();
  const diff = now.diff(birthDate, ["years", "months", "days"]);

  // Display the result
  const years = diff.years.toFixed(0);
  const months = diff.months.toFixed(0);
  const days = diff.days.toFixed(0);

  ageOutput.textContent = `${years} years, ${months} months, and ${days} days old.`;
  resultDiv.classList.remove("hidden");
});
