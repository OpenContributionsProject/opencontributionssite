import React from "react";
import styles from "../styles/layout.module.css";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Open Contributions Project",
	description:
		"A resource to help advocate for and explain corporate contributions to open source.",
	viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
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
				<main className={styles.main}>{children}</main>
				<footer>
					<ul className={styles.navList}>
						<li>
							<Link href="https://github.com/OpenContributionsProject/opencontributionssite">
								GitHub
							</Link>
						</li>
					</ul>
				</footer>
			</body>
		</html>
	);
}
