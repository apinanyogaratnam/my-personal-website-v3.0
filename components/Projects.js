import styles from '../styles/Projects.module.css';
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const projects = [
        {
            name: 'Stews Bot',
            description: 'A discord bot that leverages Tensorflow and GPT-3 to answer questions',
            image: 'https://i.imgur.com/qXqZqZq.png',
            github: 'https://github.com/apinanyogaratnam/stews-bot',
            stack: ['Python', 'Repl.it'],
        },
        {
            name: 'Stews Bot',
            description: 'A discord bot that leverages Tensorflow and GPT-3 to answer questions',
            image: 'https://i.imgur.com/qXqZqZq.png',
            github: 'https://github.com/apinanyogaratnam/stews-bot',
            stack: ['Python', 'Repl.it'],
        },
        {
            name: 'Stews Bot',
            description: 'A discord bot that leverages Tensorflow and GPT-3 to answer questions',
            image: 'https://i.imgur.com/qXqZqZq.png',
            github: 'https://github.com/apinanyogaratnam/stews-bot',
            stack: ['Python', 'Repl.it'],
        }
    ]

    return (
        <div id="projects">
            <div className={styles['content-container']}>
                <div className={styles['content-content']}>
                    <h1 className={styles['content-title']}>Projects</h1>
                    <h2 className={styles['content-subtitle']}>Some projects I worked on during my free time</h2>
                    <div className={styles['projects-container']}>
                        {projects.map((project, index) => (
                            <div key={index} className={styles['project-container']}>
                                <ProjectCard project={project}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}