const teacherTexts = document.getElementById("teacher").getElementsByClassName("text");
const studentTexts = document.getElementById("student").getElementsByClassName("text");
const change = event => {
    // if (event.type == "dragged") {
    //     if (event.target.classList.contains("teacher-carousel")) {
    //         $(".teacher-carousel").trigger('stop.owl.autoplay');
    //     }
    // }
    if (event.target.classList.contains("teacher-carousel")) {
        const active = event.item.index - 2;
        for (let i = 0; i < teacherTexts.length; i++) {
            if (i == active || i == active - event.item.count) {
                teacherTexts[i].classList.add("carousel-item-animation");
                teacherTexts[i].classList.remove("d-none");
            } else {
                teacherTexts[i].classList.remove("carousel-item-animation");
                teacherTexts[i].classList.add("d-none");
            }
        }
    } else if (event.target.classList.contains("student-carousel")) {
        const active = event.item.index - 2;
        for (let i = 0; i < studentTexts.length; i++) {
            if (i == active || i == active - event.item.count) {
                studentTexts[i].classList.add("carousel-item-animation");
                studentTexts[i].classList.remove("d-none");
            } else {
                studentTexts[i].classList.remove("carousel-item-animation");
                studentTexts[i].classList.add("d-none");
            }
        }
    }
}
$('.owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    onDragged: change,
    onTranslate: change
});
$('.next-teacher').click(() => {
    $('.teacher-carousel').trigger('next.owl.carousel');
})
$('.prev-teacher').click(() => {
    $('.teacher-carousel').trigger('prev.owl.carousel');
})
$('.next-student').click(() => {
    $('.student-carousel').trigger('next.owl.carousel');
})
$('.prev-student').click(() => {
    $('.student-carousel').trigger('prev.owl.carousel');
})