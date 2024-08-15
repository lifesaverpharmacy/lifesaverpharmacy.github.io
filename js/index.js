(function ($) {
  function initSlick () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3
      });
  }
  $(document).ready(function () {
    initSlick();
  });
})(jQuery);