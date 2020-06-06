$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            900: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    })
});