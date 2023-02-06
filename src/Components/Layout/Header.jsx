import React from 'react';
import '../../sass/Header.sass';
import logoH from '../../assets/img/logoH.png';
import { NavLink } from 'react-router-dom'

function Header() {

	return (
		<header>
			<img src={logoH} alt="logo" />
			<nav>
				<NavLink to='/home' className='nav__link link__menu'>Home</NavLink>
				<NavLink to='/about' className='nav__link link__menu'>About</NavLink>
			</nav>
		</header>
	);
}

export default Header;
