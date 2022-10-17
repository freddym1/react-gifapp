import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category); //getGifs tiene la data
        setImages(newImages);
        setIsLoading(false);
    }

    //se aplica el hook useEffect para cargar una sola vez el helper fetch de la data
    useEffect(() => {
        getImages();
    }, []);


    return {
        // images: images,
        // isLoading: true,
        images,
        isLoading,
    }
}
