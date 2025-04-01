//Librerias de React
import React from 'react';
import './styles.css';
import ReactDOM from  'react-dom/client'; //Herramienta para renderizar
import { GifExpertApp } from './GifExpertApp.jsx';



//Renderizacion de componente
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GifExpertApp/>
    </React.StrictMode>
);