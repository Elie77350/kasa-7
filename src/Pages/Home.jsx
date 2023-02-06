import React from 'react';
import '../sass/Home.sass';
import Banner from '../Components/Layout/Banner';
import bannerH from '../assets/img/bannerH.png';
import Card from '../Components/Card';
import { NavLink } from 'react-router-dom';
import apartmentList from '../data/apartmentList.json';


function Home() {
		return (
				<div className='Home'>
						<Banner image={bannerH} texte="Chez vous, partout et ailleurs"/>
						<div className='apartment__card'>
								{apartmentList.map((apartment) => <NavLink key={apartment.id} to={'/apartment/'+apartment.id+'/#'}>
								<Card key={apartment.id} id={apartment.id} image={apartment.cover} titre={apartment.title} />
								</NavLink>)}
					</div>
		</div>
	);
}

export default Home;