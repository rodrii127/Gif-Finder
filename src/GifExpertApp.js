import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  
  //esto no se usa, a menos que estemos seguros de que no va a cambiar nunca..
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['River Plate']);

  // const handleAdd = () => setCategories([...categories, 'Agregando']);
                        // setCategories(cats => [...cats, 'Agregando']);
  
  
  return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategories = { setCategories }/>

          <hr/>
          <ol>
            {
              //si queremos iterar un arreglo por ejemplo, no es posible utilizar un for debido a que React espera que nosotros
              // retornemos un valor, por lo que se debe utilizar .map, en el cual definimos un nombre del elemento, utilizandolo
            // tanto como elemento así como indice, por lo que se lo utiliza en el "key"...
              categories.map( cat => 
                <GifGrid
                key = {cat} 
                category = {cat}/>
            )}
          </ol>        
        </>
    );
}


export default GifExpertApp;