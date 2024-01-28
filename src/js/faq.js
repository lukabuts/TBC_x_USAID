const questions_div = document.getElementById("questions_div");

// Showing Questions
function getQuestions() {
  fetch("src/data/questions.json")
    .then((res) => res.json())
    .then((data) => {
      showQuestions(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function showQuestions(data) {
  questions_div.innerHTML = data
    .map((question) => {
      return `<div class="question">
        <div class="question_title">
          <h3>${question.title}</h3>
          <div class="img">
            <img src="./src/images/dropdown.svg" alt="show more" />
          </div>
        </div>
        <div class="answer">${question.answer}</div>
      </div>`;
    })
    .join("");

  const question_titles = document.querySelectorAll(
    "#questions_div .question .question_title"
  );

  console.log(question_titles);

  // Question Open || Close Functions
  for (const title of question_titles) {
    title.addEventListener("click", (e) => {
      const answer_div = title.nextElementSibling;
      const question_div = title.parentElement;

      question_div.classList.toggle("opened");

      // Show || Hide Question COntent
      question_div.classList.contains("opened")
        ? (answer_div.style.height = `${answer_div.scrollHeight}px`)
        : (answer_div.style.height = `0px`);
    });
  }
}

getQuestions();
