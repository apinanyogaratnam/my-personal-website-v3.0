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
            name: 'Landpeer',
            description: 'A chrome extension that allows you to record in the metaverse',
            image: 'https://i.imgur.com/qXqZqZq.png',
            github: 'https://github.com/apinanyogaratnam/landpeer',
            stack: ['React', 'HTML', 'CSS', 'JavaScript'],
        },
        {
            name: 'Journal my Life',
            description: 'A full-stack web application to write daily journals and view public journals',
            image: 'https://i.imgur.com/qXqZqZq.png',
            github: 'https://github.com/apinanyogaratnam/journal-my-life',
            stack: ['Python', 'Flask', 'React', 'HTML', 'CSS', 'JavaScript', 'Heroku'],
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
