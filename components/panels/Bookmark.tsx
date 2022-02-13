import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
	selectedActiveCharacterAtom,
	openBookmarksAtom,
	isSelectedAtom,
} from '../../util/atoms';
import bookmarkStyles from './bookmark.module.css';

interface Props {
	id: string;
	title: string;
}

const Bookmark = ({ id, title }: Props) => {
	const [_selectedActiveCharacter, setSelectedActiveCharacter] =
		useRecoilState(selectedActiveCharacterAtom);
	const [openBookmarks, setOpenBookmarks] = useRecoilState(openBookmarksAtom);
	const [isHovered, setIsHovered] = useState(false);
	const [isSelected, setIsSelected] = useRecoilState(isSelectedAtom);
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		if (isSelected === id) {
			setIsSelected(id);
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [isSelected]);
	return (
		<div
			onMouseMove={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={(e) => {
				e.stopPropagation();
				setSelectedActiveCharacter(id);
				setIsSelected(id);
			}}
			className={bookmarkStyles.container}
			style={{
				backgroundColor: isActive ? 'var(--bg-200)' : 'unset',
			}}
		>
			<p className={bookmarkStyles.title}>{title}</p>
			{(isActive || isHovered) && (
				<p
					onClick={(e) => {
						e.stopPropagation();
						setOpenBookmarks(
							openBookmarks.filter((bookmark) => {
								return bookmark.id !== id;
							})
						);
						setSelectedActiveCharacter('');
					}}
					className={bookmarkStyles.close}
				>
					✖
				</p>
			)}
		</div>
	);
};

export default Bookmark;
