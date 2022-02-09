import type { NextPage } from 'next';
import Head from 'next/head';
import indexStyles from '../styles/Home.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import Frame from '../components/panels/Frame';
import WelcomeFrame from '../components/panels/welcome/WelcomeFrame';
import CharacterFrame from '../components/panels/character/CharacterFrame';
import { useRecoilState } from 'recoil';
import { selectedActiveCharacterAtom } from '../util/atoms';

const Home: NextPage = () => {
	const [selectedActiveCharacter, setSelectedActiveCharacter] =
		useRecoilState(selectedActiveCharacterAtom);
	return (
		<>
			<Head>
				<title>Gcalc</title>
				<meta
					httpEquiv='Content-Type'
					content='text/html;charset=UTF-8'
				/>
				<meta name='description' content='placeholder desc' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<div className={indexStyles.container}>
				<Sidebar />
				<Frame>
					{selectedActiveCharacter ? (
						<CharacterFrame id={selectedActiveCharacter} />
					) : (
						<WelcomeFrame />
					)}
				</Frame>
			</div>
		</>
	);
};

export default Home;
