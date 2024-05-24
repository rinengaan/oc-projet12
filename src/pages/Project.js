/** React Modules */
import { useParams, Navigate } from 'react-router-dom'
import projects from '../db.json'
/** SCSS */
import '../sass/pages/project.scss'

/** Components */
import ProjectDesc from '../components/ProjectDesc'
import Carrousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'

function Project() {
    const { id } = useParams()
    /** Get current project data */
    const currentProject = projects.find((project) => project.id === id)

    /** redirect on incorrect url */
    if (currentProject == null) return <Navigate to='/404' replace />

    return (
        <section className='project-page-layout'>
            <Carrousel urlArray={currentProject.pictures} />
            <ProjectDesc
                title={currentProject.title}
                tagArray={currentProject.tags}
            />
            <div className='dropdowns'>
                <Dropdown
                    category='Description'
                    content={currentProject.description}
                />
                <Dropdown
                    category='Liens'
                    type='array'
                    content={currentProject.liens}
                />
            </div>
        </section>
    )
}

export default Project
