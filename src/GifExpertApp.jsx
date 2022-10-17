import {useState} from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    // console.log(categories);
    
    //agregar una categoría al estado
    const onAddCategory = () => {
        // console.log('Valorant');
        // se usa setCategories para trabajar con categories
        // se trae el array que tenía con ...categories y se agrega el nuevo
        setCategories(['Valorant', ...categories]); //opción 1
        // setCategories(cat=>[...cat,'Valorant']); //opción 2
    }

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de elementos */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
        </>
    )
}
