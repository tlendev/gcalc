import React from 'react';
import calcAreaStyles from './calcArea.module.css';
import Cell from './Cell';
import Counter from './Counter';

interface Props {
	title: string;
	iconPath: string;
}

const CalcArea = ({ title, iconPath }: Props) => {
	return (
		<div className={calcAreaStyles.container}>
			<p className={calcAreaStyles.title}>{title}</p>
			<div className={calcAreaStyles.cells}>
				<Cell style={{ flex: 1 }}>
					<div
						className={calcAreaStyles.icon}
						style={{
							backgroundImage: `url(/icons/skill/${iconPath})`,
						}}
					></div>
				</Cell>
				<Cell>
					<Counter />
				</Cell>
				<div className={calcAreaStyles.arrow}>➞</div>
				<Cell>
					<Counter />
				</Cell>
			</div>
		</div>
	);
};

export default CalcArea;
