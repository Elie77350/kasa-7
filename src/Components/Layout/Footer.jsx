import React from "react";
import '../../sass/Footer.sass';
import logoF from "../../assets/img/logoF.png";

function Footer() {
	return (
		<footer className='footer'>
			<img src={ logoF } alt="Logo Kasa" />
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer;

