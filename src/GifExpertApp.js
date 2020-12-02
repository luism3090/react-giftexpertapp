import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () =>{

    //const categorias = ['One puch', 'Samurai x', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['Dragon Ball Z']);

    // const agregarCategoria = () => {
        
    //     //setCategorias([...categorias,'Heroe1']);
    //     setCategorias( cats => [ ...cats, 'Heroe' ] );
        
    // }
    
    return(

        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
        
            <ol>
                {
                    categorias.map( (categoria,i) => (
                        <GifGrid 
                                        key={categoria+i} 
                                        categoria={categoria} 
                        />
                    ))
                }
            </ol>
        </>


    );


}
