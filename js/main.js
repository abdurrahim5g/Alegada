// A $( document ).ready() block.
$(document).ready(function() {

	// smuth scroll JQuary start
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();
	  // Store hash
	  var hash = this.hash;
	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 1000, function(){
	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
	} // End if
	});
	// smuth scroll JQuary end

	// accordion start
   	$(function() {
		var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;

				var links = this.el.find('.article-title');
				links.on('click', {
						el: this.el,
						multiple: this.multiple
				}, this.dropdown)
		}

		Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
				$this = $(this),
						$next = $this.next();

				$next.slideToggle();
				$this.parent().toggleClass('open');

				if (!e.data.multiple) {
						$el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
				};
		}
		var accordion = new Accordion($('.accordion-container'), false);
	});
    // accordion end

    // magnificPopup custom js
	$('.play-btn').magnificPopup({type:'iframe'});


	// owl-carowsel custom js
	$('.attorneys_about').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		autoplaySpeed:1000,

	});




	// owl-carowsel custom js with hero-area 
	$('.hero-slide').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		autoplayHoverPause:true,
		autoplaySpeed:1000,
		nav:true,
		dots:false,
		navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"]

	});


	// owl-carowsel custom js with testmonial-slider
	$('.testmonial-slider').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplayHoverPause:true,
		autoplaySpeed:1000,
		nav:false,
		dots:true,

	});

	// owl-carowsel custom js with news-img-slider
	$('.news-img-slider').owlCarousel({
		items:1,
		loop:true,
		autoplay:false,
		nav:true,
		dots:false,
		navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"]
	});


	// counter up js
	$('.counter').counterUp({
	    delay: 5,
	    time: 1000,
	});



	// slick nav start
	$(function(){
        $('#menu').slicknav();
    });
	$('.menu').slicknav('toggle'); // Method to toggle the menu
	// slick nav end

	//wow js advance start --------------------------//
	wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated ', // default
      offset:       1000,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();
	//wow js advance end --------------------------//



	




	 

    



    
});














