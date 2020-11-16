function cruise() {
	const a = document.querySelectorAll(".cruise__menu-price-l p img");
	for (let i = 0; i < a.length; i++) {
		a[i].addEventListener("click", (e) => {
			const b = "url(icons/menuOkHov.svg)";
			a[i].style.content = b;
			console.log(a[i].style.content);
		});
	}
	const p = document.querySelector(".cruise__menu-price-r-plus");
	const m = document.querySelector(".cruise__menu-price-r-minus");
	const s = document.querySelector(".cruise__menu-price-r span");
	const d = document.querySelector(".cruise__menu-price-buy span");
	p.addEventListener("click", (e) => {
		let a = parseInt(s.innerHTML);
		a = parseInt(s.innerHTML) + 1;
		s.innerHTML = a;
		d.innerHTML = parseInt(d.innerHTML) + 32500 +" " +  "₽";
	});
	m.addEventListener("click", (e) => {
		let a = parseInt(s.innerHTML);
		a = parseInt(s.innerHTML) - 1;
		s.innerHTML = a;
		d.innerHTML = parseInt(d.innerHTML) - 32500 +" " +"₽";
	});
}

export { cruise };
