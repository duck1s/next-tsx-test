// Style
import styles from '../styles/pages/Home.module.scss'
import { useRouter } from 'next/router'

// Components
import Layout from '../components/Layout'

export default function Home() {
	const router = useRouter()
return (
	<>
		<Layout>
			<div className={styles.homecontent}>
				<h1 className={styles.homecontent__heading}>Joeri Breedveld</h1>
				<h2 className={styles.homecontent__job}>Full-stack Developer</h2>
				<button className={styles["homecontent__about button"]} type="button" onClick={() => router.push("/about")}>
					About Me
				</button>
			</div>
			
		</Layout>
	</>
)
}
