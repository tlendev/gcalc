import React from 'react';
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

const Details = () => {
	return (
		<div className={detailsStyles.container}>
			<Calculator />
			<p className={detailsStyles.para}>Summary</p>
			<Pocket title='Ascention' items={test} />
			<Pocket title='Skills' items={test} />
			<Pocket title='Total' items={test} />
		</div>
	);
};

export default Details;
