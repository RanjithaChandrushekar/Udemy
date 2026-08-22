document.addEventListener("DOMContentLoaded", function () {

    const courseTrack = document.getElementById("courseTrack");

    const rightArrow = document.getElementById("rightArrow");

    const leftArrow = document.getElementById("leftArrow");


    rightArrow.addEventListener("click", function () {

        const card = document.querySelector(".course-card");

        const cardWidth = card.offsetWidth;

        courseTrack.scrollBy({
            left: cardWidth + 20,
            behavior: "smooth"
        });

    });


    leftArrow.addEventListener("click", function () {

        const card = document.querySelector(".course-card");

        const cardWidth = card.offsetWidth;

        courseTrack.scrollBy({
            left: -(cardWidth + 20),
            behavior: "smooth"
        });

    });

});


const topicsContainer = document.getElementById("topicsContainer");

const rightTopicArrow =
    document.getElementById("rightTopicArrow");

const leftTopicArrow =
    document.getElementById("leftTopicArrow");


/* RIGHT ARROW */

rightTopicArrow.addEventListener("click", function () {

    const topicBox =
        document.querySelector(".topic-box");


    const scrollAmount =
        topicBox.offsetWidth + 10;


    topicsContainer.scrollBy({

        left: scrollAmount,

        behavior: "smooth"

    });

});


/* LEFT ARROW */

leftTopicArrow.addEventListener("click", function () {

    const topicBox =
        document.querySelector(".topic-box");


    const scrollAmount =
        topicBox.offsetWidth + 10;


    topicsContainer.scrollBy({

        left: -scrollAmount,

        behavior: "smooth"

    });

});


/* SHOW OR HIDE ARROWS */

topicsContainer.addEventListener("scroll", function () {

    const scrollLeft =
        topicsContainer.scrollLeft;


    const maxScroll =
        topicsContainer.scrollWidth -
        topicsContainer.clientWidth;


    /* LEFT ARROW */

    if (scrollLeft > 10) {

        leftTopicArrow.style.display = "block";

    } else {

        leftTopicArrow.style.display = "none";

    }


    /* RIGHT ARROW */

    if (scrollLeft >= maxScroll - 10) {

        rightTopicArrow.style.display = "none";

    } else {

        rightTopicArrow.style.display = "block";

    }

});