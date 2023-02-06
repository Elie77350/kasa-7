import React from 'react';
import '../../sass/Banner.sass';

function Banner({image, texte}) {
	return (
		<div className='banner'>
			<img className='banner__img' src= {image} alt='Banner'/>
				<div className='banner__mask'></div>
				<span className='banner__txt'>{texte}</span>
		</div>
	);
}

export default Banner;
