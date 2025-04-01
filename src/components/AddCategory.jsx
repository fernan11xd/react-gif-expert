
import React, { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {
    setInputValue(target.value); //Para capturar lo que esta ingresando el usuario
  }
  
  const onSubmit = (event) => {
    event.preventDefault(); //No lo afecta el reload
    if(inputValue.trim().length <= 1) return;
    //setCategories((categories) => [inputValue,...categories]);
    
    onNewCategory(inputValue.trim())
    setInputValue('');
  }
  
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
        />    
    </form>  
 )
}
