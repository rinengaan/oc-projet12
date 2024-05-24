import '../sass/components/projectDesc.scss'
import ProjectHeader from './ProjectHeader'

function ProjectDesc({ title, tagArray }) {
    return (
        <div className='project-desc'>
            <ProjectHeader title={title} tagArray={tagArray} />
        </div>
    )
}

export default ProjectDesc
