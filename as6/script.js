$(document).ready(function () {
  $(window).scroll(function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const cardsSection = $('.cards-section');
    const cardsContainer = $('.cards-container');

    // 當捲動到第一個螢幕高度時，顯示卡片區域
    if (scrollPosition > windowHeight * 0.8) {
      cardsSection.addClass('visible');
      cardsContainer.addClass('visible');
    } else {
      cardsSection.removeClass('visible');
      cardsContainer.removeClass('visible');
    }

    // 控制提示文字的顯示
    if (scrollPosition > windowHeight * 1.5) {
      $('.prompt-text').css('opacity', '1');
    } else {
      $('.prompt-text').css('opacity', '0');
    }

    // 控制卡片翻轉
    if (scrollPosition > windowHeight * 2.5) {
      $('.box').addClass('flipped');
      $('.prompt-text').css('opacity', '0');
    } else {
      $('.box').removeClass('flipped');
    }
  });
});
