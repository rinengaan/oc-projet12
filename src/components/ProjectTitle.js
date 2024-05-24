import '../sass/components/projectTitle.scss'
function ProjectTitle({ title }) {
    return (
        <div className='project-desc__title'>
            <h1>{title}</h1>
        </div>
    )
}

export default ProjectTitle
