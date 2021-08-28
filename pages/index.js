import Head from 'next/head'
 
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer} >
      <Head>
        <title>Next News App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <div className={styles.news}>
        <h3>Next js News App</h3>
        <p>Click the News tab for the latest news article</p>
      </div>
      
    </div>
  )
}
