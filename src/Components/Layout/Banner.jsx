import React from 'react';
import '../../sass/Banner.sass';

function Banner({ picture, text }) {
	return (
		<div className='banner'>
			<img className='banner__img' src= {picture} alt='Banner'/>
				<div className='banner__mask'></div>
				<span className='banner__text'>{ text }</span>
		</div>
	);
}

export default Banner;
