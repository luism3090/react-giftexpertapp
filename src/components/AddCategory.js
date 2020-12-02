import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (e) =>{
        setInputValue(e.target.value);
    }

    const submitValues = (e) => {
        e.preventDefault();
        if(inputValue.trim().length>0){
            setCategorias(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={submitValues}>
            <input  
                    className='addCategoria' 
                    type="text" 
                    value={inputValue} 
                    onChange={changeInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias:PropTypes.func.isRequired
}