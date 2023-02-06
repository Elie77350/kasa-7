import React, { useState } from 'react';
import '../sass/Slider.sass';
import arrow from '../assets/img/arrow.png';


function Slider({pictures}) {
	let [slide, setSlide] = useState(0);
	let sliderLength = pictures.length;


	const previousImg = () => {
		if (slide === 0) {
			setSlide(sliderLength - 1);
		} else {
			setSlide(slide - 1);
		}
		return (setSlide);
	};


	const nextImg = () => {
		if (slide === sliderLength - 1) {
			setSlide(sliderLength = 0);
		} else {
			setSlide(slide + 1);
		}
		return (setSlide);
	};


	return (
		<div className='Slider'>
			{
				sliderLength > 1 && <img className='arrow arrow__left' src={arrow} alt='previous content' onClick={previousImg}/>
			}
			{
				pictures.map((picture, index) => {
					return (
						<img key={index} className={index === slide  ? 'slider__img actif' : 'slider__img'} src={picture} alt='apartment'/>
					)
				})
			}
			{
				sliderLength > 1 && <img className='arrow arrow__right' src={arrow} alt='next content' onClick={nextImg}/>
			}
		</div>
	);
}

export default Slider;
