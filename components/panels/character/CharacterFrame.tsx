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
					<p className={characterStyles.constellation}>
						{characterDetails?.constellation}
					</p>
					<div className={characterStyles.overview}>
						<p className={characterStyles.element}>
							{characterDetails?.element}
						</p>
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
