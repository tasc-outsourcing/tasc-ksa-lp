$(document).ready(function() {
    secHeight();
	if ($(window).width() > 767) {
		gridAdjust("#clients-grid .card");
		gridAdjust("#portal .card");
	 }

});

function secHeight() {
    var h = $('#main-header').outerHeight();
    minHeight(h);
	$('body').css('padding-top', h + 'px');
}

function minHeight(h) {
	$(".nav-scroll").click(function(e) {
		e.preventDefault();
		var elem = $(this);
		var id = elem.attr('href');
		scrollToID(id);
	});

	var scrollToID = function(id) {
		$('html, body').animate({
			scrollTop: $(id).offset().top - h
		}, 300);
		return false;
	}
}

function gridAdjust(targertSteing) {
	var targertHight = $(targertSteing);
	  targertHight.css('height', 'auto');
	   var heights = [];
	   targertHight.each(function() {
		 var elem = $(this);
		 var height = elem.outerHeight();
		 heights.push(height);
	   });
	   heights = heights.sort(function(a, b) {
		 return b - a
	   });
	   var tallest = heights[0];
	   targertHight.css('height', tallest + 'px');
  }


mobileOnlySlider(".mySlider", true, false, 767);
mobileOnlySlider(".trustSlider", true, false, 767);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick"
      }
    ]
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });

} // Mobile Only Slider
