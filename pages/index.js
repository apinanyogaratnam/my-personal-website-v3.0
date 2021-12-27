import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '././components/navbar';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Apinan Yogaratnam</title>
                <meta name="description" content="Apinan Yogaratnam's Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
}
