/**
 * main3.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		overlay = document.getElementById( 'overlay' ),
		elementMenu = document.querySelectorAll( '.menu ul li' ),
		isOpen = false,
		trigger = $('#hamburger'),

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		pathOpen = morphEl.getAttribute( 'data-morph-open' ),
		isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		overlay.addEventListener( 'click', toggleMenu );
		if( closebtn ) {

			closebtn.addEventListener( 'click', toggleMenu );






		}

		for(var i = 0; i < elementMenu.length; i++)
		{
			elementMenu[i].addEventListener( 'click', toggleMenu );
		}



		// close the menu element if the target it´s not the menu element or one of its descendants..
		/*content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );*/
	}
	var color;
	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;

		if( isOpen ) {
			document.body.style.overflow = "visible";
			$.fn.fullpage.setAllowScrolling(true);
			document.querySelector( '.burger-bun-top' ).style.background = color;
			document.querySelector( '.burger-bun-bot' ).style.background = color;
			$(".overlay-ab").css("display","none");
			openbtn.className = "";
			openbtn.className ='hamburglar is-closed';
			classie.remove( bodyEl, 'show-menu' );
			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false;
			}, 300 );
		}
		else {
			document.body.style.overflow = "hidden";
			$.fn.fullpage.setAllowScrolling(false);
			color = document.querySelector( '.burger-bun-top' ).style.background;
			document.querySelector( '.burger-bun-top' ).style.background="white";
			document.querySelector( '.burger-bun-bot' ).style.background="white";
			$(".overlay-ab").css("display","block");
			openbtn.className = "";
			openbtn.className ='hamburglar is-open';
			classie.add( bodyEl, 'show-menu' );
			// animate path
			path.animate( { 'path' : pathOpen }, 400, mina.easeinout, function() { isAnimating = false; } );
		}
		isOpen = !isOpen;
		return color;
	}

	init();

})();
