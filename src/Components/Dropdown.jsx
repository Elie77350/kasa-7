import React, { useState } from 'react';
import '../sass/Dropdown.sass';
import arrow from '../assets/img/arrowD.svg';

function Dropdown ({titre, description}) {
	const [open, setOpen] = useState(false);

	return (
		<div className='dropdown' id={`dropdown${titre}`}>
			<div className='top__dropdown'>
				<p className='title__dropdown'>{titre}</p>
				<span className={`arrow__dropdown ${open}`} onClick={() => setOpen(!open)}>
					<img src={arrow} alt='Ouvrir cette liste'/>
				</span>
			</div>
			{
				open && <div className='body__dropdown'>{description}</div>
			}
		</div>
	);
}

export default Dropdown;