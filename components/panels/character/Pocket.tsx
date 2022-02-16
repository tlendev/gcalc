import React, { useState } from 'react';
import { RecoilState, useRecoilValue } from 'recoil';
import Item from './Item';
import ItemAdvanced from './ItemAdvanced';
import pocketStyles from './pocket.module.css';

interface Props {
	title: string;
	stateAtom: RecoilState<any[]>;
}

const Pocket = ({ title, stateAtom }: Props) => {
	const items = useRecoilValue(stateAtom);
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div
			className={pocketStyles.container}
			onClick={() => {
				setIsExpanded(!isExpanded);
			}}
			style={{ flexDirection: isExpanded ? 'column' : 'row' }}
		>
			<p
				className={pocketStyles.title}
				style={{ textAlign: isExpanded ? 'center' : 'left' }}
			>
				{title} (click to {isExpanded ? 'collapse' : 'expand'})
			</p>
			{isExpanded ? (
				<div className={pocketStyles.expanded}>
					{items.map((item) => {
						<ItemAdvanced
							title='Mora'
							iconPath='mora.png'
							quality={3}
							quantity='50k'
							origin={{
								name: 'Thunder Manifestation',
								iconPath: 'mob_thunder.png',
								href: 'https://genshin.honeyhunterworld.com/db/monster/m_20070101/?lang=EN',
							}}
						/>;
					})}
				</div>
			) : (
				<div className={pocketStyles.collapsed}>
					{/* {items.map((item) => {
						return (
							<Item
								title={item.title}
								iconPath={item.iconPath}
								quality={item.quality}
								quantity={item.quantity}
							/>
						);
					})} */}
				</div>
			)}
		</div>
	);
};

export default Pocket;
