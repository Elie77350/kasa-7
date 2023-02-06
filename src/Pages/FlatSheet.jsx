import React from 'react';
import './sass/Flatsheet.sass';
import { useNavigate, useParams } from 'react-router-dom';
import ApartmentList from '../data/apartmentList.json';
import Slider from '../Components/Slider';
import Tag from '../Components/Tag';
import starF from './assets/img/starF.png';
import starE from './assets/img/starE.png';
import Dropdown from '../Components/Dropdown';

function FlatSheet() {

const id = useParams();
const flatSheet = ApartmentList.find(apartment => apartment.id === id.id);

const apartmentTags = flatSheet?.tags.map((tags, index) => {
	return <Tag key={index} value={tags} />
});

let apartmentRate = [];
let fullStar = false;

for (let index = 0; index < 5; index++) {
	if (index === parseInt(flatSheet?.rating)) {
		fullStar = false;
	}
	if (fullStar === true) {
		apartmentRate.push(<img key={index} className='star' src={starF} alt={`${flatSheet?.rating}/5}`}/>)
	} else {
		apartmentRate.push(<img key={index} className='star' src={starE} alt={`${flatSheet?.rating}/5}`}/>)
	}
}

const flatEquipment = flatSheet?.equipments.map((equipment, index) => {
	return <li key={index}>{equipment}</li>
})

	return (
		<>
			{
				flatSheet ? (
					<div className='flatsheet'>
						<Slider images={flatSheet?.pictures}/>
						<div className='owner__flat'>
						<div className='info__flat'>
							<span className='title__flat'>{flatSheet?.title}</span>
							<span className='location__flat'>{flatSheet?.location}</span>
							<div className='tags'>{apartmentTags}</div>
						</div>
						<div className='rate__owner'>
							<div className='info__owner'>
								<span className='name__owner'>{flatSheet?.host.name}</span>
								<img className='photo__owner' src={flatSheet?.host.picture} alt="Propriétaire"/>
							</div>
							<div className='rate'>{apartmentRate}</div>
						</div>
					</div>
					<div>
						<div className='description__equipment'>
							<Dropdown titre='Description' description={flatSheet?.description}/>
							<Dropdown titre='Équipements' description={flatEquipment}/>
						</div>
					</div>
				) : <useNavigate replace to='/ErrorPage'/>
			}
		</>
		)
}


export default FlatSheet;