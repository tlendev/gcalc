import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { CharacterDetailsInterface } from '../../../util/interfaces';
import headerStyles from './header.module.css';

interface Props {
	characterDetails: CharacterDetailsInterface | null;
}

const mapElementToColor = (element: string) => {
	switch (element.toLocaleLowerCase()) {
		case 'pyro':
			return '#e2311d';
		case 'hydro':
			return '#1c72fd';
		case 'anemo':
			return '#33ccb3';
		case 'electro':
			return '#d376f0';
		case 'dendro':
			return '#7bb42d';
		case 'cryo':
			return '#98c8e8';
		case 'geo':
			return '#cfa726';
		default:
			return '#696969';
	}
};
const mapElementToIcon = (element: string) => {
	switch (element.toLocaleLowerCase()) {
		case 'pyro':
			return 'ico_pyro.png';
		case 'hydro':
			return 'ico_hydro.png';
		case 'anemo':
			return 'ico_anemo.png';
		case 'electro':
			return 'ico_electro.png';
		case 'dendro':
			return 'ico_dendro.png';
		case 'cryo':
			return 'ico_cryo.png';
		case 'geo':
			return 'ico_geo.png';
		default:
			return 'ico_pyro.png';
	}
};

const Header = ({ characterDetails }: Props) => {
	return (
		<div className={headerStyles.container}>
			<div
				className={headerStyles.image}
				style={{
					backgroundImage: `url(gatcha/${characterDetails?.gatchaArtPath})`,
				}}
			>
				<div className={headerStyles.desc}>
					<p className={headerStyles.name}>
						{characterDetails?.name}
					</p>
					<p
						className={headerStyles.constellation}
						style={{
							color: mapElementToColor(
								characterDetails?.element || '#fff'
							),
						}}
					>
						{characterDetails?.constellation}
					</p>
					<div className={headerStyles.overview}>
						<i
							className={headerStyles.ico}
							style={{
								backgroundImage: `url(/icons/${mapElementToIcon(
									characterDetails?.element || ''
								)})`,
							}}
						></i>
						<p className={headerStyles.element}>
							{characterDetails?.element}
						</p>
						<p className={headerStyles.rarity}>
							{characterDetails?.rarity} ★
						</p>
						<p className={headerStyles.weapon}>
							{characterDetails?.weaponType}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
