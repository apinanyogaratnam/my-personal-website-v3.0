import Image from 'next/image';
import styles from '../../styles/Homepage.module.css';

export default function Homepage() {
    const pages = [
        'Home',
        'Projects',
        'About',
        'Contact',
    ]
    return (
        <div>
            <div className={styles['header-container']}>
                <div className={styles['header-content']}>
                    {
                        pages.map((page, index) => (
                            <a key={index} className={styles['page-selector']} href="">{page}</a>
                        ))
                    }
                </div>
            </div>
            <div className={styles['content-container']}>
                <div className={styles['content-content']}>
                    <h1 className={styles['content-title']}>Apinan Yogaratnam</h1>
                    <h2 className={styles['content-subtitle']}>Software Engineer</h2>
                </div>
                <Image src={require("/public/headshot.jpeg")} alt="headshot" width={300} height={300} />
            </div>
        </div>
    );
}
