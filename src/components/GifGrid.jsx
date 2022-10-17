import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
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
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {...image}//esparce cada propiedad de la imagen en lugar de una a una
                        />
                    ))
                }
            </div>
        </>
    )
}
