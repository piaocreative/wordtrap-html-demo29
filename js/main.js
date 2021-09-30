$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.top_logos').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.toggle-btn').click(function() {
        $('.sidebar-content').addClass('active');
    });
    
    $('.close-btn').click(function() {
        $('.sidebar-content').removeClass('active');
    });

    $('.sidebar').click(function(e) {
        e.stopPropagation();
    });

    $('.sidebar-content').click(function() {
        $('.sidebar-content').removeClass('active');
    });

    $('.switch-title').click(function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
});