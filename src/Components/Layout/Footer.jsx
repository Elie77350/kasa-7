import React from "react";
import '../../sass/Footer.sass';
import logoF from "../../assets/img/logoF.png";

function Footer() {
	return (
		<footer>
			<div id='footer__container'>
				<img src={logoF} alt="Logo Kasa"/>
				<p>&copy; 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;

