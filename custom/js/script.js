$(document).ready(function () {
    $('.carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    });

    function changeButtonText(buttonClass, newText) {
        $(buttonClass).html(newText);
    }

    changeButtonText('.slick-prev', '&larr;');
    changeButtonText('.slick-next', '&rarr;');
})

