import React from 'react';
import {
	levelItemsAtom,
	skillsItemsAtom,
	totalItemsAtom,
} from '../../../util/atoms';
import { CharacterDetailsInterface } from '../../../util/interfaces';
import Calculator from './Calculator';
import detailsStyles from './details.module.css';
import Pocket from './Pocket';
const test: any[] = [
	{
		title: 'Mora',
		iconPath: 'mora.png',
		quality: 3,
		quantity: '120k',
	},
	{
		title: 'Philosophies to Light',
		iconPath: 'mora.png',
		quality: 4,
		quantity: '12',
	},
	{
		title: 'Shadow of the Warrior',
		iconPath: 'mora.png',
		quality: 5,
		quantity: '3',
	},
];

interface Props {
	characterDetails: CharacterDetailsInterface;
}

const Details = ({ characterDetails }: Props) => {
	return (
		<div className={detailsStyles.container}>
			<Calculator characterDetails={characterDetails} />
			<p className={detailsStyles.para}>Summary</p>
			<Pocket title='Ascention' stateAtom={levelItemsAtom} />
			<Pocket title='Skills' stateAtom={skillsItemsAtom} />
			<Pocket title='Total' stateAtom={totalItemsAtom} />
		</div>
	);
};

export default Details;
