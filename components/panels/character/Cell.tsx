import React, { CSSProperties } from 'react';
import cellStyles from './cell.module.css';

interface Props {
	children: any;
	style?: CSSProperties | undefined;
}

const Cell = ({ children, style }: Props) => {
	return (
		<div className={cellStyles.container} style={style}>
			{children}
		</div>
	);
};

export default Cell;
