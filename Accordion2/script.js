const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answers = document.querySelectorAll(".answer");
    answers.forEach(function (answer) {
      if (answer !== question.nextElementSibling) {
        answer.style.display = "none";
      }
    });

    const answer = question.nextElementSibling;
    if (answer.style.display === "none" || answer.style.display === "") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
