import type { AppProps } from "next/app";
import Head from "next/head";

import styles from "./_app.module.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Open Contributions Project</title>
				<meta
					name="description"
					content="A resource to help advocate for and explain corporate contributions to open source."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Component {...pageProps} />
			</main>
		</>
	);
}
