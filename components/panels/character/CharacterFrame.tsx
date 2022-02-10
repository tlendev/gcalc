import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { CharacterDetailsInterface } from '../../../util/interfaces';
import characterStyles from './character.module.css';

interface Props {
	id: string;
}

const CharacterFrame = ({ id }: Props) => {
	const [characterDetails, setCharacterDetails] =
		useState<CharacterDetailsInterface | null>(null);
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
	useEffect(() => {
		if (id) {
			(async () => {
				try {
					const res = await fetch(
						`https://gcalc-server.herokuapp.com/characters/${id}`,
						{
							method: 'GET',
						}
					);
					const details = await res.json();
					setCharacterDetails(details);
				} catch (error) {
					console.error(error);
				}
			})();
		}
	}, [id]);
	return (
		<div className={characterStyles.container}>
			<div className={characterStyles.header}>
				<div className={characterStyles.image}>
					<Image
						src={`/gatcha/${characterDetails?.gatchaArtPath}`}
						layout='responsive'
						objectFit='cover'
						width={'100%'}
						height={'100%'}
					/>
				</div>
				<div className={characterStyles.desc}>
					<p className={characterStyles.name}>
						{characterDetails?.name}
					</p>
					<p
						className={characterStyles.constellation}
						style={{
							color: mapElementToColor(
								characterDetails?.element || '#fff'
							),
						}}
					>
						{characterDetails?.constellation}
					</p>
					<div className={characterStyles.overview}>
						<div className={characterStyles.ico}>
							<Image
								src={`/icons/${mapElementToIcon(
									characterDetails?.element || ''
								)}`}
								width={30}
								height={30}
								layout='fixed'
							/>
							<p className={characterStyles.element}>
								{characterDetails?.element}
							</p>
						</div>
						<p className={characterStyles.rarity}>
							{characterDetails?.rarity}
						</p>
						<p className={characterStyles.weapon}>
							{characterDetails?.weaponType}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterFrame;
