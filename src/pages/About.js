import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import aboutDb from '../about.json'
import image from '../images/banner.png'
/** SCSS */
import '../sass/pages/about.scss'

function About() {
    return (
        <div className='about-page-layout'>
            <Banner src={image} alt={'personnage style anime'} text='' />
            <div className='about-dropdowns'>
                {aboutDb.map((about) => (
                    <Dropdown
                        key={about.category}
                        category={about.category}
                        content={about.content}
                        type={about.type}
                    />
                ))}
            </div>
        </div>
    )
}

export default About
