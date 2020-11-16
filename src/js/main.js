import {slide }from './module/slider';
import {cruise} from './module/cruise';


slide(
	".gallery__slider",
	".gallery__inner",
	".gallery__slide",
	".gallery__slides",
	".gallery__btn li",
	".gallery__btn-up li"
);
slide(
	".cruise__menu-slider",
	".cruise__menu-slider-inner",
	".cruise__menu-slider-slide",
	".cruise__menu-slider-slides",
	".cruise__menu-slider-btn li"
);
cruise();