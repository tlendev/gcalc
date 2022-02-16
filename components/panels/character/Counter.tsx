import React from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import counterStyles from './counter.module.css';

interface Props {
	stateAtom: RecoilState<number>;
	maxValue: number;
}

const Counter = ({ stateAtom, maxValue }: Props) => {
	const [val, setVal] = useRecoilState(stateAtom);
	const increment = () => {
		if (val !== maxValue) {
			setVal(val + 1);
		}
	};
	const decrement = () => {
		if (val !== 1) {
			setVal(val - 1);
		}
	};
	return (
		<div className={counterStyles.container}>
			<div
				className={counterStyles.button_container}
				style={{ justifyContent: 'flex-end' }}
			>
				<button className={counterStyles.button} onClick={decrement}>
					-
				</button>
			</div>
			<div className={counterStyles.display}>
				<input
					type='number'
					min={1}
					max={maxValue}
					value={val}
					onChange={(e) => {
						setVal(+e.target.value);
					}}
				/>
			</div>
			<div
				className={counterStyles.button_container}
				style={{ justifyContent: 'flex-start' }}
			>
				<button className={counterStyles.button} onClick={increment}>
					+
				</button>
			</div>
		</div>
	);
};

export default Counter;
