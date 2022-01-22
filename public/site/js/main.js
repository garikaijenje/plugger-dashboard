$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Menu
	==============================*/
	$('.header__btn').on('click', function() {
		$(this).toggleClass('header__btn--active');
		$('.sidebar').toggleClass('sidebar--active');
	});

	$('.header__search .close, .header__action--search button').on('click', function() {
		$('.header__search').toggleClass('header__search--active');
	});


	/*==============================
	Navigation
	==============================*/
	$('.main__nav--prev').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('prev.owl.carousel');
	});
	$('.main__nav--next').on('click', function() {
		var carouselId = $(this).attr('data-nav');
		$(carouselId).trigger('next.owl.carousel');
	});



	/*==============================
	Filter
	==============================*/
	$('.filter__item-menu li').each( function() {
		$(this).attr('data-value', $(this).text().toLowerCase());
	});

	$('.filter__item-menu li').on('click', function() {
		var text = $(this).text();
		var item = $(this);
		var id = item.closest('.filter').attr('id');
		$('#'+id).find('.filter__item-btn input').val(text);
	});


	/*==============================
	Scrollbar
	==============================*/
	var Scrollbar = window.Scrollbar;

	$('.sidebar__nav-link[data-toggle="collapse"]').on('click', function() {
		if ($('.sidebar__menu--scroll').length) {
			Scrollbar.init(document.querySelector('.sidebar__menu--scroll'), {
				damping: 0.1,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: false,
			});
		}
	});

	if ($('.dashbox__table-scroll').length) {
		Scrollbar.init(document.querySelector('.dashbox__table-scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.cart__table-scroll').length) {
		Scrollbar.init(document.querySelector('.cart__table-scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.dashbox__scroll').length) {
		Scrollbar.init(document.querySelector('.dashbox__scroll'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	if ($('.release__list').length) {
		Scrollbar.init(document.querySelector('.release__list'), {
			damping: 0.1,
			renderByPixels: true,
			alwaysShowTracks: true,
			continuousScrolling: true
		});
	}

	/*==============================
	Bg
	==============================*/
	$('.hero__slide, .event').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});


	/*==============================
	Player
	==============================*/
	$('.player__btn').on('click', function() {
		$(this).toggleClass('player__btn--active');
		$('.player').toggleClass('player--active');
	});



	/* single */
	$('a[data-link]').on('click', function(e){
		e.preventDefault();
		let link = $(this);
		run(link, audio[0]);
	});

	function run(link, player){
		if ($(link).hasClass('play')) {
			$(link).removeClass('play');
			audio[0].pause();
			$(link).addClass('pause');
		}
		else if ($(link).hasClass('pause')) {
			$(link).removeClass('pause');
			audio[0].play();
			$(link).addClass('play');
		}
		else {
			$('a[data-link]').removeClass('active');
			$('a[data-link]').removeClass('pause');
			$('a[data-link]').removeClass('play');
			$(link).addClass('active');
			$(link).addClass('play');
			player.src = $(link).attr('href');

			let title = $(link).data('title');
			let artist = $(link).data('artist');
			let img = $(link).data('img');
			$('.player__title').text(title);
			$('.player__artist').text(artist);
			$('.player__cover img').attr('src', img);
			audio[0].load();
			audio[0].play();
		}
	}

});