var slider = $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager',
    auto: true
});

$("#bx-pager li").hover(function () {
    var newSlideNo = $($(this).find("a")[0]).attr('data-slide-index');
    if (newSlideNo != slider.getCurrentSlide()) {
        slider.goToSlide(newSlideNo);
    }
});