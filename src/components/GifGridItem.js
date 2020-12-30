import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    return (
        <div className='card animate__animated animate__bounce animate__faster'>
            <img src={url} alt={title}></img>
            <p className='title'> { title } </p>
        </div>
    )
}

export default GifGridItem;