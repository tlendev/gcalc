import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';
import '../styles/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ParallaxProvider>
				<Component {...pageProps} />
			</ParallaxProvider>
		</RecoilRoot>
	);
}

export default MyApp;
