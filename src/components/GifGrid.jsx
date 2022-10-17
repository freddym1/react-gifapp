import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // custom hook
    const{ images, isLoading} = useFetchGifs(category);
    // console.log(images, isLoading);

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
