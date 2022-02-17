import React from 'react';
import { codeAtom } from '../../../util/atoms';
import Search from '../../searchbar/Search';
import welcomeStyles from './welcome.module.css';

const WelcomeFrame = () => {
	return (
		<div className={welcomeStyles.container}>
			<div className={welcomeStyles.message_container}>
				<div className={welcomeStyles.logo}>
					<div className={welcomeStyles.placeholder__logo_cont}>
						<div
							className={welcomeStyles.placeholder__logo_part}
							style={{
								gridArea: 'a',
							}}
						></div>
						<div
							className={welcomeStyles.placeholder__logo_part}
							style={{
								gridArea: 'b',
							}}
						></div>
						<div
							className={welcomeStyles.placeholder__logo_part}
							style={{
								gridArea: 'c',
							}}
						></div>
						<div
							className={welcomeStyles.placeholder__logo_part}
							style={{
								gridArea: 'd',
							}}
						></div>
					</div>
				</div>
				<p className={welcomeStyles.text}>
					start by selecting a character...
				</p>
				<Search
					placeholder='or enter a build code here'
					stateAtom={codeAtom}
				/>
				<p className={welcomeStyles.author}>
					Made with ❤️ by{' '}
					<a href='https://github.com/tlendev' target='_blank'>
						tlendev
					</a>
				</p>
			</div>
		</div>
	);
};

export default WelcomeFrame;
