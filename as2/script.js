$(document).ready(function () {
    // 平滑滾動（除了首頁）
    $('.nav-link:not(.navbar-brand)').on('click', function (e) {
        e.preventDefault(); // 防止預設行為
        var target = $(this).attr('href'); // 獲取鏈接的目標區域
        $('html, body').animate({
            scrollTop: $(target).offset().top // 滾動到相應區域
        }, 800); // 800毫秒的動畫時間
    });

    // 當滾動到navbar碰到頁面頂部時，固定navbar
    var navbar = $('.navbar');
    var bannerHeight = $('.banner-div').outerHeight(); // Banner的高度
    $(window).scroll(function () {
        if ($(this).scrollTop() > bannerHeight) {
            navbar.addClass('fixed-top');
        } else {
            navbar.removeClass('fixed-top');
        }
    });
});









