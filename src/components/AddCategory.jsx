import { useState } from "react";
// import PropTypes from 'prop-types';

//se toma la props setCategories desestructurada
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => {
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);

        if (inputValue.trim().length <= 1) return; //validar que se ingrese un valor

        //agregar nuevos valores a la lista del padre enviando un callback
        setCategories(catsActuales => [inputValue, ...catsActuales]);
        setInputValue(''); //para dejar la caja vacía
    }

    return (
        // <form onSubmit={(event) => onSubmit(event)}>
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value = {inputValue}
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
