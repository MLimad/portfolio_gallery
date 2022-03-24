$(document).ready(function(){

    $('.gallery-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
	});


    $(".nav li").click(function(){
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });

    // Filter Gallery
    $(".nav-list").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
          $(".img-gallery").show('1000')
      } else {
          $(".img-gallery").not('.' + value).hide('1000');
          $(".img-gallery").filter('.' + value).show('1000');
      }

  });


  


  });

