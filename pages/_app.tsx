import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import AlbumProvider from "../context/album";
import GlobalStyle, { theme } from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<AlbumProvider>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</AlbumProvider>
		</>
	);
}

export default MyApp;
