const courses_div = document.getElementById("courses");

fetch("src/courses-info/courses.json")
  .then((res) => res.json())
  .then((data) => {
    generateCoursesSection(Object.values(data));
  })
  .catch((error) => console.error("Error fetching data:", error));

function generateCoursesSection(data) {
  courses_div.innerHTML = data
    .map((course) => {
      return `<div class="course">
      <!-- img -->
      <div class="image">
        <img src=${course.image} alt=${course.name} />
      </div>
      <!-- description -->
      <div class="description">
        <h3 class="course_name">${course.name}</h3>
        <p class="registration">${
          course.finished
            ? "რეგისტრაცია დასრულებულია"
            : "რეგისტრაცია არ დასრულებულა"
        }</p>

        <!-- Dertails -->
        <div class="details">
          <a href=${course.details}>
            <img src="./src/images/courses/arrow.svg" alt="arrow" />
            კურსის დეტალები</a
          >
        </div>
      </div>
    </div>`;
    })
    .join("");
}
