$(function () {
    "use strict";


    // Swiper
    let swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        cssMode: true,
        freeMode: true,
        slidesPerView: 3,
        grid: {
            rows: 1,
        },
        spaceBetween: 30,
        grabCursor: false,
        centeredSlides: false,
        effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        mousewheel: true,
        keyboard: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
        }
    });
    // Swiper
    

    // FancyBox
    Fancybox.bind('[data-fancybox="gallery"]', {
        dragToClose: false,
        closeButton: "top",
        Image: {
            zoom: false,
        },
        on: {
            initCarousel: (fancybox) => {
                const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
            "Carousel.change": (fancybox, carousel, to, from) => {
                const slide = carousel.slides[to];
                fancybox.$container.style.setProperty(
                    "--bg-image",
                    `url("${slide.$thumb.src}")`
                );
            },
        },
    });
    // FancyBox


    // MobiScroll JavaScript Calendar
    mobiscroll.setOptions({
        locale: mobiscroll.localeRu,
        theme: 'ios',
        themeVariant: 'light'
    });
    let calendar = mobiscroll.datepicker(element, {
        controls: ['calendar'],                                             // Displays the calendar view
        select: 'range',                                                    // Enables range selection
        showRangeLabels: true,                                              // Shows labels for range start and end
        rangeHighlight: true,                                               // Highlights the range
        touchUi: true,                                                      // Optimized for touch devices
        display: 'inline',
        onChange: function (event, inst) {
            const range = inst.getVal();                                    // Retrieves the selected range
            if (range) {
                console.log("Start date:", range[0]);
                console.log("End date:", range[1]);
            } else {
                console.log("No range selected.");
            }
        }
    });
    // ! Range Between Days
    // ? var now = new Date();
    // ? var week = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);
    // ? calendar.setVal([now, week]);
    // MobiScroll JavaScript Calendar
});