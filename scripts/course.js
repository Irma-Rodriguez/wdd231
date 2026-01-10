document.addEventListener("DOMContentLoaded", () => {

    const allButton = document.querySelector("#all");
    const wddButton = document.querySelector("#wdd");
    const cseButton = document.querySelector("#cse");

    const courses = document.querySelectorAll(".course");
    const creditText = document.querySelector("#total-credits");

    function updateCredits() {
        let visibleCourses = 0;

        courses.forEach(course => {
            if (course.style.display !== "none") {
                visibleCourses++;
            }
        });

        const totalCredits = visibleCourses * 2;

        creditText.textContent =
            `The total credits for courses listed above is ${totalCredits}`;
    }

    allButton.addEventListener("click", () => {
        courses.forEach(course => {
            course.style.display = "block";
        });
        updateCredits();
    });

    wddButton.addEventListener("click", () => {
        courses.forEach(course => {
            if (course.classList.contains("wdd")) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
        updateCredits();
    });

    cseButton.addEventListener("click", () => {
        courses.forEach(course => {
            if (course.classList.contains("cse")) {
                course.style.display = "block";
            } else {
                course.style.display = "none";
            }
        });
        updateCredits();
    });

    updateCredits();

});