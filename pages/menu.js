import Head from 'next/head'

import Landing from '../component/Landing'
import Aboutus from '../component/Aboutus'
import Header from '../component/header'
import Work from '../component/work'
import Footer from '../component/footer' 
import { useRouter } from 'next/router'
import Menu from '../component/Menu'
import Subscribe from '../component/subscribe'

import styles from '../styles/menu.module.css'

export default function Home() {
  const router=useRouter()

  return (
    <div >
      <Head>
        <title>Chullah Chimta</title>
        <meta name="description" content="Your Favourite Food Delivered Hot &amp; Fresh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <div className={styles.imageDiv}>
        <img src="/images/menu.jpg" className={styles.menu}/> 

        </div>
       <Subscribe/>
       <Footer/>
      <p className={styles.copyright}>2021 ©  All Right Reserved</p>
    </div>
  )
}
