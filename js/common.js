// JavaScript Document

$('.slider').slick({
	infinite: true,
	dots:false,
	slidesToShow: 2,
	slidesToScroll: 2,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
