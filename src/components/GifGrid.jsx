
import React from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs( category ); //Hook

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading ? (<h2>Cargando...</h2>) : null
      }
      <div className='card-grid'>        
        {
          images.map( (image) => (
          <GifItem 
            key={image.id}
            { ...image } //esparcimos la props
          />
          ))
        }       
      </div>  
    </>
  );
}
