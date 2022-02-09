import React from 'react';
import frameStyles from './frame.module.css';
import FrameBar from './FrameBar';

const Frame = ({ children }: any) => {
	return (
		<div className={frameStyles.container}>
			<FrameBar />
			{children}
		</div>
	);
};

export default Frame;
