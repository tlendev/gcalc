import React, { useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import searchStyles from './search.module.css';

export const searchState = atom({
	key: 'searchState',
	default: '',
});

const Search = () => {
	const [searchValue, setSearchValue] = useRecoilState(searchState);
	return (
		<>
			<div className={searchStyles.bar}>
				<input
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
					type='text'
					spellCheck={false}
					placeholder='Search for a character'
					className={searchStyles.input}
				/>
			</div>
		</>
	);
};

export default Search;
