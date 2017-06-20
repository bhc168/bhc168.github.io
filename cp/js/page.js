
(function () {
    // var test = GLOBAL.A.CAT.name;
    // alert(test);
    // alert(GLOBAL.B);

    // banner部分
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        loop: true,              //无缝滑动
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
})();