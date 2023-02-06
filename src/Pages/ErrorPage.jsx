import React from 'react';
import '../sass/ErrorPage.sass';
import { NavLink } from "react-router-dom";
import Home from './Home';

function ErrorPage() {
	return (
		<div className='errorpage'>
			<h1 className='title__errorpage'>404</h1>
			<span className='description__errorpage'>Oups! La page que vous demandez n'existe pas.</span>
			<NavLink to='/' className='nav__link error__link'>Retourner sur la page d'accueil</NavLink>
		</div>
	)
}

export default ErrorPage;