import React from 'react';
import { RecoilState } from 'recoil';
import calcAreaStyles from './calcArea.module.css';
import Cell from './Cell';
import Counter from './Counter';

interface Props {
	title: string;
	iconPath: string;
	stateAtomIn: RecoilState<number>;
	stateAtomOut: RecoilState<number>;
	maxVal: number;
}

const CalcArea = ({
	title,
	iconPath,
	stateAtomIn,
	stateAtomOut,
	maxVal,
}: Props) => {
	return (
		<div className={calcAreaStyles.container}>
			<p className={calcAreaStyles.title}>{title}</p>
			<div className={calcAreaStyles.cells}>
				<Cell style={{ flex: 1 }}>
					<div
						className={calcAreaStyles.icon}
						style={{
							backgroundImage: `url(${iconPath})`,
						}}
					></div>
				</Cell>
				<Cell>
					<Counter stateAtom={stateAtomIn} maxValue={maxVal} />
				</Cell>
				<div className={calcAreaStyles.arrow}>➞</div>
				<Cell>
					<Counter stateAtom={stateAtomOut} maxValue={maxVal} />
				</Cell>
			</div>
		</div>
	);
};

export default CalcArea;
