import ProjectGrid from '../components/ProjectGrid'
import Banner from '../components/Banner'
import image from '../images/banner.png'

function Home() {
    return (
        <>
            <Banner
                src={image}
                alt='personnage style anime'
                text='Intégrateur web : Mes projets'
            />
            <ProjectGrid />
        </>
    )
}

export default Home
