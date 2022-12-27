$(document).ready(function () {
    $('.spoilers__title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).find('.spoilers__arrow').toggleClass('active');
    });
});
