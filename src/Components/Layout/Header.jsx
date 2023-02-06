import React from 'react';
import '../../sass/Header.sass';
import { NavLink } from 'react-router-dom'
import logoH from '../../assets/img/logoH.png';

function Header() {
	return (
		<header>
			<img src={logoH} alt="logo" />
			<nav>
				<NavLink to='/home' className={'nav__link link__menu'}>Home</NavLink>
				<NavLink to='/about' className='nav__link link__menu'>About</NavLink>
			</nav>
		</header>
	);
}

export default Header;
