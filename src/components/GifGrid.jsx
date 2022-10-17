import { useEffect, useState } from "react";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category); //getGifs tiene la data
        setImages(newImages);
    }

    //se aplica el hook useEffect para cargar una sola vez el helper fetch de la data
    useEffect(() => {
        getImages();
    }, []);

    // console.log(images);

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    // images.map(image => (
                    //     <li key={image.id}>{image.title}</li>
                    // ))
                    images.map( ({id,title}) => (
                        <li key={id}>{title}</li>
                    ))
                }
            </ol>
        </>
    )
}
