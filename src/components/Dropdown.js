import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/components/dropdown.scss'

function Dropdown({ type, category, content }) {
    const [isContentShown, setIsContentShown] = useState(false)

    const showContent = () => {
        setIsContentShown(!isContentShown)
    }

    return (
        <div className='dropdown__desc'>
            <div className='title-arrow'>
                <h3 className='category'>{category}</h3>
                <i
                    className={
                        isContentShown
                            ? 'fa-solid fa-chevron-down'
                            : 'fa-solid fa-chevron-up'
                    }
                    onClick={showContent}
                ></i>
            </div>
            {isContentShown && 
                (type === 'imgarray' ? (
                    <div className='skills__languages-grid'>
                        {content &&
                            content.map((language) => (
                                <div className='languages' key={language.id}>
                                    <img
                                        src={language.image}
                                        alt={language.alt}
                                    />
                                    <p>{language.title}</p>
                                </div>
                            ))}
                    </div>
                ) : (type === 'array'?(
                    content.map((element) => {
                        return (
                            <NavLink
                                key={element}
                                to={element}
                                className='list-content'
                            >
                                {element}
                            </NavLink>
                        )
                    })
                ):(
                    <p className='list-content'>{content}</p>
                )))
            }
        </div>
    )
}

export default Dropdown
