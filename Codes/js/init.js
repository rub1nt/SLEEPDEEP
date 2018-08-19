/*
	Drift by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/

(function($) {

	skel.init({
		reset: 'full',
		
		plugins: {
			layers: {
				
				// Config.
					config: {
						transformTest: function() { return skel.vars.isMobile; }
					}
				
			
			}
		}
	});

	$(function() {
		
		var $window = $(window),
			$body = $('body'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 500);
			});



		// Scrolly links.
			$('.scrolly').scrolly();
		
		
			
		
		
	});

})(jQuery);