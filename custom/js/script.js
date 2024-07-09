$(document).ready(function () {

    let acc = $(".faq-qn-open-close");
    let i;

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

    for (i = 0; i < acc.length; i++) {
        $(acc[i]).on("click", function () {
            $(this).toggleClass("active");
            var panel = $(this).next();
            var icon = $(this).find(".open-close-icon");
            if (panel.css("display") === "flex") {
                icon.attr('src', 'assets/icons/faq-open.png')
                panel.css("display", "none");
            } else {
                icon.attr('src', 'assets/icons/faq-close.png')
                panel.css("display", "flex");
            }
        });
    }

})

