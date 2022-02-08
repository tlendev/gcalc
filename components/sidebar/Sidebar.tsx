import React, { useEffect, useState } from 'react';
import Search from '../searchbar/Search';
import sidebarStyles from './sidebar.module.css';
import Option from './Option';

interface CharacterListInterface {
	id: string;
	name: string;
	avatarPath: string;
	elementColor: string;
}

const Sidebar = () => {
	const [characterList, setCharacterList] = useState<
		CharacterListInterface[]
	>([]);
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(
					'https://gcalc-server.herokuapp.com/characters/',
					{ method: 'GET' }
				);
				const data = await res.json();
				setCharacterList(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	return (
		<>
			<div className={sidebarStyles.container}>
				<Search />
				<div className={sidebarStyles.drawer}>
					{characterList.map((character) => {
						return (
							<Option
								id={character.id}
								name={character.name}
								avatarPath={character.avatarPath}
								elementColor={character.elementColor}
								key={character.id}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Sidebar;
