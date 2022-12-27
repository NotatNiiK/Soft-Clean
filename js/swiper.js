new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    breakpoints: {
        320: {
            spaceBetween: 10,
            slidesPerView: 1,
        },
        768: {
            spaceBetween: 10,
            slidesPerView: 2,
        },

        1056: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
})