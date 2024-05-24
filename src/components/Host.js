import React from 'react'
import '../sass/components/host.scss'
import Rating from './Rating'

function Host({ name, picture, rating }) {
    return (
        <div className='project-host'>
            <div className='project-host__profile'>
                <h3>{name}</h3>
                <img
                    src={picture}
                    alt="Portrait de l'hôte"
                    className='project-host__badge'
                />
            </div>
            <Rating rating={rating} />
        </div>
    )
}

export default Host
