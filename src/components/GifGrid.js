import React,{useEffect,useState} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';


export const GifGrid =  ( {categoria} ) => {

    const {data:images,loading} = useFetchGifs(categoria);

    // console.log(data);
    // console.log(loading);

    // const [images, setImages] = useState([]);

    
    // useEffect( () => {

    //     getGifs(categoria)
    //         .then(imgs => setImages(imgs));
        
    //         //console.log("algo");

    // },[categoria]);

    return (
        <>
            <h3>{categoria}</h3>
            {loading && 'Cargando'}
            <div className="card-grid">
                    {
                        images.map((img)=>(
                            <GifGridItem 
                                    key={img.id}
                                    {...img}
                            />
                        ))
                    }
            
            </div>  
        </>
    )
}
