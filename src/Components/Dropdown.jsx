import React, { useState } from 'react';
import '../sass/Dropdown.sass';
import arrow from '../assets/img/arrowD.svg';

function Dropdown ({title, description}) {
	const [open, setOpen] = useState(false);

	return (
		<div className='dropdown' id={`dropdown${title}`}>
			<div className='top__dropdown'>
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