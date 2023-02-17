import Card from './Card';
import React from 'react';
import s from './Cards.module.css';

export default function Cards({ characters,onClose }) {

   return (
   <div className={s.cartas}>
      { characters.map (({id,name,species,gender,image})=>{
            return (
            <Card     
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image} 
            onClose={()=>onClose(id)} />
      )})
      }
   </div>
   );
}
