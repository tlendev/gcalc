import React from 'react';
import { mapQualityToColor } from '../../../util/mapToColor';
import advancedStyles from './advanced.module.css';

interface Props {
	title: string;
	iconPath: string;
	quality: number;
	quantity: string;
	origin: {
		name: string;
		iconPath?: string;
		href: string;
	};
}

const ItemAdvanced = ({
	title,
	iconPath,
	quality,
	quantity,
	origin,
}: Props) => {
	return (
		<div
			className={advancedStyles.container}
			style={{ borderColor: mapQualityToColor(quality) }}
		>
			<div className={advancedStyles.item}>
				<div
					className={advancedStyles.icon}
					style={{ backgroundImage: `url(/icons/item/${iconPath})` }}
				></div>
				<a href='#' className={advancedStyles.title}>
					{title}
				</a>
				<p className={advancedStyles.quantity}>x {quantity}</p>
			</div>
			<div className={advancedStyles.origin}>
				<p className={advancedStyles.source_title}>Obtained from</p>
				<div className={advancedStyles.source_origin}>
					<div
						className={advancedStyles.source_origin_icon}
						style={{
							backgroundImage: origin.iconPath
								? `url(/icons/mob/${origin.iconPath})`
								: 'unset',
						}}
					></div>
					<a
						href={origin.href}
						className={advancedStyles.source_origin_name}
					>
						{origin.name}
					</a>
				</div>
			</div>
		</div>
	);
};

export default ItemAdvanced;
