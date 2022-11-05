const showMore=document.querySelector('#show_more'),
      showLess=document.querySelector('#show_less')
var a=0
showMore.addEventListener('click',()=>{
    if(a===0){
        // showLess.style.display='flex'
        showLess.style.visibility='visible'
        showLess.style.margin='60px auto'
        a=a+1
    }else{
        // showLess.style.display='none'
        showLess.style.visibility='hidden'
        let b=20
        while (b>0){
            b--
            if(b===1){
                showLess.style.margin='-45px auto'
            }
        }
        // showLess.style.margin='-40px auto'
        a=a-1
    }
})

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

const scrollUp=document.querySelector('.scroll_up')

window.addEventListener('scroll',()=>{
    if(window.scrollY>500){
        scrollUp.style.display='flex'
    }else{
        scrollUp.style.display='none'
    }
})

scrollUp.addEventListener('click',()=>{
    window.scroll({
        top:0,
        behavior: "smooth"
    })
})