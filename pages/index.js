import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WebDev News</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="web development, programming"/>
      </Head>
       
      <h1>Welcome to next js</h1>
    </div>
  )
}
