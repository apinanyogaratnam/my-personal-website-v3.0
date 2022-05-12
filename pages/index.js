import Head from 'next/head';
import About from '../components/About';
import Homepage from '../components/Homepage';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Apinan Yogaratnam</title>
                <meta name="description" content="Apinan Yogaratnam's Personal Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Homepage />
            <Projects />
            <About />
        </div>
    );
}
