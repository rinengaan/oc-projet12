import { Link } from 'react-router-dom'

/** SCSS */
import '../sass/components/projectCard.scss'

function ProjectCard({ title, url, id }) {
    return (
        <Link to={`/project/${id}`} state={id} className='projet_Card'>
            <img src={url} alt='Aperçu du projet' />
            <div className='projet_Card__title'>{title}</div>
        </Link>
    )
}

export default ProjectCard
