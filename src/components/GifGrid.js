import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGif } from '../helpers/GetGif';
import GifGridItem from './GifGridItem';

//useEffect permite ejecutar cierto código de manera condicional

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h1 className='title animate__animated animate__rotateIn animate__faster'>{category}</h1>

            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p className='loading animate__animated animate__backOutLeft'>Loading</p>}
           
            <div className = 'card-grid'>
                

                {
                    images.map(img => (
                    <GifGridItem 
                        key= { img.id} 
                        {...img}/>))
                }

            </div>

            <hr></hr>
        </>
    )
}
