import React from 'react';
import {
	levelAtom,
	levelTargetAtom,
	normalAtom,
	normalTargetAtom,
	skillAtom,
	skillTargetAtom,
	burstAtom,
	burstTargetAtom,
} from '../../../util/atoms';
import CalcArea from './CalcArea';
import calcStyles from './calculator.module.css';

interface Props {}

const Calculator = ({}: Props) => {
	return (
		<div className={calcStyles.container}>
			<CalcArea
				title='Character Level'
				iconPath='skill_normal_bow.png'
				stateAtomIn={levelAtom}
				stateAtomOut={levelTargetAtom}
				maxVal={90}
			/>
			<CalcArea
				title='Normal Attack'
				iconPath='skill_normal_bow.png'
				stateAtomIn={normalAtom}
				stateAtomOut={normalTargetAtom}
				maxVal={10}
			/>
			<CalcArea
				title='Elemental Skill'
				iconPath='skill_normal_bow.png'
				stateAtomIn={skillAtom}
				stateAtomOut={skillTargetAtom}
				maxVal={10}
			/>
			<CalcArea
				title='Elemental Burst'
				iconPath='skill_normal_bow.png'
				stateAtomIn={burstAtom}
				stateAtomOut={burstTargetAtom}
				maxVal={10}
			/>
		</div>
	);
};

export default Calculator;
