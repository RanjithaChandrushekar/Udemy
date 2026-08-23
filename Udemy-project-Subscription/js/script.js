// ================= MOBILE MENU =================

function toggleMenu() {

    const nav = document.getElementById("mainNav");

    nav.classList.toggle("active");

}


// ================= SEARCH COURSES =================

function searchCourses() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const courses = document.querySelectorAll(".course-card");

    courses.forEach(function(course) {

        const title = course
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (title.includes(input)) {

            course.style.display = "block";

        } else {

            course.style.display = "none";

        }

    });

}


// ================= ADD TOPIC =================

function addTopic() {

    const input = document.getElementById("topicInput");

    const topic = input.value.trim();

    if (topic === "") {

        alert("Please enter a topic.");

        return;
    }


    const topicList = document.getElementById("topicList");

    const topicElement = document.createElement("span");

    topicElement.textContent = topic;

    topicList.appendChild(topicElement);

    input.value = "";

}