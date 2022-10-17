import {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    // console.log(categories);
    
    //agregar una categoría al estado
    const onAddCategory = ( newCategory) => {
        // console.log('Valorant');
        // se usa setCategories para trabajar con categories
        // se trae el array que tenía con ...categories y se agrega el nuevo
        // setCategories(['Valorant', ...categories]); //opción 1
        // setCategories(cat=>[...cat,'Valorant']); //opción 2
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} // op1 envía props setCategories y el hijo procesa 
                onNewCategory={(event) => onAddCategory(event)} // op1 envía props y recibe datos del hijo
            /> 

            {/* Listado de elementos */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
