import React from 'react';
import '../sass/Card.sass';

function Card({ id, image, title }) {
	return (
		<div className='card' id={id}>
			<img className='card__image' src={ image } alt='Card' />
			<span className='card__title'>{ title }</span>
		</div>
	);
}

export default Card;