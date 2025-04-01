
import React, { useState } from "react"
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onNewCategory = (newCategory) => {
    //No usar push

    //1er forma
    if (categories.map(cat=>cat.toLowerCase()).includes(newCategory.toLowerCase())) return; //Si la categoria existe no hacer nada
    setCategories([newCategory,...categories]);

    //2da Forma
    //setCategories(cat => [...cat,'Hola']);
  }
  

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        
        {/* Input */}
        <AddCategory 
          onNewCategory={onNewCategory}
        />
        {/* Listado de Gif */}
        {categories.map( (category) => (
          <GifGrid key={category} category={category}/>
        ))
        }
    </>
  )
}
