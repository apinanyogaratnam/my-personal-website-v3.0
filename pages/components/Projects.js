import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

export default function Projects() {
    return (
        <div id="projects">
            <div className={styles['content-container']}>
                <div className={styles['content-content']}>
                    <h1 className={styles['content-title']}>Apinan Yogaratnam</h1>
                    <h2 className={styles['content-subtitle']}>Software Engineer</h2>
                    <Image src={require("/public/headshot.jpeg")} alt="headshot" width={300} height={300} />
                    <p className={styles['content-description']}>
                        I am a software engineer based in Toronto.
                        I am a self-taught full stack software engineer with a passion for learning and problem solving.
                        I am currently a student at the University of Toronto studying Mathematics and Statistics.
                    </p>
                </div>
            </div>
        </div>
    );
}
