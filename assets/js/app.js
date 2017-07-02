$(_ => {
  $(window).scroll(function(e) {
    const scrollTop = $(window).scrollTop();
    if (scrollTop > 100) {
      $('.header__nav--hidden1').show();
      $('.header__nav--hidden3').show();
      $('.header__nav').addClass('header__hidden');
    } else {
      $('.header__nav').removeClass('header__hidden');
      $('.header__nav--hidden1').hide();
      $('.header__nav--hidden3').hide();
    }
  });
})
