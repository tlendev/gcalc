import React from 'react';
import { mapQualityToColor } from '../../../util/mapToColor';
import itemStyles from './item.module.css';

interface Props {
	title: string;
	iconPath: string;
	quality: number;
	quantity: string;
}

const Item = ({ title, iconPath, quality, quantity }: Props) => {
	return (
		<div className={itemStyles.container}>
			<div className={itemStyles.tooltip}>{title}</div>
			<div
				className={itemStyles.ico}
				style={{
					backgroundImage: `url(/icons/item/${iconPath})`,
					backgroundColor: `${mapQualityToColor(quality)}`,
				}}
			>
				<p className={itemStyles.quantity}>{quantity}</p>
			</div>
		</div>
	);
};

export default Item;
