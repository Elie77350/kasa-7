import React from 'react';
import './Components/Layout/Design';
import Header from '../../Components/Layout/Header';
import Footer from '../../Components/Layout/Footer';

function Design({children}) {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Design;