import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-container">
    <Toolbar />
      <div className={styles.main}>
          <h1>News App Made with Next.js</h1>
          <h3>Your Vendor for the latest News</h3>
      </div>
    </div>
  )
}
