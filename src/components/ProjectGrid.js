import projects from '../db.json'

/** SCSS */
import '../sass/layouts/projectGrid.scss'

/** Components */
import ProjectCard from './ProjectCard'

function ProjectGrid() {
    return (
        <section className='grid'>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    url={project.cover}
                    id={project.id}
                />
            ))}
        </section>
    )
}

export default ProjectGrid
