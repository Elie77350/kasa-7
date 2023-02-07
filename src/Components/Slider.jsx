import React, { useState } from 'react';
import '../sass/Slider.sass';
import arrow from '../assets/img/arrow.png';


//*SLIDER 1
function Slider({images}) {
	let [slide, setSlide] = useState(0);
	let sliderLength = images.length;
	const allSlide = sliderLength > 1;

	//*SLIDER 2
	const previousImg = () => {
		if (slide === 0) {
			setSlide(sliderLength - 1);
		} else {
			setSlide(slide - 1);
		}
		return (setSlide);
	};

//* SLIDER 3
	const nextImg = () => {
		if (slide === sliderLength - 1) {
			setSlide(sliderLength = 0);
		} else {
			setSlide(slide + 1);
		}
		return (setSlide);
	};

	//* SLIDER 4
	return (
		<div className='Slider'>
			{
				sliderLength > 1 && <img className='arrow arrow__left' src={arrow} alt='previous content' onClick={previousImg}/>
			}
			{
				images.map((image, index) => {
					return (
						<img key={index} className={index === slide  ? 'slider__img actif' : 'slider__img'} src={image} alt='Logement'/>
					)
				})
			}   
			{
				sliderLength > 1 && <img className='arrow arrow__right' src={arrow} alt='next content' onClick={nextImg}/> 	//* SLIDER 5
			}

			{allSlide && (
				<p className='slide__counter'>
					{slide + 1}/{sliderLength}
				</p>
			)}
		</div>
	);
}

export default Slider;
