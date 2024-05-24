import '../sass/components/banner.scss'

const Banner = ({src, alt, text,}) => {
    return (
        <div className='banner-text'>
            <img src={src} alt={alt} />
            <h1 className='banner-text__title'>
                <span>{text}</span>
                
            </h1>
        </div>
    )
}

export default Banner
