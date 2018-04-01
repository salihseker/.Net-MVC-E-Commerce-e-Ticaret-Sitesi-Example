(function ( $ ) {

	"use strict";

	$.tesla_responsive = function( options ) {

		var $window;

		var length;

		var index;

		var previous;

		var resize;

		if ($.isArray(options)) {

		    $window = $(window);

		    length = options.length;

		    if(length){

		    	options.sort(function(a, b){

		    		return b.width - a.width;

		    	});

		    	resize = function () {

		    	    var width = $window.width();

		    	    var i = 0;

		    	    while(i < length && width < options[i].width){

		    	    	i++;

		    	    }

		    	    index = i < length ? i : undefined;

		    	    if (previous !== index) {

		    	        previous = index;

		    	        if(undefined !== index){

		    	        	options[index].action();

		    	        }

		    	    }

		    	};

		    	$window.resize(resize);

		    	resize();

		    }

		}

	};
	
	$.fn.tesla_slider = function( options ) {

		return this.each(function(i, e){

			var $e = $(e);

			var settings = $.extend({

				item: '.item',
				next: '.next',
				prev: '.prev',
				container: $e,
				autoplay: true,
				autoplayTime: 4000,
				bullets: '[data-tesla-plugin="bullets"]',
				//active: 'active' //class for current slide - to be implemented

			},options,{

				item: $e.attr('data-tesla-item'),
				next: $e.attr('data-tesla-next'),
				prev: $e.attr('data-tesla-prev'),
				container: $e.attr('data-tesla-container'),
				autoplay: $e.attr('data-tesla-autoplay')!=="false",
				autoplayTime: $e.attr('data-tesla-autoplay-time') ? parseInt($e.attr('data-tesla-autoplay-time'), 10) : $e.attr('data-tesla-autoplay-time'),
				bullets: $e.attr('data-tesla-bullets'),
				active: $e.attr('data-tesla-active')

			});

			var container = settings.container instanceof jQuery ? settings.container : $e.find(settings.container);

			var items = container.find(settings.item);

			var bullets = $e.find(settings.bullets);

			var next = $e.find(settings.next);

			var prev = $e.find(settings.prev);

			var max = items.length - 1;

			var index = 0;

			var prev_action;

			var next_action;

			var goto_action;

			var process;

			var autoplay_interval;

			var autoplay_timeout;

			var autoplay_play;

			var autoplay_stop;

			var autoplay_resume;

			prev_action = function(){

				var index_old = index;
				var index_new;

				index--;

				if( index < 0 )
					index = max;

				index_new = index;

				container.css({
					height: Math.max(items.eq(index_old).outerHeight(true), items.eq(index_new).outerHeight(true))
				});

				items.eq(index_old).stop(true, true).fadeOut(1000, function(){
					
				});
				items.eq(index).stop(true, true).fadeIn(1000, function(){
					container.css({
						height: items.eq(index_new).outerHeight(true)
					});
				});

				bullets.trigger('teslaSliderChange', {'index': index});

			};

			next_action = function(){

				var index_old = index;
				var index_new;

				index++;

				if( index > max )
					index = 0;

				index_new = index;

				container.css({
					height: Math.max(items.eq(index_old).outerHeight(true), items.eq(index_new).outerHeight(true))
				});

				items.eq(index_old).stop(true, true).fadeOut(1000, function(){

				});
				items.eq(index).stop(true, true).fadeIn(1000, function(){
					container.css({
						height: items.eq(index_new).outerHeight(true)
					});
				});

				bullets.trigger('teslaSliderChange', {'index': index});

			};

			goto_action = function(goto_index){

				if(goto_index === index) return;

				var index_old = index;
				var index_new;

				index = goto_index;

				if( index > max )
					index = 0;

				if( index < 0 )
					index = max;

				index_new = index;

				container.css({
					height: Math.max(items.eq(index_old).outerHeight(true), items.eq(index_new).outerHeight(true))
				});

				items.eq(index_old).stop(true, true).fadeOut(1000, function(){

				});
				items.eq(index).stop(true, true).fadeIn(1000, function(){
					container.css({
						height: items.eq(index_new).outerHeight(true)
					});
				});

			};

			process = function(){

				container.css({
					position: 'relative',
					height: items.eq(0).outerHeight(true)
				});
				items.css({
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0
				});
				items.filter(':gt(0)').css({
					display: 'none'
				});

				$(window).resize(function(){

					container.css({
						height: items.eq(0).outerHeight(true)
					});

				});

				prev.click(function(ev){

					autoplay_stop();
					prev_action();
					autoplay_resume();

					if(ev.preventDefault)
						ev.preventDefault();
					else
						return false;

				});

				next.click(function(ev){

					autoplay_stop();
					next_action();
					autoplay_resume();

					if(ev.preventDefault)
						ev.preventDefault();
					else
						return false;

				});

				bullets.on('teslaBulletsClick', function(ev, data){

					autoplay_stop();
					goto_action(data.index);
					autoplay_resume();

					bullets.trigger('teslaSliderChange', {'index': data.index});

					if(ev.preventDefault)
						ev.preventDefault();
					else
						return false;

				});

				items.hover(function(){

					autoplay_stop();

				},function(){

					autoplay_resume();

				});

				autoplay_play = function(){

					if(!settings.autoplay) return;

					autoplay_interval = setInterval(next_action, settings.autoplayTime);

				};

				autoplay_stop = function(){

					if(!settings.autoplay) return;

					clearInterval(autoplay_interval);
					clearTimeout(autoplay_timeout);

				};

				autoplay_resume = function(){

					if(!settings.autoplay) return;

					autoplay_timeout = setTimeout(autoplay_play, settings.autoplayTime);

				};

				autoplay_play();

			};

			if( max > 0 ){

				if(imagesLoaded){

					imagesLoaded(container[0], function(){

						process();

					});

				}else{

					process();

				}

			}

		});

	};

	$.fn.tesla_masonry = function( options ) {

		return this.each(function(i, e){

			var $e = $(e);

			var settings = $.extend({

				filters: '[data-tesla-plugin="filters"]'

			},options,{

				filters: $e.attr('data-tesla-filters')

			});

			var filters = $(settings.filters);

			var items = $e.children();

			var process = function(){

				$e.masonry();

				if(filters.length){

					filters.on('teslaFiltersChange', function(ev, data){

						var i;

						var n = data.categories.length;

						var selector = '';

						var masonry_object = $e.data('masonry');

						for(i=0; i<n; i++){

							if(i)
								selector += ', ';

							selector += '.' + data.categories[i];

						}

						if(''===selector){

							masonry_object.options.itemSelector = undefined;

							items.stop(true, true).fadeIn(400);

						}else{

							masonry_object.options.itemSelector = selector;

							items.stop(true, true);

							items.filter(selector).fadeIn(400);

							items.not(selector).fadeOut(400);

						}

						masonry_object.reloadItems();

						masonry_object.layout();

					});

				}

			};

			if($.fn.masonry){

				if(imagesLoaded){

					imagesLoaded(e, function(){

						process();

					});

				}else{

					process();

				}

			}

		});

	};

	$.fn.tesla_filters = function( options ) {

		return this.each(function(i, e){

			var $e = $(e);

			var settings = $.extend({

				categories: '[data-category]'

			},options,{

				categories: $e.attr('data-tesla-category')

			});

			var categories = $e.find(settings.categories);

			categories.click(function(ev){

				var t = $(this);

				var cat_array;

				if(t.hasClass('active')){

					if(''===t.attr('data-category')){

						categories.filter('[data-category=""]').removeClass('active');

						categories.filter('[data-category!=""]').addClass('active');

					}else{

						categories.filter(t).removeClass('active');

						if(!categories.filter('.active').length)
							categories.filter('[data-category=""]').addClass('active');
						
					}

				}else{

					if(''===t.attr('data-category')){

						categories.filter('[data-category=""]').addClass('active');

						categories.filter('[data-category!=""]').removeClass('active');

					}else{

						categories.filter('[data-category=""]').removeClass('active');

						categories.filter(t).addClass('active');
						
					}

				}

				cat_array = categories.filter('.active[data-category!=""]').map(function(){

					return $(this).attr('data-category');

				}).get();

				$e.trigger('teslaFiltersChange', {'categories': cat_array});

				if(ev.preventDefault)
					ev.preventDefault();
				else
					return false;

			});

		});

	};

	$.fn.tesla_bullets = function( options ) {

		return this.each(function(i, e){

			var $e = $(e);

			var settings = $.extend({

				bullets: '>*',
				hover: false

			},options,{

				bullets: $e.attr('data-tesla-selector'),
				hover: $e.attr('data-tesla-hover')

			});

			var bullets = $e.find(settings.bullets);

			var hover = '0' === settings.hover || ( 'string' === typeof(settings.hover) && 'false' === settings.hover.toLowerCase() ) ? false : Boolean(settings.hover);

			var action = function(ev){

				$e.trigger('teslaBulletsClick', {'index': bullets.index(this)});

			};

			bullets.eq(0).addClass('active');

			bullets.click(action);

			if(hover) bullets.mouseover(action);

			$e.on('teslaSliderChange', function(ev, data){

				bullets.filter('.active').removeClass('active');

				bullets.eq(data.index).addClass('active');

			});

		});

	};

	$.fn.tesla_carousel = function( options ) {

		return this.each(function(i, e){

			var $e = $(e);

			var settings = $.extend({

				item: '.item',
				next: '.next',
				prev: '.prev',
				container: $e,
				rotate: true,
				autoplay: true

			},options,{

				item: $e.attr('data-tesla-item'),
				next: $e.attr('data-tesla-next'),
				prev: $e.attr('data-tesla-prev'),
				container: $e.attr('data-tesla-container'),
				rotate: $e.attr('data-tesla-rotate'),
				autoplay: $e.attr('data-tesla-autoplay')

			});

			var container = settings.container instanceof jQuery ? settings.container : $e.find(settings.container);

			var items = container.find(settings.item);

			var next = $e.find(settings.next);

			var prev = $e.find(settings.prev);

			var max;

			var visible;

			var index = 0;

			var prev_action, prev_action_move;

			var next_action, next_action_move;

			var action_0, action_768, action_992, action_1200, action_responsive, action_adjust;

			var process;

			var responsive;

			var item_width;

			var item_height;

			var rotate = '0' === settings.rotate || ( 'string' === typeof(settings.rotate) && 'false' === settings.rotate.toLowerCase() ) ? false : Boolean(settings.rotate);

			var rotate_interval;

			var autoplay = '0' === settings.autoplay || ( 'string' === typeof(settings.autoplay) && 'false' === settings.autoplay.toLowerCase() ) ? false : Boolean(settings.autoplay);

			var autoplay_interval, autoplay_timeout;

			var autoplay_start, autoplay_stop, autoplay_resume;

			autoplay_start = function(){

				if(!autoplay) return;

				// clearTimeout(autoplay_timeout);
				// clearInterval(autoplay_interval);

				autoplay_stop();

				if(undefined !== rotate_interval)
					autoplay_interval = 0;
				else
					autoplay_interval = setInterval(next_action, 1000);

			};

			autoplay_stop = function(){

				if(!autoplay) return;

				clearInterval(autoplay_interval);
				autoplay_interval = undefined;

				clearTimeout(autoplay_timeout);
				autoplay_timeout = undefined;

			};

			autoplay_resume = function(){

				if(!autoplay) return;

				// clearTimeout(autoplay_timeout);
				// clearInterval(autoplay_interval);

				autoplay_stop();

				if(undefined !== rotate_interval)
					autoplay_timeout = 0;
				else
					autoplay_timeout = setTimeout(autoplay_start, 4000);

			};

			prev_action_move = function(){

				if(index > 0){

					items.eq(index + visible - 1).css({

						'-webkit-transform': 'scale(0)'

					});

					index--;

					items.eq(index).css({

						'-webkit-transform': 'scale(1)'

					});

					container.css({ left: String( - index * 100 / visible ) + '%'  });

					return true;

				}else return false;

			};

			prev_action = function(){

				if(undefined !== rotate_interval) return;

				if(prev_action_move()){

					// good

				}else{

					if(rotate && index < max){

						clearInterval(rotate_interval);

						rotate_interval = setInterval(function(){

							if(!next_action_move()){

								clearInterval(rotate_interval);
								rotate_interval = undefined;

							}

						}, 200);

					}

				}

			};

			next_action_move = function(){

				if(index < max){

					items.eq(index).css({

						'-webkit-transform': 'scale(0)'

					});

					index++;

					items.eq(index + visible - 1).css({

						'-webkit-transform': 'scale(1)'

					});

					container.css({ left: String( - index * 100 / visible ) + '%'  });

					return true;

				}else return false;

			};

			next_action = function(){

				if(undefined !== rotate_interval) return;

				if(next_action_move()){

					// good

				}else{

					if(rotate && index > 0){

						clearInterval(rotate_interval);

						clearInterval(autoplay_interval);
						clearTimeout(autoplay_timeout);

						rotate_interval = setInterval(function(){

							if(!prev_action_move()){

								clearInterval(rotate_interval);
								rotate_interval = undefined;

								if(undefined !== autoplay_interval) autoplay_start();
								if(undefined !== autoplay_timeout) autoplay_resume();

							}

						}, 200);

					}

				}

			};

			action_0 = function(){

				// console.log('0-767');

			    action_responsive();

			};

			action_768 = function(){

				// console.log('768-991');

			    action_responsive();

			};

			action_992 = function(){

				// console.log('992-1199');

			    action_responsive();

			};

			action_1200 = function(){

				// console.log('1200+');

			    action_responsive();

			};

			action_responsive = function(){

				item_height = Math.max.apply(null, items.map(function(){

					return $(this).outerHeight(true);

				}).get());

			    item_width = items.outerWidth(true);

			    visible = Math.round( container.width() / item_width );

			    max = Math.max(items.length - visible, 0);

			    index = Math.min(index, max);

				container.css({

					position: 'relative',
					height: item_height,
					'-webkit-transition': 'left 0.4s ease-out',
					left: String( - index * 100 / visible ) + '%'

				});

				items.css({

					position: 'absolute',
					top: 0,
					'-webkit-transition': '-webkit-transform 0.4s ease-out'

				}).each(function(i){

					$(this).css({ left: String( i * 100 / visible ) + '%'  });

				});

				action_adjust();

			};

			action_adjust = function(){

				items.filter(':gt('+String(visible)+'),:eq('+String(visible)+'),:lt('+String(index)+')').css({ '-webkit-transform': 'scale(0)' });

				items.filter(':gt('+String(index)+'):lt('+String(visible)+'),:eq('+String(index)+')').css({ '-webkit-transform': 'scale(1)' });

			}

			responsive = [ { width: 0, action: action_0 }, { width: 768, action: action_768 }, { width: 992, action: action_992 }, { width: 1200, action: action_1200 } ];

			process = function(){

				$.tesla_responsive(responsive);

				prev.click(function(ev){

					autoplay_stop();
					autoplay_resume();

					prev_action();

					if(ev.preventDefault)
						ev.preventDefault();
					else
						return false;

				});

				next.click(function(ev){

					autoplay_stop();
					autoplay_resume();

					next_action();

					if(ev.preventDefault)
						ev.preventDefault();
					else
						return false;

				});

				items.click(function(ev){

					autoplay_stop();
					autoplay_resume();

				})

				autoplay_start();

			};

			if(imagesLoaded){

				imagesLoaded(container[0], function(){

					process();

				});

			}else{

				process();

			}

		});

	};

	$(function(){

		$('[data-tesla-plugin="slider"]').tesla_slider();

		$('[data-tesla-plugin="carousel"]').tesla_carousel();

		$('[data-tesla-plugin="masonry"]').tesla_masonry();

		$('[data-tesla-plugin="filters"]').tesla_filters();

		$('[data-tesla-plugin="bullets"]').tesla_bullets();

	});

}( jQuery ));