import React, { useEffect, useState } from 'react';
import { CharacterDetailsInterface } from '../../../util/interfaces';
import characterStyles from './character.module.css';
import Details from './Details';
import Header from './Header';

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
			{characterDetails && (
				<>
					<Header characterDetails={characterDetails} />
					<Details characterDetails={characterDetails} />
				</>
			)}
		</div>
	);
};

export default CharacterFrame;
