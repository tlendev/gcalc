import React from 'react';
import CalcArea from './CalcArea';
import calcStyles from './calculator.module.css';

interface Props {}

const Calculator = ({}: Props) => {
	return (
		<div className={calcStyles.container}>
			<CalcArea title='Character Level' iconPath='skill_normal_bow.png' />
			<CalcArea title='Normal Attack' iconPath='skill_normal_bow.png' />
			<CalcArea title='Elemental Skill' iconPath='skill_normal_bow.png' />
			<CalcArea title='Elemental Burst' iconPath='skill_normal_bow.png' />
		</div>
	);
};

export default Calculator;
