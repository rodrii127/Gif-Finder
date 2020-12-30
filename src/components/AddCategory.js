import React, { useState } from 'react';
import PropTypes from 'prop-types';

//tenemos que desestructurar lo que nos llega como properties...
const AddCategory = ({ setCategories }) => {
    const [inputValue, setInpuntValue] = useState('');

    //utilizamos este handle para determinar los value que va tomando el input
    const handleInputChange = (e) => {
        //para obtener el valor actual, seteamos el inputValue con el evento.target.value
        setInpuntValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //esto es para prevenir el comportamiento por defecto, y que no se nos refresque el navegador
        e.preventDefault();
        console.log('Submit hecho');

        if (inputValue.trim().length > 2) {
            setCategories( categ => [inputValue, ...categ]);
            setInpuntValue('');
        }
    }

    return (
        //nosotros definiamos el <> para agrupar todo lo que queriamos utilizar en nuestro componente, sin embargo el form ya es
        //un agrupador entonces no es necesario incluir el <>
        <form onSubmit= {handleSubmit}>
            <input
                type="text"
                value={inputValue}
                //cuando el evento cambie, debemos llamar al handle
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;