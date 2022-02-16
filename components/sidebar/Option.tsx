import Image from 'next/image';
import React from 'react';
import { useRecoilState } from 'recoil';
import {
	isSelectedAtom,
	openBookmarksAtom,
	selectedActiveCharacterAtom,
} from '../../util/atoms';
import { CharacterInterface } from '../../util/interfaces';
import optionStyles from './option.module.css';

const option = ({ id, name, avatarPath, elementColor }: CharacterInterface) => {
	const [openBookmarks, setOpenBookmarks] = useRecoilState(openBookmarksAtom);
	const [_selectedActiveCharacter, setSelectedActiveCharacter] =
		useRecoilState(selectedActiveCharacterAtom);
	const [isSelected, setIsSelected] = useRecoilState(isSelectedAtom);
	return (
		<>
			<div
				className={optionStyles.container}
				onClick={() => {
					if (
						!openBookmarks.find((bookmark) => {
							return bookmark.id === id;
						})
					) {
						setOpenBookmarks([
							...openBookmarks,
							{ id, name, avatarPath, elementColor },
						]);
					}
					setSelectedActiveCharacter(id);
					setIsSelected(id);
				}}
			>
				<div
					className={optionStyles.border}
					style={{ backgroundColor: elementColor }}
				></div>
				<Image src={`/avatar/${avatarPath}`} width='52' height='62' />
				<p className={optionStyles.name}>{name}</p>
			</div>
		</>
	);
};

export default option;
