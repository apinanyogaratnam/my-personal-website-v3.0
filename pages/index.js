import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SideBar from '././components/SideBar';
import theme from '../theme';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Apinan Yogaratnam</title>
                <meta name="description" content="Apinan Yogaratnam's Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div id='global-container' className='global-container'>
                <SideBar />
            </div>
        </div>
    );
}
