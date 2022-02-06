import React, { useRef } from 'react';
import Search from '../searchbar/Search';
import sidebarStyles from './sidebar.module.css';
import Option from './option';

//dev
const chara = [
	{
		id: '1',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '2',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
	{
		id: '3',
		name: 'Tartaglia',
		avatarPath: 'test.png',
		element: 'aqua',
	},
];
//

const Sidebar = () => {
	const searchRef = useRef(null);
	return (
		<>
			<div className={sidebarStyles.container}>
				<Search />
				<div className={sidebarStyles.drawer}>
					{chara.map((character) => {
						return (
							<Option
								id={character.id}
								name={character.name}
								avatarPath={character.avatarPath}
								elementColor={character.element}
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
