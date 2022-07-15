/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {

		breakpoints.on('>medium', function () {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function () {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header.
	if ($banner.length > 0
		&& $header.hasClass('alt')) {

		$window.on('resize', function () { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function () { $header.removeClass('alt'); },
			enter: function () { $header.addClass('alt'); },
			leave: function () { $header.removeClass('alt'); }
		});

	}

})(jQuery);

/***********faqs**********/

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle("active")
	})
})

//testimonials carousel

let testim = document.getElementById('testim'),
	testimDots = Array.prototype.slice.call(document.getElementById('testim-dots').children),
	testimContent = Array.prototype.slice.call(document.getElementById('testim-content').children),
	testimLeftArrow = document.getElementById('left-arrow'),
	testimRightArrow = document.getElementById('right-arrow'),
	testimSpeed = 4500,
	currentSlide = 0,
	currentActive = 0,
	testimTimer

window.onload = () => {

	function playSlide(slide) {
		for (let k = 0; k < testimDots.length; k++) {
			testimContent[k].classList.remove('active')
			testimContent[k].classList.remove('inactive')
			testimDots[k].classList.remove('active')
		}
		if (slide < 0) {
			slide = currentSlide = testimContent.length - 1
		}
		if (slide > testimContent.length - 1) {
			slide = currentSlide = 0
		}
		if (currentActive != currentSlide) {
			testimContent[currentActive].classList.add('inactive')
		}
		testimContent[slide].classList.add('active')
		testimDots[slide].classList.add('active')

		currentActive = currentSlide

		clearTimeout(testimTimer)
		testimTimer = setTimeout(() => {
			playSlide(currentSlide += 1)
		}, testimSpeed)
	}
	testimLeftArrow.addEventListener('click', () => {
		playSlide(currentSlide -= 1)
	})
	testimRightArrow.addEventListener('click', () => {
		playSlide(currentSlide += 1)
	})

	for (let l = 0; l < testimDots.length; l++) {
		testimDots[l].addEventListener('click', function () {
			playSlide(currentSlide = testimDots.indexOf(this));
		})
	}
	playSlide(currentSlide)
}

//portfolio

const imageNode = document.querySelectorAll('.image-container img')

const imageArray = Array.from(imageNode).map(e => e.src)


imageNode.forEach(image => {
	image.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block'
		document.querySelector('.popup-image img').src = image.getAttribute('src')
		document.querySelector('#header').style.display = 'none'
	}
})

document.querySelector('.popup-image span').onclick = () => {
	document.querySelector('.popup-image').style.display = 'none'
	document.querySelector('#header').style.display = 'initial'
}