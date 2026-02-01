document.addEventListener("DOMContentLoaded", () => {

  const courses = [
    {
      code: "WDD 130",
      subject: "wdd",
      credits: 2,
      completed: true,
      title: "Web Fundamentals",
      description: "Introduction to basic web development principles.",
      technology: ["HTML", "CSS"]
    },
    {
      code: "WDD 131",
      subject: "wdd",
      credits: 2,
      completed: true,
      title: "Dynamic Web Fundamentals",
      description: "Creating dynamic websites using JavaScript.",
      technology: ["HTML", "CSS", "JavaScript"]
    },
    {
      code: "WDD 231",
      subject: "wdd",
      credits: 2,
      completed: false,
      title: "Frontend Development",
      description: "Advanced front-end development and responsive design.",
      technology: ["HTML", "CSS", "JavaScript"]
    },
    {
      code: "CSE 110",
      subject: "cse",
      credits: 2,
      completed: true,
      title: "Introduction to Programming",
      description: "Basic programming logic and problem solving.",
      technology: ["Python"]
    },
    {
      code: "CSE 111",
      subject: "cse",
      credits: 2,
      completed: true,
      title: "Programming with Functions",
      description: "Using functions to write efficient programs.",
      technology: ["Python"]
    },
    {
      code: "CSE 210",
      subject: "cse",
      credits: 2,
      completed: true,
      title: "Programming with Classes",
      description: "Object-oriented programming concepts.",
      technology: ["C#"]
    }
  ];

  const courseList = document.querySelector("#course-list");
  const creditText = document.querySelector("#total-credits");
  const courseDetails = document.querySelector("#course-details");

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

      li.addEventListener("click", () => {
        displayCourseDetails(course);
      });

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

  function displayCourseDetails(course) {
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.code}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
      courseDetails.close();
    });

    courseDetails.addEventListener("click", (e) => {
      if (e.target === courseDetails) {
        courseDetails.close();
      }
    });
  }

  allButton.addEventListener("click", () => {
    displayCourses(courses);
  });

  wddButton.addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "wdd"));
  });

  cseButton.addEventListener("click", () => {
    displayCourses(courses.filter(course => course.subject === "cse"));
  });

  displayCourses(courses);
});