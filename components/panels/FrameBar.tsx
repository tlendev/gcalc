import React from 'react';
import { useRecoilValue } from 'recoil';
import { openBookmarksAtom } from '../../util/atoms';
import Bookmark from './Bookmark';
import frameBarStyles from './frameBar.module.css';

const FrameBar = () => {
	const selectedCharacters = useRecoilValue(openBookmarksAtom);
	return (
		<div className={frameBarStyles.container}>
			{selectedCharacters.map((selectedCharacter) => {
				return (
					<Bookmark
						id={selectedCharacter.id}
						isActive={false}
						title={selectedCharacter.name}
						key={selectedCharacter.id}
					/>
				);
			})}
		</div>
	);
};

export default FrameBar;
