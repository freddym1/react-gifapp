import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    // custom hook
    const{ images, isLoading} = useFetchGifs(category);
    // console.log(images, isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
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
