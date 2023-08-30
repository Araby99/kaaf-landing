$('.owl-carousel').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    margin: 100,
    autoplay: true
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