let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.menu');
let bodyLock = document.querySelector('body');
document.addEventListener('click', burg);
function burg(event) {
    if (event.target.closest('.header-burger')) {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        bodyLock.classList.toggle('lock');
    }
    if (!event.target.closest('.header-burger') & !event.target.closest('.menu')) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        bodyLock.classList.remove('lock');
    }
}
document.addEventListener('keyup', function (event) {
    if (event.code === 'Escape') {
        burger.classList.remove('active');
        menu.classList.remove('active');
        bodyLock.classList.remove('lock');
    }
});

let clickMenu = document.querySelectorAll('.lick-with-menu');
clickMenu.forEach(function (click) {
    click.addEventListener('click', function () {
        click.classList.toggle('open');
    })
})


new Swiper('.reviews-slider', {
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
});




let clickSpoiler = document.querySelectorAll('.faq-spoiler-click');
clickSpoiler.forEach(function (spoiler) {
    spoiler.addEventListener('click', function () {
        spoiler.parentElement.classList.toggle('open');
    })
})

