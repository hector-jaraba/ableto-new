// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//vars changin Colors

var colorBlue = "#3e8c8c";
var colorWhite = "#ffffff";
var urlLogoBlue = "assets/img/logo-blue.png";
var urlLogoWhite = "assets/img/logo.png";

//fullpage
$('#fullpage').fullpage({
    //Navigation
    menu: true,
    anchors:['home', 'what','app','contact'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['inicio','hallo', 'servicios','el equipo','contacto','creditos'],
    showActiveTooltips: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',


    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    normalScrollElements: '#element1, #element2',
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: false,
    resize : false,
    paddingTop: '0',
    paddingBottom: '0',
    fixedElements: '#header, .footer',
    responsive: 1080,

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    //events
    onLeave: function(index, nextIndex, direction){
      var color = "#3e8c8c";

      //using index
      if( index == 2 || index == 4 ){
        $('.path-rotation:before').css("background", colorWhite );
        $('.burger-bun-top').css("background", colorWhite );
        $('.burger-bun-bot').css("background", colorWhite );
        $('.burger-filling').css("background", colorWhite );
        $('.brandandlogo .lang ul li a').css("color", colorWhite );
        $('.brandandlogo .lang ul').css("color", colorWhite );
        $('#logo').attr("src", urlLogoWhite );

      }
      else{
        $('.path-rotation:before').css("background", colorBlue);
        $('.burger-bun-top').css("background", colorBlue );
        $('.burger-bun-bot').css("background", colorBlue );
        $('.burger-filling').css("background", colorBlue );
        $('.is-open .burger-bun-top').css("background", colorWhite );
        $('.is-open .burger-bun-bot').css("background", colorWhite );
        $('.is-open .burger-filling').css("background", colorWhite );
        $('.brandandlogo .lang ul li a').css("color", colorBlue );
        $('.brandandlogo .lang ul').css("color", colorBlue );
        $('#logo').attr("src",urlLogoBlue);

      }

    },
    afterLoad: function(anchorLink, index){


      if( index == 2 || index == 4 ){
        $('.path-rotation:before').css("background", colorBlue);
        $('.burger-bun-top').css("background", colorBlue );
        $('.burger-bun-bot').css("background", colorBlue );
        $('.burger-filling').css("background", colorBlue );
        $('.brandandlogo .lang ul li a').css("color", colorBlue );
        $('.brandandlogo .lang ul').css("color", colorBlue );
        $('#logo').attr("src",urlLogoBlue);
      }
      else{
        $('.path-rotation:before').css("background", colorWhite );
        $('.burger-bun-top').css("background", colorWhite );
        $('.burger-bun-bot').css("background", colorWhite );
        $('.burger-filling').css("background", colorWhite );
        $('.brandandlogo .lang ul li a').css("color", colorWhite );
        $('.brandandlogo .lang ul').css("color", colorWhite );
        $('#logo').attr("src", urlLogoWhite );
      }

        },
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction){}
});



//slider

var nav = document.querySelector( '.md-nav-icons' );
var el = document.querySelector( '.md-slider' ),
				settings = {
					autoplay : true,
					interval : 3000,
					devices : [
						{ cName : 'md-device-1', canRotate : false, imgsrc : 'assets/images/site1.jpg' },
						{ cName : 'md-device-2', canRotate : false, imgsrc : 'assets/images/site2.jpg' },
						{ cName : 'md-device-3', canRotate : true, imgsrc : 'assets/images/site3.jpg', rotatedsrc : 'images/site3r.jpg' },
						{ cName : 'md-device-4', canRotate : true, imgsrc : 'assets/images/site4.jpg', rotatedsrc : 'images/site4r.jpg' }
					]
				},
				devicesTotal = settings.devices.length,
				ds = MorphingDevice( el, settings );

			// create navigation triggers

      var classIcon = "fa fa-desktop";
			for( var i = 0; i < devicesTotal; ++i ) {

        switch (i) {
          case 0:
            classIcon = "fa fa-desktop";
            break;
          case 1:
            classIcon = "fa fa-laptop ";
            break;
          case 2:
            classIcon = "fa fa-tablet";
            break;
          case 3:
            classIcon = "fa fa-mobile";
            break;
          default:
            classIcon = "fa fa-desktop";
        }

				var trigger = document.createElement( 'a' );
				trigger.className = i === 0 ? 'md-current' : '';
				trigger.setAttribute( 'href', '#' );
				trigger.setAttribute( 'pos', i );
        var icon = document.createElement( 'i' );
        icon.className =  classIcon;
				trigger.onclick = function( event ) {

					ds.stopSlideshow();
					var pos = Number( this.getAttribute( 'pos' ) );
					if( pos === ds.getCurrent() ) {
						return false;
					}
					ds.updateCurrentTrigger( this );
					ds.setCurrent( pos );
					ds.changeDevice();
					return false;

				};
				nav.appendChild( trigger );
        trigger.appendChild( icon );

			}


			if( settings.autoplay ) {
				ds.startSlideshow();
			}
