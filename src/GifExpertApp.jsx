import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    // console.log(categories);
    
    //agregar una categoría al estado
    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) return; //validar si ya existe el valor

        // se trae el array que tenía con ...categories y se agrega el nuevo
        // setCategories(cat=>[...cat,'Valorant']); //opción 2
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* componente que envía props y recibe datos del hijo */}
            <AddCategory 
                onNewCategory={(event) => onAddCategory(event)} 
            /> 

            {/* lectura de las categorías */}
            {categories.map(category => ( //es un return 
                    // componente que pinta la grilla
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}
