import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../src/pages/HomePage'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tipaw Take-home challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}

export default Home
