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
import { CharacterDetailsInterface } from '../../../util/interfaces';
import { mapWeaponToIcon } from '../../../util/mapToIcon';
import CalcArea from './CalcArea';
import calcStyles from './calculator.module.css';

interface Props {
	characterDetails: CharacterDetailsInterface;
}

const Calculator = ({ characterDetails }: Props) => {
	return (
		<div className={calcStyles.container}>
			<CalcArea
				title='Character Level'
				iconPath={`/icons/skill/level.png`}
				stateAtomIn={levelAtom}
				stateAtomOut={levelTargetAtom}
				maxVal={90}
			/>
			<CalcArea
				title='Normal Attack'
				iconPath={`/icons/skill/${mapWeaponToIcon(
					characterDetails.weaponType
				)}`}
				stateAtomIn={normalAtom}
				stateAtomOut={normalTargetAtom}
				maxVal={10}
			/>
			<CalcArea
				title='Elemental Skill'
				iconPath={`/icons/skill/${characterDetails.skillsPath.skill}`}
				stateAtomIn={skillAtom}
				stateAtomOut={skillTargetAtom}
				maxVal={10}
			/>
			<CalcArea
				title='Elemental Burst'
				iconPath={`/icons/skill/${characterDetails.skillsPath.burst}`}
				stateAtomIn={burstAtom}
				stateAtomOut={burstTargetAtom}
				maxVal={10}
			/>
		</div>
	);
};

export default Calculator;
