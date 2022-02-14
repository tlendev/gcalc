import React from 'react';
import counterStyles from './counter.module.css';

const Counter = () => {
	return (
		<div className={counterStyles.container}>
			<div className={counterStyles.button_container}>
				<button className={counterStyles.button}>+</button>
			</div>
			<div className={counterStyles.display}>
				<input type='number' min={1} max={90} value={1} />
				<div className={counterStyles.border}></div>
			</div>
			<div className={counterStyles.button_container}>
				<button className={counterStyles.button}>-</button>
			</div>
		</div>
	);
};

export default Counter;
