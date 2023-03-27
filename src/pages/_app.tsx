import { useKonamimojisplosion } from "konamimojisplosion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

import styles from "./_app.module.css";

export default function App({ Component, pageProps }: AppProps) {
	useKonamimojisplosion();

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
			<header>
				<ul className={styles.navList}>
					<li className={styles.breakItem}>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/explainers">Explainers</Link>
					</li>
					<li className={styles.breakItem}>
						<Link href="/guides">Guides</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/get-involved">Get Involved</Link>
					</li>
				</ul>
			</header>
			<main className={styles.main}>
				<Component {...pageProps} />
			</main>
			<footer>
				<ul className={styles.navList}>
					<li>
						<Link href="https://github.com/OpenContributionsProject/opencontributionssite">
							GitHub
						</Link>
					</li>
				</ul>
			</footer>
		</>
	);
}
