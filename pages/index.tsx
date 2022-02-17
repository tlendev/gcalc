import type { NextPage } from 'next';
import Head from 'next/head';
import indexStyles from '../styles/Home.module.css';
import Sidebar from '../components/sidebar/Sidebar';
import Frame from '../components/panels/Frame';
import WelcomeFrame from '../components/panels/welcome/WelcomeFrame';
import CharacterFrame from '../components/panels/character/CharacterFrame';
import { useRecoilValue } from 'recoil';
import { selectedActiveCharacterAtom } from '../util/atoms';

const Home: NextPage = () => {
	const selectedActiveCharacter = useRecoilValue(selectedActiveCharacterAtom);
	return (
		<>
			<Head>
				<title>Genshin Impact Calculator</title>
				<meta
					httpEquiv='Content-Type'
					content='text/html;charset=UTF-8'
				/>
				<meta name='description' content='placeholder desc' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<link rel='icon' type='image/svg' href='app/favicon.ico' />
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
