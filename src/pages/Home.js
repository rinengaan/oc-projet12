import ProjectGrid from '../components/ProjectGrid'
import Banner from '../components/Banner'
import image from '../images/crique.png'

function Home() {
    return (
        <>
            <Banner
                src={image}
                alt='crique avec reliefs'
                text='Formation intégrateur web : Mes projets'
            />
            <ProjectGrid />
        </>
    )
}

export default Home
