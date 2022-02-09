import React from 'react';
import { RecoilState, useRecoilState } from 'recoil';
import searchStyles from './search.module.css';

interface Props {
	placeholder: string;
	stateAtom: RecoilState<string>;
	callback?: () => void;
}

const Search = ({ placeholder, stateAtom, callback }: Props) => {
	const [searchValue, setSearchValue] = useRecoilState(stateAtom);
	return (
		<>
			<div className={searchStyles.bar}>
				<input
					onChange={(e) => {
						setSearchValue(e.target.value);
						console.log(e.target.value);
						callback && callback();
					}}
					value={searchValue}
					type='text'
					spellCheck={false}
					placeholder={placeholder}
					className={searchStyles.input}
				/>
			</div>
		</>
	);
};

export default Search;
