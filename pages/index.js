import Head from "next/head";
import styles from "../styles/Home.module.css";
import Landing from "../component/Landing";
import Aboutus from "../component/Aboutus";
import Header from "../component/Header";
import Work from "../component/Work";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import Menu from "../component/Menu";
import Subscribe from "../component/subscribe";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Chullah Chimta</title>
        <meta
          name="description"
          content="Your Favourite Food Delivered Hot & Fresh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.linearGradient}>
        <Landing />
        <Aboutus />
        <Work />
      </div>
      <div className={styles.linearGradient2}>
        <div className={styles.callBox}>
          <p className={styles.or}>OR</p>
          <img src="/images/call.svg" className={styles.callus} />
        </div>
        <Menu />
      </div>
      <Subscribe />
      <Footer />
      <p className={styles.copyright}>2021 © All Right Reserved</p>
    </div>
  );
}
