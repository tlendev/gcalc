import Image from 'next/image';
import React, { useEffect } from 'react';
import optionStyles from './option.module.css';

interface Props {
	id: string;
	name: string;
	avatarPath: string;
	elementColor: string;
}

const option = ({ id, name, avatarPath, elementColor }: Props) => {
	return (
		<>
			<div className={optionStyles.container}>
				<div
					className={optionStyles.border}
					style={{ backgroundColor: elementColor }}
				></div>
				<Image src={`/${avatarPath}`} width='52' height='62' />
				<p className={optionStyles.name}>{name}</p>
			</div>
		</>
	);
};

export default option;
