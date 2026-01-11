document.addEventListener("DOMContentLoaded", () => {

  const courses = [
    { code: "WDD 130", subject: "wdd", credits: 2, completed: true },
    { code: "WDD 131", subject: "wdd", credits: 2, completed: true },
    { code: "WDD 231", subject: "wdd", credits: 2, completed: false },
    { code: "CSE 110", subject: "cse", credits: 2, completed: true },
    { code: "CSE 111", subject: "cse", credits: 2, completed: true },
    { code: "CSE 210", subject: "cse", credits: 2, completed: true }
  ];

  const courseList = document.querySelector("#course-list");
  const creditText = document.querySelector("#total-credits");

  const allButton = document.querySelector("#all");
  const wddButton = document.querySelector("#wdd");
  const cseButton = document.querySelector("#cse");

  function displayCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach(course => {
      const li = document.createElement("li");
      li.classList.add("course", course.subject);

      li.textContent = course.completed
        ? `${course.code} ✔`
        : course.code;

      courseList.appendChild(li);
    });

    updateCredits(courseArray);
  }

  function updateCredits(courseArray) {
    const totalCredits = courseArray.reduce(
      (sum, course) => sum + course.credits,
      0
    );

    creditText.textContent =
      `The total credits for courses listed above is ${totalCredits}`;
  }

  allButton.addEventListener("click", () => {
    displayCourses(courses);
  });

  wddButton.addEventListener("click", () => {
    const wddCourses = courses.filter(
      course => course.subject === "wdd"
    );
    displayCourses(wddCourses);
  });

  cseButton.addEventListener("click", () => {
    const cseCourses = courses.filter(
      course => course.subject === "cse"
    );
    displayCourses(cseCourses);
  });

  displayCourses(courses);

});