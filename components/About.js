import styles from '../styles/About.module.css';
import ProgressBar from './ProgressBar';

export default function About() {
    const skills = [
        {
            name: 'Python',
            value: 90,
        },
        {
            name: 'JavaScript',
            value: 75,
        },
        {
            name: 'React',
            value: 80,
        },
        {
            name: 'SQL',
            value: 70,
        },
        {
            name: 'Java',
            value: 70,
        },
        {
            name: 'C',
            value: 50,
        }
    ];

    return (
        <div id="about">
            <div className={styles['content-container']}>
                <div className={styles['content-content']}>
                    {
                        skills.map((skill, index) => (
                            <div key={index}>
                                <h4>{skill.name}</h4>
                                <ProgressBar variant="determinate" value={skill.value} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
