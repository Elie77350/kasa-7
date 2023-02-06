import React from 'react';
import Banner from '../Components/Layout/Banner';
import bannerA from '../assets/img/bannerA.png';
import Dropdown from '../Components/Dropdown';
import Home from '../Pages/Home';


function About() {
		return (
				<div>
						<Banner image={bannerA} />
						<Dropdown title='Fiabilité' description="Les annonces postées sur Kasa garantissent sune fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
						<Dropdown title='Respect' description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
						<Dropdown title='Service' description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
						<Dropdown title='Sécurité' description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
				</div>
		);
}

export default About;