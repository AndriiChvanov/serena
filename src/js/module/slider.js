function slide(selector, inner, slide, slidess, btn, btn1) {
	const trigger = document.querySelectorAll(selector);
	for (let i = 0; i < trigger.length; i++) {
		const width = window.getComputedStyle(trigger[i].querySelector(inner))
			.width;
		const slides = trigger[i].querySelectorAll(slide);
		const slidesField = trigger[i].querySelector(slidess);
		const dots = trigger[i].querySelectorAll(btn);
		const dots1 = trigger[i].querySelectorAll(btn1);
		slidesField.style.width = 100 * slides.length + "%";
		slides.forEach((slide) => {
			slide.style.width = width;
		});

		let offset = 0;
		let slideIndex = 0;

		const sliderId = trigger[i].getAttribute("id");
		const dotsSlide = document.querySelectorAll(`#${sliderId} ${btn}`);
		const dotsSlide1 = document.querySelectorAll(`#${sliderId} ${btn1}`);
		for (let a = 0; a < dotsSlide.length; a++) {
			dotsSlide[a].addEventListener("click", (e) => {
				e.preventDefault();
				const slideTo = e.target.getAttribute("data-slide-to");
				slideIndex = slideTo;
				offset = +width.replace(/\D/g, "") * slideTo;
				slidesField.style.transform = `translateX(-${offset}px)`;
				dots.forEach((dot) => dot.classList.remove("active"));
				dots[slideIndex].classList.add("active");
			});
		}
		for (let a = 0; a < dotsSlide1.length; a++) {
			dotsSlide1[a].addEventListener("click", (e) => {
				e.preventDefault();
				const slideTo = e.target.getAttribute("data-slide-to");
				slideIndex = slideTo;
				offset = +width.replace(/\D/g, "") * slideTo;
				slidesField.style.transform = `translateX(-${offset}px)`;
				dots1.forEach((dot) => dot.classList.remove("active"));
				dots1[slideIndex].classList.add("active");
			});
		}
	}
}
export{slide};