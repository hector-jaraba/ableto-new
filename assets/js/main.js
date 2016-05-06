$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};




$( ".inline span" ).queue(function(){
  $(this).mouseenter(
    function() {
      $(this).each(function(){
        var sign = (Math.floor((Math.random() * 10) + 1) < 5) ? '+' : '-';
        $(this).css({
          "transition": "1s linear",
          "top": sign+(Math.random()*(100 * Math.floor((Math.random() * 10) + 1) ))+"px",
          "left": (Math.random()*(100 * Math.floor((Math.random() * 10) + 1) ))+"px",
          "right": sign+(Math.random()*(100 * Math.floor((Math.random() * 10) + 1) ))+"px",
          "bottom": (Math.random()*(100 * Math.floor((Math.random() * 10) + 1) ))+"px",
          "-webkit-transform": "rotate(600deg)",
          "opacity": "0.3"
        });

      })
      setTimeout(1000);
      setTimeout( function() {
        $(".inline span").css({
          "transition": "1s linear",
          "top": "0px",
          "left": "0px",
          "right": "0px",
          "bottom": "0px",
          "-webkit-transform": "rotate(0deg)",
          "opacity": "1"
        })
      },1500);

    }

  );

})

/*
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();

*/
