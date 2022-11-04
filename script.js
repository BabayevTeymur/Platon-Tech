const swiper2 = new Swiper (".mySwiper-2",{
    autoplay : {
        delay:4000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor:true,
    spaceBetween: 60,
    breakpoints:{
        576: {
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        }
    }
})