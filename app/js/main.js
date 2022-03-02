const swiper = new Swiper('.card-first-slider', {
	observer: true,
	observeParents: true,
	speed: 800,
	slidesPerView: 3,
	spaceBetween: 55,

	pagination: {
		el: '.first-slider-pagination',
		type: 'bullets',
		clickable: true,
	  },

	navigation: {
		nextEl: '.first-slider-next',
		prevEl: '.first-slider-prev',
	  },

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	

});