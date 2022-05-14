import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div id="contact" className={styles['content-container']}>
            <div>
                <h1>Contact</h1>
                <h2>Feel free to contact me</h2>
                <div>
                    <a href="mailto:apinanapinan@icloud.com">
                        <img src="/mail.png" alt="mail" />
                    </a>
                    <a href="https://www.linkedin.com/in/apinan-yogaratnam">
                        <img src="/linkedin.png" alt="linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
}
