


$('.button-menu').on('click', function(event) {
	event.preventDefault();
	$('.top-nav-menu').toggleClass('top-nav-menu-active')
	
});
$('.slider-slick').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {

        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 680,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    
});


$('.slider-numbers').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {

        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 970,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    
});


$('.slider-classic').slick({

  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {

        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 700,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    
});

$('.blog-slider').slick({
  
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {

        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 780,
      settings: {
        centerPadding: '40px',
        slidesToShow: 1 
      }
    }
  ]
    
});




