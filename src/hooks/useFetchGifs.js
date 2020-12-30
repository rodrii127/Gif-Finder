import { useEffect, useState } from "react"
import { getGif } from "../helpers/GetGif";


export const useFetchGifs = ( category ) =>{
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGif( category ).then(imgs => {
            setstate({
                data: imgs,
                loading: false
            });
        })
    }, [category]);
     //si la category cambia, entonces nuestro componente se va a volver a ejecutar
    // //si nosotros enviamos el array vacío [] entonces el useEffect va a ejecutar la petición una única vez...

    return state; //{data: [], loading: true}
}