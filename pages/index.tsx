import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/sidebar/Sidebar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Gcalc</title>
				<meta
					http-equiv='Content-Type'
					content='text/html;charset=UTF-8'
				/>
				<meta name='description' content='placeholder desc' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</Head>
			<div className={styles.container}>
				<Sidebar />
			</div>
		</>
	);
};

export default Home;
