import '../sass/components/projectHeader.scss'
import Tag from './Tag'
import ProjectTitle from './ProjectTitle'

function ProjectHeader({ title, tagArray }) {
    return (
        <div className='project-desc__header'>
            <ProjectTitle title={title} />
            <div className='project-desc__tags'>
                {tagArray.map((tag) => (
                    <Tag tag={tag} key={tag} />
                ))}
            </div>
        </div>
    )
}

export default ProjectHeader
