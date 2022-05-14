import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div id="contact" className={styles['content-container']}>
            <div>
                <h1>Contact</h1>
                <h2>Feel free to contact me</h2>
                <div>
                    <a href="mailto:apinanapinan@icloud.com">
                        <AiFillMail />
                    </a>
                    <a href="https://linkedin.com/in/apinanyogaratnam">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://github.com/apinanyogaratnam">
                        <AiFillGithub />
                    </a>
                    <a href="https://twitter.com/apiyogaratnam">
                        <AiFillTwitterCircle />
                    </a>
                </div>
            </div>
        </div>
    );
}
