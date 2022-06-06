import Head from 'next/head'
import styles from "../styles/components/Layout.module.scss"

// Components
import Navigation from './Navigation'

export default function Layout({ children }) {
    return (
        <>
            <Head>
				<title>Test</title>
			</Head>
			<header className={styles.header}>
				<Navigation />
			</header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>Made by Joeri Breedveld</p>
            </footer>
        </>
    )
}